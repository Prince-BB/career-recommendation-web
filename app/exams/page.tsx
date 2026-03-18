"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Compass,
  FileText,
  Briefcase,
  Search,
  GraduationCap,
  BookOpen,
  Calculator,
  Flame,
  Map,
  Menu,
} from "lucide-react"
import { examsByDomain, type DomainExams, type CompetitiveExam } from "@/lib/exams-data"
import type { CareerDomain } from "@/lib/assessment-data"

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

export default function ExamsPage() {
  const [selectedDomain, setSelectedDomain] = useState<CareerDomain | "All">("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDomains = examsByDomain
    .filter((d) => selectedDomain === "All" || d.domain === selectedDomain)
    .map((d) => {
      const query = searchQuery.toLowerCase().trim()
      if (!query) return d
      const filteredExams = d.exams.filter(
        (e) =>
          e.name.toLowerCase().includes(query) ||
          e.conductingBody.toLowerCase().includes(query) ||
          e.eligibility.toLowerCase().includes(query) ||
          e.opportunities.some((o) => o.toLowerCase().includes(query))
      )
      return { ...d, exams: filteredExams }
    })
    .filter((d) => d.exams.length > 0)

  const totalExams = examsByDomain.reduce((sum, d) => sum + d.exams.length, 0)

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
                <Link href="/exams" className="mobile-nav-link mobile-nav-link--active">Exams</Link>
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
            <Link href="/career" className="nav-link">
              <Briefcase />
              Career
            </Link>
            <span className="nav-link nav-link--active">
              <FileText />
              Exams
            </span>
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
            {allDomains.length} Domains &middot; {totalExams} Exams
          </div>
          <h1 className="page-title">Competitive Exams</h1>
          <p className="page-description">
            Explore competitive exams across career domains with eligibility
            criteria, exam patterns, and the opportunities they unlock in India.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search />
            <input
              type="text"
              placeholder="Search exams, conducting bodies, or opportunities..."
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

        {/* Exams List */}
        {filteredDomains.length === 0 ? (
          <div className="empty-state">
            <Search />
            <p>No exams found</p>
            <p>Try a different search term or select another domain.</p>
          </div>
        ) : (
          <div className="exams-list">
            {filteredDomains.map((domainData) => (
              <ExamDomainSection key={domainData.domain} data={domainData} />
            ))}
          </div>
        )}
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        Explore exams or{" "}
        <Link href="/">take the assessment</Link> to discover your ideal career domain.
      </footer>
    </div>
  )
}

function ExamDomainSection({ data }: { data: DomainExams }) {
  return (
    <div className="exam-domain-section">
      {/* Domain Header */}
      <div className={`domain-header ${domainClassMap[data.domain]}`}>
        <div className="domain-header-inner">
          <span style={{ fontSize: 28 }}>{domainSymbols[data.domain]}</span>
          <div>
            <h2>{data.domain}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      {/* Exam Cards Grid */}
      <div className="exams-grid">
        {data.exams.map((exam) => (
          <ExamCard key={exam.name} exam={exam} domain={data.domain} />
        ))}
      </div>
    </div>
  )
}

function ExamCard({ exam, domain }: { exam: CompetitiveExam; domain: CareerDomain }) {
  return (
    <div className="exam-card">
      <div className="exam-card-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <h3>{exam.name}</h3>
          <span className={`domain-badge ${domainClassMap[domain]}`}>{domain}</span>
        </div>
        <p>{exam.conductingBody}</p>
      </div>
      <div className="exam-card-body">
        <div className="exam-detail">
          <p className="exam-detail-label">Eligibility</p>
          <p className="exam-detail-value">{exam.eligibility}</p>
        </div>
        <div className="exam-detail">
          <p className="exam-detail-label">Exam Pattern</p>
          <p className="exam-detail-value">{exam.pattern}</p>
        </div>
        <div className="exam-detail">
          <p className="exam-detail-label">Frequency</p>
          <p className="exam-detail-value">{exam.frequency}</p>
        </div>
        <div className="exam-detail">
          <p className="exam-detail-label">Opportunities</p>
          <div className="exam-opportunities">
            {exam.opportunities.map((opp) => (
              <span key={opp} className="exam-opp-tag">{opp}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
