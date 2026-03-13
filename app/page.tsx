"use client"

import { useState } from "react"
import { LandingHero } from "@/components/landing-hero"
import { AssessmentForm } from "@/components/assessment-form"
import { ResultsPage } from "@/components/results-page"
import type { CareerDomain } from "@/lib/assessment-data"

type AppView = "landing" | "assessment" | "results"

export default function Page() {
  const [view, setView] = useState<AppView>("landing")
  const [result, setResult] = useState<{
    domain: CareerDomain
    scores: Record<CareerDomain, number>
  } | null>(null)

  function handleStartAssessment() {
    setResult(null)
    setView("assessment")
  }

  function handleComplete(res: {
    domain: CareerDomain
    scores: Record<CareerDomain, number>
  }) {
    setResult(res)
    setView("results")
  }

  function handleRetake() {
    setResult(null)
    setView("assessment")
  }

  if (view === "assessment") {
    return (
      <AssessmentForm
        onComplete={handleComplete}
        onBack={() => setView("landing")}
      />
    )
  }

  if (view === "results" && result) {
    return <ResultsPage result={result} onRetake={handleRetake} />
  }

  return <LandingHero onStart={handleStartAssessment} />
}
