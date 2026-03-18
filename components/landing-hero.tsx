"use client"

import Link from "next/link"
import { ArrowRight, Compass, BookOpen, Target, Briefcase, FileText, Calculator, Flame, GraduationCap, Map, Menu } from "lucide-react"

interface LandingHeroProps {
  onStart: () => void
}

export function LandingHero({ onStart }: LandingHeroProps) {
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
                <Link href="/career" className="mobile-nav-link">Career</Link>
                <Link href="/exams" className="mobile-nav-link">Exams</Link>
                <Link href="/cutoff" className="mobile-nav-link">Cutoff</Link>
                <Link href="/companies" className="mobile-nav-link">Companies</Link>
                <Link href="/internships" className="mobile-nav-link">Internships</Link>
                <Link href="/roadmap" className="mobile-nav-link">Roadmap</Link>
                <Link href="/trending" className="mobile-nav-link">Trending</Link>
              </div>
            </details>

            <div className="header-logo">
              <Compass />
              <span>CareerPath</span>
            </div>
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
          <Link href="/companies" className="nav-link">
            <Briefcase />
            Companies
          </Link>
          <Link href="/internships" className="nav-link">
            <GraduationCap />
            Internships
          </Link>
          <Link href="/roadmap" className="nav-link">
            <Map />
            Roadmap
          </Link>
          <Link href="/trending" className="nav-link">
            <Flame />
            Trending
          </Link>
          <button onClick={onStart} className="btn btn-primary btn-sm">
            Get Started 
          </button>
          </div>
        </div>
      </header>

      <main className="hero-section">
        <div>
          <div className="hero-badge">
            <Target />
            Free career assessment
          </div>
          <h1 className="hero-title">Career Recommendation System</h1>
          <p className="hero-description">
            Answer 20 interest-based questions and discover your dominant career
            domain across Engineering, Medical, Commerce, Arts, and Management
            with detailed branches, salary info, and top colleges in India.
          </p>
          <div className="hero-cta">
            <button onClick={onStart} className="btn btn-primary btn-lg">
              Start Assessment
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Target />
            </div>
            <h3>Skill Analysis</h3>
            <p>
              20 questions rated Strongly Agree to Strongly Disagree, measuring
              your interests across 5 domains.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Compass />
            </div>
            <h3>Smart Matching</h3>
            <p>
              Visual bar chart compares your scores across Engineering, Medical,
              Commerce, Arts, and Management.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen />
            </div>
            <h3>Course Suggestions</h3>
            <p>
              Detailed branches with salary ranges, fee structures, career
              roles, and top colleges in India.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        Built to help you find your perfect career path.
      </footer>
    </div>
  )
}
