"use client"

import { useEffect, useMemo, useState } from "react"
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
  Building2,
  Timer,
  MapPinned,
  Menu,
} from "lucide-react"
import { internshipData } from "@/lib/internships-data"
import type { CareerDomain } from "@/lib/assessment-data"
import type { InternshipOpportunity } from "@/lib/internships-data"

const domains: CareerDomain[] = ["Engineering", "Medical", "Commerce", "Arts", "Management"]

export default function InternshipsPage() {
  type OpportunityWithMeta = InternshipOpportunity & { _domain: CareerDomain; _branch: string }

  const [domain, setDomain] = useState<CareerDomain | "">("")
  const [branch, setBranch] = useState<string>("")
  const [query, setQuery] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)

  const branchesForDomain = useMemo(() => {
    if (!domain) return []
    const branches = internshipData
      .filter((b) => b.domain === domain)
      .map((b) => b.branchName)
    return Array.from(new Set(branches))
  }, [domain])

  const selected = useMemo(() => {
    if (!domain || !branch) return null
    const match = internshipData.find((b) => b.domain === domain && b.branchName === branch)
    return match ?? null
  }, [domain, branch])

  const filteredOpps = useMemo(() => {
    const q = query.toLowerCase().trim()
    const base: OpportunityWithMeta[] =
      domain && branch
        ? (selected?.opportunities ?? []).map((o) => ({ ...o, _domain: domain as CareerDomain, _branch: branch }))
        : internshipData.flatMap((b) =>
            !domain || b.domain === domain
              ? b.opportunities.map((o) => ({ ...o, _domain: b.domain, _branch: b.branchName }))
              : []
          )
    if (!q) return base
    return base.filter((o) => {
      const hay = `${o.title} ${o.type} ${o.duration} ${o.stipendINR} ${o.skills.join(" ")} ${o.notes.join(" ")}`
        .toLowerCase()
      return hay.includes(q)
    })
  }, [selected, query, domain, branch])

  const suggestions = useMemo(() => {
    const base =
      domain && branch
        ? selected?.opportunities ?? []
        : internshipData.flatMap((b) => (!domain || b.domain === domain ? b.opportunities : []))
    if (base.length === 0) return []
    const skills = base.flatMap((o) => o.skills)
    const uniqueSkills = Array.from(new Set(skills)).slice(0, 10)
    const types = Array.from(new Set(base.map((o) => o.type)))
    const common = ["Remote", "Hybrid", "On-site"].filter((t) => types.includes(t as any))
    return [...common, ...uniqueSkills].slice(0, 10)
  }, [selected, domain, branch])

  // Keep branch valid when domain changes
  useEffect(() => {
    if (branchesForDomain.length === 0) return
    if (!branchesForDomain.includes(branch)) setBranch(branchesForDomain[0]!)
  }, [branchesForDomain, branch])

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
                <Link href="/internships" className="mobile-nav-link mobile-nav-link--active">Internships</Link>
                <Link href="/roadmap" className="mobile-nav-link">Roadmap</Link>
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
            <Link href="/roadmap" className="nav-link">
              <Map />
              Roadmap
            </Link>
            <Link href="/trending" className="nav-link">
              <Flame />
              Trending
            </Link>
            <span className="nav-link nav-link--active">
              <GraduationCap />
              Internships
            </span>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <div className="page-badge">
            <GraduationCap />
            Domain-wise internships
          </div>
          <h1 className="page-title">Internship Opportunities</h1>
          <p className="page-description">
            Select your domain and branch to explore internships, required skills, and where to apply.
          </p>
        </div>

        <div className="internships-toolbar">
          <div className="internships-select">
            <label className="internships-label">Domain</label>
            <select
              className={`internships-dropdown ${!domain ? "internships-dropdown--placeholder" : ""}`}
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value as CareerDomain)
                setBranch("")
              }}
            >
              <option value="" disabled>
                Select domain
              </option>
              {domains.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="internships-select">
            <label className="internships-label">Branch</label>
            <select
              className={`internships-dropdown ${!branch ? "internships-dropdown--placeholder" : ""}`}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              disabled={!domain}
            >
              <option value="" disabled>
                {domain ? "Select branch" : "Select domain first"}
              </option>
              {branchesForDomain.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="search-input-wrapper internships-search">
            <Search />
            <input
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search internships, skills, stipend..."
              onFocus={() => setSearchOpen(true)}
              onBlur={() => {
                // allow clicking suggestion items
                window.setTimeout(() => setSearchOpen(false), 120)
              }}
            />
            {searchOpen && suggestions.length > 0 && (
              <div className="internships-suggest">
                <p className="internships-suggest-title">Quick filters</p>
                <div className="internships-suggest-chips">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="internships-suggest-chip"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setQuery(s)}
                    >
                      {s}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="internships-suggest-chip internships-suggest-chip--clear"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setQuery("")}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {filteredOpps.length === 0 ? (
          <div className="empty-state">
            <Search />
            <p>No internships found</p>
            <p>Try a different search term or filter.</p>
          </div>
        ) : (
          <div className="internships-grid">
            {filteredOpps.map((o) => (
              <div key={`${o.id}-${o._domain}-${o._branch}`} className="internship-card">
                <div className="internship-card-header">
                  <h3>{o.title}</h3>
                  <p>
                    {o._domain} • {o._branch}
                  </p>
                </div>

                <div className="internship-card-body">
                  <div className="internship-meta">
                    <span>
                      <Building2 /> {o.type}
                    </span>
                    <span>
                      <Timer /> {o.duration}
                    </span>
                    <span>
                      <MapPinned /> {o.stipendINR}
                    </span>
                  </div>

                  <div className="internship-skills">
                    {o.skills.map((s) => (
                      <span key={s} className="internship-tag">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="internship-links">
                    {o.whereToApply.map((w) => (
                      <a key={w.url} className="internship-link" href={w.url} target="_blank" rel="noreferrer">
                        {w.label} <ExternalLink />
                      </a>
                    ))}
                  </div>

                  <ul className="internship-notes">
                    {o.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="footer internships-footer">
        Explore <Link href="/companies">Companies</Link> to match internships with hiring roles.
      </footer>
    </div>
  )
}

