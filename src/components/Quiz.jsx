import { useState, useMemo } from 'react'
import { quizQuestions, calculateConstitution } from '../data/constitutions'

// Motivational messages for different quiz phases
const getMotivationalMessage = (progress) => {
  if (progress < 25) {
    return "Understanding your unique patterns..."
  } else if (progress < 50) {
    return "Discovering your body's tendencies..."
  } else if (progress < 75) {
    return "Building your tendency profile..."
  } else if (progress < 95) {
    return "Almost there — personalizing your results..."
  } else {
    return "Finalizing your assessment..."
  }
}

export default function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)

  const question = quizQuestions[currentQuestion]
  const totalQuestions = quizQuestions.length
  const progress = ((currentQuestion) / totalQuestions) * 100

  const motivationalMessage = useMemo(() => getMotivationalMessage(progress), [progress])

  const handleAnswer = (optionIndex) => {
    setAnswers(prev => ({ ...prev, [question.id]: optionIndex }))

    setIsTransitioning(true)
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        // Quiz complete - calculate results
        const newAnswers = { ...answers, [question.id]: optionIndex }
        const results = calculateConstitution(newAnswers)
        onComplete(results)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1)
        setIsTransitioning(false)
      }, 200)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-warm">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-slate-deep/10">
        <div className="h-1.5 bg-slate-deep/10">
          <div
            className="h-full bg-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="px-4 py-3 flex items-center justify-between text-sm">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-1 ${currentQuestion === 0 ? 'text-slate-deep/30' : 'text-slate-deep/60 hover:text-slate-deep'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-slate-deep/50 font-medium">
            {currentQuestion + 1} of {totalQuestions}
          </span>
        </div>
      </div>

      {/* Question content */}
      <div className="pt-24 pb-8 px-6 max-w-lg mx-auto">
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          {/* Motivational message */}
          <div className="mb-6 text-center">
            <p className="font-serif text-sm text-earth italic">{motivationalMessage}</p>
          </div>

          {/* Category tag */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-white rounded-md text-sm text-slate-deep/60 font-medium border border-slate-deep/10">
              {question.category}
            </span>
          </div>

          {/* Question with icon */}
          <div className="text-center mb-8">
            {question.icon && (
              <span className="text-4xl block mb-4">{question.icon}</span>
            )}
            <h2 className="text-2xl font-semibold text-slate-deep leading-relaxed">
              {question.text}
            </h2>
          </div>

          {/* Answer options - specific to each question */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = answers[question.id] === index
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 text-left
                    ${isSelected
                      ? 'border-sage bg-sage/10 text-slate-deep'
                      : 'border-slate-deep/15 bg-white hover:border-sage/50 hover:bg-sage/5 text-slate-deep'
                    }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium leading-snug">{option.text}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0
                      ${isSelected
                        ? 'border-sage bg-sage'
                        : 'border-slate-deep/30'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Progress indicator dots */}
          <div className="mt-10 flex justify-center gap-1.5">
            {Array.from({ length: Math.ceil(totalQuestions / 6) }).map((_, i) => {
              const startIdx = i * 6
              const endIdx = Math.min(startIdx + 6, totalQuestions)
              const isActive = currentQuestion >= startIdx && currentQuestion < endIdx
              const isCompleted = currentQuestion >= endIdx
              return (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6 bg-gold' : isCompleted ? 'w-3 bg-gold/60' : 'w-3 bg-slate-deep/20'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
