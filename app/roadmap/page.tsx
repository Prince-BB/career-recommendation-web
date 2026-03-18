"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Compass,
  Briefcase,
  FileText,
  Calculator,
  Flame,
  GraduationCap,
  Map,
  Search,
  ExternalLink,
  Menu,
  Youtube,
  FileCode,
  Layout,
  Server,
  Database,
  GitBranch,
  Rocket,
  FolderKanban,
  Code,
  Sigma,
  Brain,
  Network,
  Terminal,
  MemoryStick,
  HardDrive,
  Puzzle,
  Wrench,
  Route,
  Coffee,
  BookOpen,
  PenTool,
  Factory,
  Cpu,
  BarChart3,
} from "lucide-react"
import { roadmaps, type RoadmapDomain } from "@/lib/roadmaps-data"

const allDomains = Array.from(new Set(roadmaps.map((r) => r.domain))) as RoadmapDomain[]

const iconMap: Record<string, React.ReactNode> = {
  FileCode: <FileCode />,
  Layout: <Layout />,
  Server: <Server />,
  Database: <Database />,
  GitBranch: <GitBranch />,
  Rocket: <Rocket />,
  FolderKanban: <FolderKanban />,
  Code: <Code />,
  Sigma: <Sigma />,
  Brain: <Brain />,
  Network: <Network />,
  Terminal: <Terminal />,
  MemoryStick: <MemoryStick />,
  HardDrive: <HardDrive />,
  Puzzle: <Puzzle />,
  Wrench: <Wrench />,
  Route: <Route />,
  Coffee: <Coffee />,
  BookOpen: <BookOpen />,
  PenTool: <PenTool />,
  Factory: <Factory />,
  Cpu: <Cpu />,
  BarChart3: <BarChart3 />,
}

export default function RoadmapPage() {
  const [selectedDomain, setSelectedDomain] = useState<RoadmapDomain | "All">("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return roadmaps
      .filter((r) => selectedDomain === "All" || r.domain === selectedDomain)
      .filter((r) => {
        if (!q) return true
        return (
          r.title.toLowerCase().includes(q) ||
          r.domain.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.steps.some((s) => s.title.toLowerCase().includes(q) || s.items.some((i) => i.toLowerCase().includes(q)))
        )
      })
  }, [selectedDomain, query])

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <details className="mobile-nav">
              <summary className="mobile-nav-btn" aria-label="Open navigation">
                <Menu />
              </summary>
              <div className="mobile-nav-panel">
                <Link href="/" className="mobile-nav-link">Assessment</Link>
                <Link href="/career" className="mobile-nav-link">Career</Link>
                <Link href="/exams" className="mobile-nav-link">Exams</Link>
                <Link href="/cutoff" className="mobile-nav-link">Cutoff</Link>
                <Link href="/companies" className="mobile-nav-link">Companies</Link>
                <Link href="/internships" className="mobile-nav-link">Internships</Link>
                <Link href="/roadmap" className="mobile-nav-link mobile-nav-link--active">Roadmap</Link>
                <Link href="/trending" className="mobile-nav-link">Trending</Link>
              </div>
            </details>

            <Link href="/" className="header-logo" style={{ textDecoration: "none" }}>
              <Compass />
              <span>CareerPath</span>
            </Link>
          </div>
          <nav className="header-nav">
            <Link href="/" className="nav-link">
              Assessment
            </Link>
            <Link href="/career" className="nav-link">
              <Briefcase />
              Career
            </Link>
            <Link href="/exams" className="nav-link">
              <FileText />
              Exams
            </Link>
            <Link href="/cutoff" className="nav-link">
              <Calculator />
              Cutoff
            </Link>
            <Link href="/companies" className="nav-link">
              <Briefcase />
              Companies
            </Link>
            <Link href="/internships" className="nav-link">
              <GraduationCap />
              Internships
            </Link>
            <Link href="/trending" className="nav-link">
              <Flame />
              Trending
            </Link>
            <span className="nav-link nav-link--active">
              <Map />
              Roadmap
            </span>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <div className="page-badge">
            <Map />
            Skill Roadmaps
          </div>
          <h1 className="page-title">Skill Roadmap</h1>
          <p className="page-description">
            Choose a target career and follow a clear learning roadmap from basics to projects.
          </p>
        </div>

        <div className="roadmap-toolbar">
          <div className="search-input-wrapper roadmap-search">
            <Search />
            <input
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roadmaps (e.g., React, AI, CAD)..."
            />
          </div>
          <div className="roadmap-filters">
            <button
              className={`filter-btn ${selectedDomain === "All" ? "filter-btn--active" : ""}`}
              onClick={() => setSelectedDomain("All")}
            >
              All
            </button>
            {allDomains.map((d) => (
              <button
                key={d}
                className={`filter-btn ${selectedDomain === d ? "filter-btn--active" : ""}`}
                onClick={() => setSelectedDomain(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <Search />
            <p>No roadmaps found</p>
            <p>Try a different search term or category.</p>
          </div>
        ) : (
          <div className="roadmap-grid">
            {filtered.map((r) => (
              <div key={r.id} className="roadmap-card">
                <div className="roadmap-card-header">
                  <p className="roadmap-domain">{r.domain}</p>
                  <h2 className="roadmap-title">{r.title}</h2>
                  <p className="roadmap-desc">{r.description}</p>
                </div>

                <div className="roadmap-card-body">
                  <ol className="roadmap-steps">
                    {r.steps.map((s, idx) => (
                      <li key={`${r.id}-${idx}`} className="roadmap-step">
                        <div className="roadmap-step-head">
                          <span className="roadmap-step-index">{idx + 1}</span>
                          <span className="roadmap-step-icon">
                            {iconMap[s.icon] ?? <Map />}
                          </span>
                          <p className="roadmap-step-title">{s.title}</p>
                        </div>
                        <div className="roadmap-step-items">
                          {s.items.map((it) => (
                            <span key={it} className="roadmap-chip">
                              {it}
                            </span>
                          ))}
                        </div>
                        {s.youtube && s.youtube.length > 0 ? (
                          <div className="roadmap-videos">
                            {s.youtube.map((v) => (
                              <a
                                key={v.url}
                                className="roadmap-video"
                                href={v.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="roadmap-video-icon">
                                  <Youtube />
                                </span>
                                <span className="roadmap-video-title">{v.label}</span>
                                <ExternalLink />
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ol>

                  {r.practiceLinks && r.practiceLinks.length > 0 ? (
                    <div className="roadmap-links">
                      {r.practiceLinks.map((l) => (
                        <a key={l.url} className="roadmap-link" href={l.url} target="_blank" rel="noreferrer">
                          {l.label} <ExternalLink />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        Tip: Start with one roadmap and build 2–3 projects.
      </footer>
    </div>
  )
}

