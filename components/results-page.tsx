"use client"

import Link from "next/link"
import {
  Compass,
  RotateCcw,
  BookOpen,
  Cog,
  Heart,
  TrendingUp,
  Palette,
  Briefcase,
  CheckCircle2,
  MapPin,
  IndianRupee,
  Trophy,
  GraduationCap,
  Users,
  BadgeDollarSign,
  FileText,
  Calculator,
  Flame,
} from "lucide-react"
import { careerResults } from "@/lib/assessment-data"
import type { CareerDomain, Branch, College } from "@/lib/assessment-data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

interface ResultsPageProps {
  result: {
    domain: CareerDomain
    scores: Record<CareerDomain, number>
  }
  onRetake: () => void
}

const domainIcons: Record<CareerDomain, React.ReactNode> = {
  Engineering: <Cog style={{ width: 24, height: 24 }} />,
  Medical: <Heart style={{ width: 24, height: 24 }} />,
  Commerce: <TrendingUp style={{ width: 24, height: 24 }} />,
  Arts: <Palette style={{ width: 24, height: 24 }} />,
  Management: <Briefcase style={{ width: 24, height: 24 }} />,
}

const domainColors: Record<CareerDomain, string> = {
  Engineering: "#3b82f6",
  Medical: "#ef4444",
  Commerce: "#22c55e",
  Arts: "#a855f7",
  Management: "#f97316",
}

export function ResultsPage({ result, onRetake }: ResultsPageProps) {
  const career = careerResults[result.domain]

  const chartData = (
    Object.entries(result.scores) as [CareerDomain, number][]
  )
    .sort((a, b) => b[1] - a[1])
    .map(([domain, score]) => ({
      domain,
      score,
      fill: domainColors[domain],
    }))

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-logo">
          <Compass />
          <span>CareerPath</span>
        </div>
        <div className="header-nav">
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
          <Link href="/trending" className="nav-link">
            <Flame />
            Trending
          </Link>
          <button onClick={onRetake} className="btn btn-ghost btn-sm">
            <RotateCcw />
            Retake
          </button>
        </div>
      </header>

      <main className="main-content">
        <div style={{ width: "100%", maxWidth: 960 }}>
          {/* Result Highlight */}
          <div className="result-highlight">
            <div className="result-icon">
              {domainIcons[result.domain]}
            </div>
            <p className="result-label">Your dominant career domain</p>
            <h1 className="result-title">{career.domain}</h1>
            <p className="result-description">{career.description}</p>
          </div>

          {/* Bar Chart */}
          <div className="section">
            <h2 className="section-heading">Score Comparison</h2>
            <p className="section-subheading">
              Bar chart showing your interest score in each domain (max 20 per domain).
            </p>
            <div className="card">
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="domain"
                      tick={{ fontSize: 12, fill: "#64748b" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      domain={[0, 20]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        color: "#1e293b",
                      }}
                    />
                    <Bar dataKey="score" radius={[6, 6, 0, 0]} barSize={48}>
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="section">
            <h2 className="section-heading">Branches in {career.domain}</h2>
            <p className="section-subheading">
              Explore career paths, salaries, fees, and top colleges for each branch.
            </p>
            <div className="branch-list">
              {career.branches.map((branch) => (
                <BranchCard key={branch.name} branch={branch} />
              ))}
            </div>
          </div>

          {/* Suggested Courses */}
          <div className="section">
            <h2 className="section-heading">Suggested Courses</h2>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16 }}>
                  <BookOpen style={{ width: 16, height: 16, color: "var(--color-primary)" }} />
                  Top courses for {career.domain}
                </h3>
              </div>
              <div className="card-content">
                <div className="courses-list">
                  {career.courses.map((course, index) => (
                    <div key={index} className="course-item">
                      <CheckCircle2 />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Retake */}
          <div className="retake-section">
            <button onClick={onRetake} className="btn btn-primary btn-lg">
              <RotateCcw />
              Retake Assessment
            </button>
            <p>Want different results? Try answering the questions again.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        Built to help you find your perfect career path.
      </footer>
    </div>
  )
}

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="card">
      <div className="branch-card-header">
        <h3>{branch.name}</h3>
        <p>{branch.description}</p>
      </div>
      <div className="branch-card-body">
        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-item">
            <BadgeDollarSign />
            <div>
              <p className="stat-label">Salary Range</p>
              <p className="stat-value">{branch.salaryRange}</p>
            </div>
          </div>
          <div className="stat-item">
            <IndianRupee />
            <div>
              <p className="stat-label">Fee Structure</p>
              <p className="stat-value">{branch.feeStructure}</p>
            </div>
          </div>
          <div className="stat-item">
            <Users />
            <div>
              <p className="stat-label">Career Roles</p>
              <p className="stat-value">{branch.careerOpportunities.length}+ roles</p>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="tags-section">
          <p className="tags-label">Career Opportunities</p>
          <div className="tags-list">
            {branch.careerOpportunities.map((role) => (
              <span key={role} className="tag">{role}</span>
            ))}
          </div>
        </div>

        {/* Top Colleges */}
        <div>
          <p className="tags-label">Top Colleges in India</p>
          <div className="colleges-grid">
            {branch.topColleges.map((college) => (
              <CollegeCard key={college.name} college={college} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CollegeCard({ college }: { college: College }) {
  return (
    <div className="college-card">
      <div className="college-top">
        <div className="college-name">
          <GraduationCap />
          <p>{college.name}</p>
        </div>
        <span className="college-ranking">
          <Trophy />
          {college.ranking}
        </span>
      </div>
      <div className="college-meta">
        <span>
          <MapPin />
          {college.location}
        </span>
        <span>
          <IndianRupee />
          {college.annualFee}
        </span>
      </div>
    </div>
  )
}
