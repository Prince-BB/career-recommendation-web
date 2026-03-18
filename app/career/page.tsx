"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  Compass,
  ChevronDown,
  ChevronRight,
  MapPin,
  IndianRupee,
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
  FileText,
  Calculator,
  Flame,
  Map,
  Menu,
} from "lucide-react"
import {
  careerResults,
  type CareerDomain,
  type Branch,
} from "@/lib/assessment-data"

function slugifyBranchName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const domainClassMap: Record<CareerDomain, string> = {
  Engineering: "domain-engineering",
  Medical: "domain-medical",
  Commerce: "domain-commerce",
  Arts: "domain-arts",
  Management: "domain-management",
}

const filterClassMap: Record<CareerDomain, string> = {
  Engineering: "filter-btn--engineering",
  Medical: "filter-btn--medical",
  Commerce: "filter-btn--commerce",
  Arts: "filter-btn--arts",
  Management: "filter-btn--management",
}

const domainSymbols: Record<CareerDomain, string> = {
  Engineering: "\u2699",
  Medical: "\u2665",
  Commerce: "\u25B2",
  Arts: "\u2605",
  Management: "\u25C6",
}

const allDomains: CareerDomain[] = ["Engineering", "Medical", "Commerce", "Arts", "Management"]

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDomain, setSelectedDomain] = useState<CareerDomain | "All">("All")
  const [expandedKey, setExpandedKey] = useState<string | null>(null)

  const filteredData = useMemo(() => {
    const domains = selectedDomain === "All" ? allDomains : [selectedDomain]
    const query = searchQuery.toLowerCase().trim()

    return domains
      .map((domain) => {
        const result = careerResults[domain]
        const filteredBranches = query
          ? result.branches.filter(
              (b) =>
                b.name.toLowerCase().includes(query) ||
                b.description.toLowerCase().includes(query) ||
                b.careerOpportunities.some((c) => c.toLowerCase().includes(query)) ||
                b.topColleges.some((c) => c.name.toLowerCase().includes(query))
            )
          : result.branches
        return { domain, result, filteredBranches }
      })
      .filter((d) => d.filteredBranches.length > 0)
  }, [searchQuery, selectedDomain])

  function toggleBranch(key: string) {
    setExpandedKey((prev) => (prev === key ? null : key))
  }

  const totalBranches = allDomains.reduce(
    (sum, d) => sum + careerResults[d].branches.length,
    0
  )

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
                <Link href="/career" className="mobile-nav-link mobile-nav-link--active">Career</Link>
                <Link href="/exams" className="mobile-nav-link">Exams</Link>
                <Link href="/cutoff" className="mobile-nav-link">Cutoff</Link>
                <Link href="/companies" className="mobile-nav-link">Companies</Link>
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
            <Link href="/" className="nav-link">
              Assessment
            </Link>
            <span className="nav-link nav-link--active">
              <Briefcase />
              Career
            </span>
            <Link href="/exams" className="nav-link">
              <FileText />
              Exams
            </Link>
            <Link href="/cutoff" className="nav-link">
              <Calculator />
              Cutoff
            </Link>
            <Link href="/internships" className="nav-link">
              <GraduationCap />
              Internships
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
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        {/* Page Title */}
        <div className="page-header">
          <div className="page-badge">
            <BookOpen />
            {allDomains.length} Domains &middot; {totalBranches} Branches
          </div>
          <h1 className="page-title">Career Guide</h1>
          <p className="page-description">
            Browse all career domains, their branches, career opportunities, salary
            ranges, fee structures, and top colleges with a focus on Tamil Nadu
            institutions.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search />
            <input
              type="text"
              placeholder="Search branches, careers, or colleges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button
              onClick={() => setSelectedDomain("All")}
              className={`filter-btn ${selectedDomain === "All" ? "filter-btn--active" : ""}`}
            >
              All Domains
            </button>
            {allDomains.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDomain(d)}
                className={`filter-btn ${selectedDomain === d ? filterClassMap[d] : ""}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredData.length === 0 ? (
          <div className="empty-state">
            <Search />
            <p>No results found</p>
            <p>Try a different search term or select another domain.</p>
          </div>
        ) : (
          <div>
            {filteredData.map(({ domain, result, filteredBranches }) => (
              <div key={domain} className="domain-section">
                {/* Domain Header */}
                <div className={`domain-header ${domainClassMap[domain]}`}>
                  <div className="domain-header-inner">
                    <span style={{ fontSize: 28 }}>{domainSymbols[domain]}</span>
                    <div>
                      <h2>{domain}</h2>
                      <p>{result.description}</p>
                    </div>
                  </div>
                  <div className="domain-courses">
                    {result.courses.map((c) => (
                      <span
                        key={c}
                        className={`domain-course-tag ${domainClassMap[domain]}`}
                      >
                        <GraduationCap />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Branch Cards */}
                <div className="library-branches-grid">
                  {filteredBranches.map((branch) => {
                    const stableIndex = result.branches.indexOf(branch)
                    const key = `${domain}-${stableIndex}`
                    const isOpen = expandedKey === key
                    return (
                      <BranchCard
                        key={key}
                        branch={branch}
                        domain={domain}
                        isOpen={isOpen}
                        onToggle={() => toggleBranch(key)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        Browse all career options or{" "}
        <Link href="/">take the assessment</Link> to find your best fit.
      </footer>
    </div>
  )
}

function BranchCard({
  branch,
  domain,
  isOpen,
  onToggle,
}: {
  branch: Branch
  domain: CareerDomain
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="expandable-branch">
      <button onClick={onToggle} className="expandable-branch-header">
        {isOpen ? <ChevronDown /> : <ChevronRight />}
        <div className="expandable-branch-info">
          <h3>{branch.name}</h3>
          <p>{branch.description}</p>
        </div>
        <span className={`domain-badge ${domainClassMap[domain]}`}>
          {domain}
        </span>
      </button>

      {isOpen && (
        <div className="expandable-branch-content">
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
            <Link
              className="btn btn-outline btn-sm"
              href={`/career/${domain.toLowerCase()}/${slugifyBranchName(branch.name)}`}
            >
              View full details
            </Link>
          </div>
          {/* Quick stats */}
          <div className="branch-stats">
            <div className="branch-stat">
              <p className="branch-stat-label">Salary Range</p>
              <p className="branch-stat-value">
                <IndianRupee />
                {branch.salaryRange}
              </p>
            </div>
            <div className="branch-stat">
              <p className="branch-stat-label">Fee Structure</p>
              <p className="branch-stat-value">
                <IndianRupee />
                {branch.feeStructure}
              </p>
            </div>
          </div>

          {/* Career Opportunities */}
          <div style={{ marginBottom: 16 }}>
            <p className="branch-sub-label">
              <Briefcase />
              Career Opportunities
            </p>
            <div className="branch-tags">
              {branch.careerOpportunities.map((role) => (
                <span key={role} className="branch-tag">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Top Colleges */}
          <div>
            <p className="branch-sub-label">
              <GraduationCap />
              Top Colleges
            </p>
            <div className="branch-colleges">
              {branch.topColleges.map((college) => (
                <div key={college.name} className="branch-college-item">
                  <div className="branch-college-icon">
                    <GraduationCap />
                  </div>
                  <div className="branch-college-details">
                    <p>{college.name}</p>
                    <div className="branch-college-meta">
                      <span>
                        <MapPin />
                        {college.location}
                      </span>
                      <span>
                        <IndianRupee />
                        {college.annualFee}
                      </span>
                      <span>
                        <Award />
                        {college.ranking}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
