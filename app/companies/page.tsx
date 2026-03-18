"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  Compass,
  Briefcase,
  Search,
  FileText,
  Calculator,
  Flame,
  GraduationCap,
  Map,
  Menu,
  ExternalLink,
  X,
  TrendingUp,
  MapPin,
  Sparkles,
  Workflow,
  Ban,
} from "lucide-react"
import { companies, type Company } from "@/lib/companies-data"

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCompany, setActiveCompany] = useState<Company | null>(null)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const filteredCompanies = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return companies
    return companies.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.industry.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const maxLPAOverall = useMemo(
    () => Math.max(...companies.map((c) => c.maxLPA)),
    []
  )

  const salaryWidthClass = useMemo(() => {
    if (!activeCompany) return "salary-w-0"
    const pct = Math.min(100, Math.round((activeCompany.maxLPA / maxLPAOverall) * 100))
    const bucket = Math.max(0, Math.min(100, Math.round(pct / 5) * 5))
    return `salary-w-${bucket}`
  }, [activeCompany, maxLPAOverall])

  function openOverlay(company: Company) {
    setActiveCompany(company)
    setOverlayOpen(true)
  }

  function closeOverlayNow() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOverlayOpen(false)
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeOverlayNow()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

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
                <Link href="/companies" className="mobile-nav-link mobile-nav-link--active">Companies</Link>
                <Link href="/internships" className="mobile-nav-link">Internships</Link>
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
            <Link href="/" className="nav-link">Assessment</Link>

            <Link href="/career" className="nav-link">
              <Briefcase /> Career
            </Link>

            <Link href="/exams" className="nav-link">
              <FileText /> Exams
            </Link>

            <Link href="/cutoff" className="nav-link">
              <Calculator /> Cutoff
            </Link>

            <Link href="/trending" className="nav-link">
              <Flame /> Trending
            </Link>
            <Link href="/internships" className="nav-link">
              <GraduationCap /> Internships
            </Link>
            <Link href="/roadmap" className="nav-link">
              <Map /> Roadmap
            </Link>

            <span className="nav-link nav-link--active">
              <Briefcase /> Companies
            </span>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <h1 className="page-title">Top Companies Hiring Freshers</h1>
          <p className="page-description">
            Explore companies, roles, salary packages and required skills for fresh graduates.
          </p>
        </div>

        <div className="search-input-wrapper companies-search">
          <Search />
          <input
            type="text"
            placeholder="Search companies or roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="companies-grid">
          {filteredCompanies.map((company) => (
            <div
              key={company.name}
              className="company-card"
              onClick={() => openOverlay(company)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openOverlay(company)
              }}
            >
              <div className="company-card-header">
                <h3 className="company-name">{company.name}</h3>
                <p>{company.industry}</p>
              </div>

              <div className="company-card-body">
                <div className="company-detail">
                  <p className="company-label">Hiring role</p>
                  <p className="company-value">{company.role}</p>
                </div>

                <div className="company-detail">
                  <p className="company-label">Average salary (LPA)</p>
                  <p className="company-value">{company.packageLPA}</p>
                </div>

                <div className="company-skills">
                  {company.skills.map((skill) => (
                    <span key={skill} className="company-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <a className="company-link" href={company.website} target="_blank" rel="noreferrer">
                  Company careers page <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        Discover companies and explore career opportunities.
      </footer>

      {overlayOpen && activeCompany && (
        <div className="company-overlay" onClick={closeOverlayNow}>
          <div
            className="company-overlay-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="company-overlay-header">
              <div>
                <p className="company-overlay-kicker">Company</p>
                <h2 className="company-overlay-title">{activeCompany.name}</h2>
                <p className="company-overlay-subtitle">{activeCompany.industry}</p>
              </div>
              <button className="company-overlay-close" onClick={closeOverlayNow} type="button" aria-label="Close details">
                <X />
              </button>
            </div>

            <div className="company-overlay-content">
              <div className="company-overlay-grid">
                <div className="company-visual-card">
                  <p className="company-visual-title">
                    <TrendingUp /> Salary range (LPA)
                  </p>
                  <p className="company-visual-value">{activeCompany.packageLPA}</p>
                  <div className="salary-bar">
                    <div
                      className={`salary-bar-fill ${salaryWidthClass}`}
                    />
                  </div>
                  <p className="company-visual-note">
                    Typical fresher band: {activeCompany.minLPA}–{activeCompany.maxLPA} LPA
                  </p>
                </div>

                <div className="company-visual-card">
                  <p className="company-visual-title">
                    <Workflow /> Hiring process
                  </p>
                  <p className="company-visual-value company-visual-value--text">
                    {activeCompany.hiringProcess}
                  </p>
                </div>

                <div className="company-visual-card">
                  <p className="company-visual-title">
                    <MapPin /> Headquarters
                  </p>
                  <p className="company-visual-value company-visual-value--text">
                    {activeCompany.headquarters}
                  </p>
                </div>

                <div className="company-visual-card">
                  <p className="company-visual-title">
                    <Sparkles /> Key hiring highlights
                  </p>
                  <ul className="company-overlay-list">
                    {activeCompany.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="company-visual-card">
                  <p className="company-visual-title">
                    <Ban /> Not suitable for
                  </p>
                  <ul className="company-overlay-list">
                    {activeCompany.notSuitableFor.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="company-overlay-section">
                <p className="company-overlay-section-title">Hiring role</p>
                <p className="company-overlay-section-text">{activeCompany.role}</p>
              </div>

              <div className="company-overlay-section">
                <p className="company-overlay-section-title">Preferred skills</p>
                <div className="company-skills">
                  {activeCompany.skills.map((s) => (
                    <span key={s} className="company-skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="company-overlay-actions">
                <a className="btn btn-primary" href={activeCompany.website} target="_blank" rel="noreferrer">
                  Open careers page <ExternalLink />
                </a>
                <Link className="btn btn-outline" href="/career">
                  Explore related careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}