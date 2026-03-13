"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Compass,
  Briefcase,
  FileText,
  Calculator,
  Flame,
  Search,
  ExternalLink,
  Lightbulb,
  BookOpen,
  Target,
} from "lucide-react"
import { trendingCourses, trendingDomains, type TrendingDomain } from "@/lib/trending-data"

export default function TrendingPage() {
  const [selectedDomain, setSelectedDomain] = useState<TrendingDomain | "All">("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return trendingCourses
      .filter((c) => selectedDomain === "All" || c.domain === selectedDomain)
      .filter((c) => {
        if (!q) return true
        return (
          c.title.toLowerCase().includes(q) ||
          c.domain.toLowerCase().includes(q) ||
          c.whoItsFor.toLowerCase().includes(q) ||
          c.scope.some((s) => s.toLowerCase().includes(q)) ||
          c.currentDevelopments.some((d) => d.toLowerCase().includes(q)) ||
          c.recommendedSkills.some((s) => s.toLowerCase().includes(q))
        )
      })
  }, [selectedDomain, query])

  return (
    <div className="page-wrapper">
      <header className="header">
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" className="header-logo" style={{ textDecoration: "none" }}>
            <Compass />
            <span>CareerPath</span>
          </Link>
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
            <span className="nav-link nav-link--active">
              <Flame />
              Trending
            </span>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <div className="page-badge">
            <Flame />
            Trending Courses in India
          </div>
          <h1 className="page-title">Trending Courses</h1>
          <p className="page-description">
            Explore top trending courses, their scope, what’s developing in the field, and trusted
            research pages to learn more.
          </p>
        </div>

        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search />
            <input
              type="text"
              placeholder="Search courses, skills, scope, developments..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button
              onClick={() => setSelectedDomain("All")}
              className={`filter-btn ${selectedDomain === "All" ? "filter-btn--active" : ""}`}
            >
              All
            </button>
            {trendingDomains.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDomain(d)}
                className={`filter-btn ${selectedDomain === d ? "filter-btn--active" : ""}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <Search />
            <p>No results found</p>
            <p>Try a different search term or select another domain.</p>
          </div>
        ) : (
          <div className="trending-grid">
            {filtered.map((c) => (
              <TrendingCard key={c.id} course={c} />
            ))}
          </div>
        )}
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        Want personalized guidance? <Link href="/">take the assessment</Link>.
      </footer>
    </div>
  )
}

function TrendingCard({
  course,
}: {
  course: (typeof trendingCourses)[number]
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="trending-card-top">
          <div style={{ minWidth: 0 }}>
            <div className="card-description">{course.domain}</div>
            <h2 className="card-title">{course.title}</h2>
          </div>
          <span className="trending-pill">
            <Flame />
            Trending
          </span>
        </div>
        <p className="trending-who">{course.whoItsFor}</p>
      </div>

      <div className="card-content">
        <div className="trending-section">
          <p className="trending-section-title">
            <Target />
            Scope
          </p>
          <div className="trending-tags">
            {course.scope.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="trending-section">
          <p className="trending-section-title">
            <Lightbulb />
            Developments
          </p>
          <ul className="trending-list">
            {course.currentDevelopments.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="trending-section">
          <p className="trending-section-title">
            <BookOpen />
            Research pages
          </p>
          <div className="trending-links">
            {course.researchPages.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="trending-link">
                {r.label} <ExternalLink />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

