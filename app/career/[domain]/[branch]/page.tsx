import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Compass,
  Briefcase,
  FileText,
  Calculator,
  Flame,
  MapPin,
  IndianRupee,
  Award,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import { careerResults, type CareerDomain } from "@/lib/assessment-data"
import { trendingCourses } from "@/lib/trending-data"

const domainFromSlug: Record<string, CareerDomain> = {
  engineering: "Engineering",
  medical: "Medical",
  commerce: "Commerce",
  arts: "Arts",
  management: "Management",
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function relatedTrendingFor(domain: CareerDomain, branchName: string) {
  const name = branchName.toLowerCase()

  // Lightweight keyword mapping so "click course → shows trending/research" works for any branch.
  const keywords: string[] = []
  if (domain === "Engineering") keywords.push("engineering", "devops", "cloud", "cyber", "embedded", "ai", "data")
  if (domain === "Medical") keywords.push("bio", "biotech", "medical")
  if (domain === "Arts") keywords.push("design", "media", "marketing")
  if (domain === "Commerce") keywords.push("marketing", "analytics", "data")
  if (domain === "Management") keywords.push("product", "design", "analytics", "marketing")

  if (name.includes("computer") || name.includes("information technology") || name.includes("it")) {
    keywords.push("ai", "data", "cloud", "devops", "cybersecurity")
  }
  if (name.includes("electronics") || name.includes("electrical") || name.includes("embedded") || name.includes("vlsi")) {
    keywords.push("embedded", "iot", "core engineering")
  }
  if (name.includes("design") || name.includes("ui") || name.includes("ux") || name.includes("graphic")) {
    keywords.push("product", "design")
  }
  if (name.includes("media") || name.includes("journalism") || name.includes("mass")) {
    keywords.push("arts", "media", "marketing")
  }
  if (name.includes("pharmacy") || name.includes("biomedical") || name.includes("dent") || name.includes("nursing")) {
    keywords.push("medical", "bio")
  }

  const unique = Array.from(new Set(keywords.map((k) => k.toLowerCase())))

  const matches = trendingCourses.filter((t) => {
    const hay = `${t.title} ${t.domain} ${t.whoItsFor} ${t.recommendedSkills.join(" ")}`
      .toLowerCase()
    return unique.some((k) => hay.includes(k))
  })

  return matches.slice(0, 3)
}

export default function CareerBranchDetailsPage({
  params,
}: {
  params: { domain: string; branch: string }
}) {
  const domainSlug = params.domain.toLowerCase()
  const domain = domainFromSlug[domainSlug]
  if (!domain) notFound()

  const result = careerResults[domain]
  const branchSlug = params.branch.toLowerCase()
  const branch = result.branches.find((b) => slugify(b.name) === branchSlug)
  if (!branch) notFound()

  const relatedTrending = relatedTrendingFor(domain, branch.name)

  const articleLinks = [
    {
      label: "Wikipedia (overview)",
      url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(branch.name)}`,
    },
    {
      label: "Google Scholar (research papers)",
      url: `https://scholar.google.com/scholar?q=${encodeURIComponent(branch.name)}`,
    },
    {
      label: "arXiv (recent papers)",
      url: `https://arxiv.org/search/?query=${encodeURIComponent(branch.name)}&searchtype=all&source=header`,
    },
  ]

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
            <Link href="/career" className="nav-link nav-link--active">
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
            <Link href="/trending" className="nav-link">
              <Flame />
              Trending
            </Link>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <div className="page-badge">
            <BookOpen />
            {domain}
          </div>
          <h1 className="page-title">{branch.name}</h1>
          <p className="page-description">{branch.description}</p>
        </div>

        <div className="cutoff-grid">
          <div className="card cutoff-card">
            <div className="card-header">
              <h2 className="card-title">Scope & Overview</h2>
              <p className="cutoff-help">What you can do after choosing this course/branch.</p>
            </div>
            <div className="card-content">
              <div className="tags-list" style={{ marginBottom: 16 }}>
                {branch.careerOpportunities.map((r) => (
                  <span key={r} className="tag">
                    {r}
                  </span>
                ))}
              </div>
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
            </div>
          </div>

          <div className="card cutoff-card">
            <div className="card-header">
              <h2 className="card-title">Top Colleges</h2>
              <p className="cutoff-help">Popular colleges already listed in your Career section.</p>
            </div>
            <div className="card-content">
              <div className="branch-colleges">
                {branch.topColleges.map((college) => (
                  <div key={college.name} className="branch-college-item">
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
        </div>

        <div className="section">
          <h2 className="section-heading">Trending & Research (related)</h2>
          <p className="section-subheading">
            Hand-picked related trending areas and their research pages.
          </p>
          {relatedTrending.length === 0 ? (
            <div className="card">
              <div className="card-content">
                <p style={{ color: "var(--color-text-muted)" }}>
                  No direct match found. Explore the full <Link href="/trending">Trending</Link> page.
                </p>
              </div>
            </div>
          ) : (
            <div className="trending-grid">
              {relatedTrending.map((t) => (
                <div key={t.id} className="card">
                  <div className="card-header">
                    <div className="card-description">{t.domain}</div>
                    <h3 className="card-title">{t.title}</h3>
                    <p className="trending-who">{t.whoItsFor}</p>
                  </div>
                  <div className="card-content">
                    <p className="trending-section-title">
                      <BookOpen />
                      Research pages
                    </p>
                    <div className="trending-links">
                      {t.researchPages.map((r) => (
                        <a
                          key={r.url}
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="trending-link"
                        >
                          {r.label} <ExternalLink />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="section">
          <h2 className="section-heading">Articles / Current Updates</h2>
          <p className="section-subheading">
            Quick links to read the latest articles and research on this topic.
          </p>
          <div className="card">
            <div className="card-content">
              <div className="trending-links">
                {articleLinks.map((a) => (
                  <a key={a.url} href={a.url} target="_blank" rel="noreferrer" className="trending-link">
                    {a.label} <ExternalLink />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <Link href="/career" className="btn btn-outline">
            Back to Career Library
          </Link>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        Browse more careers on <Link href="/career">Career</Link> or explore <Link href="/trending">Trending</Link>.
      </footer>
    </div>
  )
}

