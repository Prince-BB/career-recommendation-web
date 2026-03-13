"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Compass } from "lucide-react"
import { questions, likertOptions, calculateResults } from "@/lib/assessment-data"
import type { CareerDomain } from "@/lib/assessment-data"

interface AssessmentFormProps {
  onComplete: (result: {
    domain: CareerDomain
    scores: Record<CareerDomain, number>
  }) => void
  onBack: () => void
}

export function AssessmentForm({ onComplete, onBack }: AssessmentFormProps) {
  const [page, setPage] = useState<0 | 1>(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const totalQuestions = questions.length
  const perPage = 10
  const startIdx = page * perPage
  const endIdx = Math.min(startIdx + perPage, totalQuestions)
  const pageQuestions = questions.slice(startIdx, endIdx)
  const answeredCount = pageQuestions.filter((q) => answers[q.id] !== undefined).length
  const pageComplete = answeredCount === pageQuestions.length
  const progress = ((startIdx + answeredCount) / totalQuestions) * 100

  function handleSelect(questionId: number, val: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: val }))
  }

  function handleNext() {
    if (!pageComplete) return
    if (page === 0) setPage(1)
    else onComplete(calculateResults(answers))
  }

  function handlePrevious() {
    if (page === 1) setPage(0)
  }

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-logo">
          <Compass />
          <span>CareerPath</span>
        </div>
        <button onClick={onBack} className="btn btn-ghost btn-sm">
          <ArrowLeft />
          Back to Home
        </button>
      </header>

      <main className="main-content">
        <div style={{ width: "100%", maxWidth: 760 }}>
          {/* Progress */}
          <div style={{ marginBottom: 32 }}>
            <div className="progress-info">
              <span>
                Questions {startIdx + 1}–{endIdx} of {totalQuestions}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="progress-bar-wrapper">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions (10 per page) */}
          <div className="assessment-questions">
            {pageQuestions.map((q, idx) => {
              const qNumber = startIdx + idx + 1
              return (
                <div key={q.id} className="card">
                  <div className="card-header">
                    <div className="card-description">
                      Question {qNumber} &mdash; {q.domain}
                    </div>
                    <h2 className="card-title">{q.text}</h2>
                  </div>
                  <div className="card-content">
                    <div className="radio-group">
                      {likertOptions.map((option) => {
                        const inputId = `q${q.id}-opt${option.value}`
                        const isSelected = answers[q.id] === option.value
                        return (
                          <label
                            key={option.value}
                            htmlFor={inputId}
                            className={`radio-option ${isSelected ? "radio-option--selected" : ""}`}
                          >
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              id={inputId}
                              value={option.value}
                              checked={isSelected}
                              onChange={() => handleSelect(q.id, option.value)}
                            />
                            {option.label}
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="nav-buttons">
            <button
              className="btn btn-outline"
              onClick={handlePrevious}
              disabled={page === 0}
            >
              <ArrowLeft />
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!pageComplete}
            >
              {page === 0 ? "Next (11–20)" : "See Results"}
              <ArrowRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
