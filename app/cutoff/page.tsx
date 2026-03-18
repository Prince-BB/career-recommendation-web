"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Compass,
  Briefcase,
  FileText,
  Calculator,
  GraduationCap,
  Flame,
  Map,
  MapPin,
  IndianRupee,
  Award,
  ExternalLink, 
  Menu,
} from "lucide-react"
import type { Stream } from "@/lib/cutoff-data"

type EngineeringInputs = { maths: string; physics: string; chemistry: string }
type MedicalInputs = { biology: string; physics: string; chemistry: string }
type ArtsInputs = { percentage: string }

type ApiResponse = {
  stream: Stream
  scale: "engineering200" | "percent100"
  score: number
  suggestedCourses: Array<{
    course: string
    entrance: string
    minScore: number
    scale: "engineering200" | "percent100"
    fit: "safe" | "match" | "reach"
  }>
  recommendations: Array<{
    id: string
    stream: Stream
    course: string
    collegeName: string
    location: string
    minScore: number
    scale: "engineering200" | "percent100"
    entrance: string
    approxAnnualFeeINR: string
    highlights: string[]
    website?: string
    fit: "safe" | "match" | "reach"
    gap: number
  }>
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function numOrNaN(v: string) {
  if (!v.trim()) return Number.NaN
  return Number(v)
}

function calcEngineeringCutoff200(inp: EngineeringInputs): number | null {
  const m = numOrNaN(inp.maths)
  const p = numOrNaN(inp.physics)
  const c = numOrNaN(inp.chemistry)
  if (![m, p, c].every(Number.isFinite)) return null
  // Common TN-style cutoff out of 200: Maths (100) + (Physics + Chemistry)/2
  const score = m + (p + c) / 2
  return Math.round(clamp(score, 0, 200) * 100) / 100
}

function calcPercent100(parts: string[]): number | null {
  const nums = parts.map(numOrNaN)
  if (!nums.every(Number.isFinite)) return null
  const avg = nums.reduce((s, n) => s + n, 0) / nums.length
  return Math.round(clamp(avg, 0, 100) * 100) / 100
}

function fitLabel(fit: "safe" | "match" | "reach") {
  if (fit === "safe") return "Safe"
  if (fit === "match") return "Match"
  return "Reach"
}

export default function CutoffPage() {
  const [stream, setStream] = useState<Stream>("engineering")
  const [eng, setEng] = useState<EngineeringInputs>({
    maths: "",
    physics: "",
    chemistry: "",
  })
  const [med, setMed] = useState<MedicalInputs>({
    biology: "",
    physics: "",
    chemistry: "",
  })
  const [arts, setArts] = useState<ArtsInputs>({ percentage: "" })

  const computedScore = useMemo(() => {
    if (stream === "engineering") return calcEngineeringCutoff200(eng)
    if (stream === "medical")
      return calcPercent100([med.biology, med.physics, med.chemistry])
    return calcPercent100([arts.percentage])
  }, [stream, eng, med, arts])

  const scoreLabel =
    stream === "engineering" ? "Engineering cutoff (out of 200)" : "Cutoff / Percentage (out of 100)"

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<ApiResponse | null>(null)

  async function handleRecommend() {
    setError(null)
    setResult(null)

    if (computedScore === null) {
      setError("Please fill all required marks with valid numbers.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch(
        `/api/cutoff?stream=${encodeURIComponent(stream)}&score=${encodeURIComponent(
          String(computedScore)
        )}&limit=6`
      )
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error || "Failed to fetch recommendations.")
      }
      const data = (await res.json()) as ApiResponse
      setResult(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

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
                <Link href="/cutoff" className="mobile-nav-link mobile-nav-link--active">Cutoff</Link>
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
            <Link href="/exams" className="nav-link">
              <FileText />
              Exams
            </Link>
            <Link href="/trending" className="nav-link">
              <Flame />
              Trending
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
            <span className="nav-link nav-link--active">
              <Calculator />
              Cutoff
            </span>
          </nav>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-header">
          <div className="page-badge">
            <Calculator />
            Engineering / Medical / Arts
          </div>
          <h1 className="page-title">Cutoff Calculator & College Recommendation</h1>
          <p className="page-description">
            Enter your marks to calculate your cutoff and get recommended colleges in India with
            course and college details.
          </p>
        </div>

        <div className="cutoff-grid">
          <div className="card cutoff-card">
            <div className="card-header">
              <div className="cutoff-stream-tabs">
                <button
                  className={`filter-btn ${stream === "engineering" ? "filter-btn--engineering" : ""}`}
                  onClick={() => setStream("engineering")}
                  type="button"
                >
                  Engineering
                </button>
                <button
                  className={`filter-btn ${stream === "medical" ? "filter-btn--medical" : ""}`}
                  onClick={() => setStream("medical")}
                  type="button"
                >
                  Medical
                </button>
                <button
                  className={`filter-btn ${stream === "arts" ? "filter-btn--arts" : ""}`}
                  onClick={() => setStream("arts")}
                  type="button"
                >
                  Arts
                </button>
              </div>
              <h2 className="card-title" style={{ marginTop: 12 }}>
                Enter your marks
              </h2>
              <p className="cutoff-help">
                {stream === "engineering"
                  ? "Engineering cutoff uses Maths + (Physics + Chemistry)/2 (score out of 200)."
                  : stream === "medical"
                    ? "Medical cutoff uses average of Biology, Physics, Chemistry (percentage out of 100)."
                    : "Arts cutoff uses your overall percentage (out of 100)."}
              </p>
            </div>

            <div className="card-content">
              {stream === "engineering" && (
                <div className="cutoff-form">
                  <Field
                    label="Maths (0-100)"
                    value={eng.maths}
                    onChange={(v) => setEng((p) => ({ ...p, maths: v }))}
                  />
                  <Field
                    label="Physics (0-100)"
                    value={eng.physics}
                    onChange={(v) => setEng((p) => ({ ...p, physics: v }))}
                  />
                  <Field
                    label="Chemistry (0-100)"
                    value={eng.chemistry}
                    onChange={(v) => setEng((p) => ({ ...p, chemistry: v }))}
                  />
                </div>
              )}

              {stream === "medical" && (
                <div className="cutoff-form">
                  <Field
                    label="Biology (0-100)"
                    value={med.biology}
                    onChange={(v) => setMed((p) => ({ ...p, biology: v }))}
                  />
                  <Field
                    label="Physics (0-100)"
                    value={med.physics}
                    onChange={(v) => setMed((p) => ({ ...p, physics: v }))}
                  />
                  <Field
                    label="Chemistry (0-100)"
                    value={med.chemistry}
                    onChange={(v) => setMed((p) => ({ ...p, chemistry: v }))}
                  />
                </div>
              )}

              {stream === "arts" && (
                <div className="cutoff-form">
                  <Field
                    label="Overall percentage (0-100)"
                    value={arts.percentage}
                    onChange={(v) => setArts({ percentage: v })}
                  />
                </div>
              )}

              <div className="cutoff-actions">
                <div className="cutoff-score">
                  <p className="cutoff-score-label">{scoreLabel}</p>
                  <p className="cutoff-score-value">
                    {computedScore === null ? "--" : computedScore}
                  </p>
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleRecommend}
                  disabled={loading}
                >
                  <Calculator />
                  {loading ? "Calculating..." : "Recommend colleges"}
                </button>
              </div>

              {error && <div className="cutoff-error">{error}</div>}
            </div>
          </div>

          <div className="card cutoff-card">
            <div className="card-header">
              <h2 className="card-title">Recommended colleges</h2>
              <p className="cutoff-help">
                We show a mix of <strong>Match</strong>, <strong>Reach</strong>, and <strong>Safe</strong>{" "}
                options based on your calculated cutoff.
              </p>
            </div>
            <div className="card-content">
              {!result ? (
                <div className="cutoff-empty">
                  <GraduationCap />
                  <p>Enter your marks and click “Recommend colleges”.</p>
                </div>
              ) : (
                <>
                  {result.suggestedCourses.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <p className="cutoff-score-label" style={{ marginBottom: 6 }}>
                        Courses matching your cutoff
                      </p>
                      <div className="course-suggestions">
                        {result.suggestedCourses.map((c) => (
                          <div key={`${c.course}-${c.scale}`} className="course-suggestion">
                            <div style={{ minWidth: 0 }}>
                              <p className="course-suggestion-title">{c.course}</p>
                              <p className="course-suggestion-sub">{c.entrance}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span className={`fit-badge fit-badge--${c.fit}`}>{fitLabel(c.fit)}</span>
                              <span className="course-suggestion-min">Min: {c.minScore}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="recommendations-grid">
                    {result.recommendations.map((r) => (
                      <div key={r.id} className="recommendation-card">
                        <div className="recommendation-top">
                          <div style={{ minWidth: 0 }}>
                            <p className="recommendation-course">{r.course}</p>
                            <p className="recommendation-college">{r.collegeName}</p>
                          </div>
                          <span className={`fit-badge fit-badge--${r.fit}`}>{fitLabel(r.fit)}</span>
                        </div>

                        <div className="recommendation-meta">
                          <span>
                            <MapPin />
                            {r.location}
                          </span>
                          <span>
                            <IndianRupee />
                            {r.approxAnnualFeeINR}
                          </span>
                          <span>
                            <Award />
                            Min: {r.minScore}
                          </span>
                        </div>

                        <div className="recommendation-sub">
                          <p className="recommendation-entrance">{r.entrance}</p>
                          {r.website ? (
                            <a
                              className="recommendation-link"
                              href={r.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Official site <ExternalLink />
                            </a>
                          ) : null}
                        </div>

                        <div className="recommendation-tags">
                          {r.highlights.slice(0, 3).map((h) => (
                            <span key={h} className="tag">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 48 }}>
        You can also browse <Link href="/career">career options</Link> or{" "}
        <Link href="/exams">competitive exams</Link>.
      </footer>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (next: string) => void
}) {
  return (
    <label className="cutoff-field">
      <span className="cutoff-field-label">{label}</span>
      <input
        className="cutoff-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="decimal"
        placeholder="e.g. 95"
      />
    </label>
  )
}

