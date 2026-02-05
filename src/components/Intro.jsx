import { useState, useEffect } from 'react'

const constitutionTypes = [
  { emoji: '☯️', name: 'Balanced', archetype: 'The Thermostat', tagline: 'Harmony in motion' },
  { emoji: '🍃', name: 'Qi Deficiency', archetype: 'The Candle', tagline: 'Gentle energy that needs nurturing' },
  { emoji: '❄️', name: 'Yang Deficiency', archetype: 'The Ember', tagline: 'A body that craves warmth' },
  { emoji: '🔥', name: 'Yin Deficiency', archetype: 'The Lightning', tagline: 'Running warm with inner heat' },
  { emoji: '💧', name: 'Phlegm-Dampness', archetype: 'The Fog', tagline: 'A body that holds onto excess' },
  { emoji: '🌡️', name: 'Damp-Heat', archetype: 'The Geyser', tagline: 'Internal heat meeting moisture' },
  { emoji: '🩸', name: 'Blood Stasis', archetype: 'The Glacier', tagline: 'Circulation seeking flow' },
  { emoji: '😔', name: 'Qi Stagnation', archetype: 'The Knot', tagline: 'Emotions seeking expression' },
  { emoji: '🌸', name: 'Inherited Special', archetype: 'The Antenna', tagline: 'A sensitive system seeking balance' },
]

export default function Intro({ onStart }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % constitutionTypes.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const currentType = constitutionTypes[currentIndex]

  return (
    <div className="min-h-screen bg-neutral-warm flex flex-col items-center justify-center px-6 py-12">
      {/* Logo/Icon - using subtle constitutional symbol */}
      <div className="w-20 h-20 mb-8 rounded-full bg-white border-2 border-gold/30 flex items-center justify-center shadow-sm">
        <svg className="w-10 h-10 text-earth" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22" />
          <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22" />
          <path d="M2 12H22" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-slate-deep text-center mb-3 max-w-md">
        Discover Your Body's Tendencies Through Traditional Chinese Medicine
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-slate-deep/70 text-center mb-10 max-w-md">
        See what your body needs for every season — spring, summer, fall, and winter
      </p>

      {/* Benefits - horizontal layout */}
      <div className="w-full max-w-2xl grid grid-cols-3 gap-3 mb-8">
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-4 border border-sage/20">
          <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
          </div>
          <h3 className="font-medium text-slate-deep text-sm">Personalized Insights</h3>
          <p className="text-xs text-slate-deep/60 mt-1">Understand your unique tendencies</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-lg p-4 border border-sage/20">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h3 className="font-medium text-slate-deep text-sm">Seasonal Food Guide</h3>
          <p className="text-xs text-slate-deep/60 mt-1">Foods tailored to your tendencies</p>
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-lg p-4 border border-sage/20">
          <div className="w-10 h-10 rounded-lg bg-earth/10 flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <h3 className="font-medium text-slate-deep text-sm">Science Bridge</h3>
          <p className="text-xs text-slate-deep/60 mt-1">Biomarkers for your tendencies</p>
        </div>
      </div>

      {/* 9 Constitution Patterns - Carousel */}
      <div className="w-full max-w-md mb-6">
        <p className="text-xs text-slate-deep/50 text-center mb-3">Discover which patterns you're expressing right now</p>
        <div className="bg-white rounded-xl border border-slate-deep/10 p-4 h-24 flex items-center justify-center overflow-hidden">
          <div
            key={currentIndex}
            className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-2xl">{currentType.emoji}</span>
              <span className="font-medium text-slate-deep">{currentType.name}</span>
            </div>
            <p className="text-sm font-medium text-earth">{currentType.archetype}</p>
            <p className="text-xs text-slate-deep/60 italic mt-0.5">{currentType.tagline}</p>
          </div>
        </div>
        {/* Progress dots */}
        <div className="flex justify-center gap-1 mt-3">
          {constitutionTypes.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-4 bg-gold' : 'w-1 bg-slate-deep/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Time estimate */}
      <p className="text-sm text-slate-deep/50 mb-4">
        23 questions • About 2 minutes
      </p>

      {/* TCM Disclaimer */}
      <div className="w-full max-w-2xl mb-6 p-3 bg-slate-deep/5 rounded-lg border border-slate-deep/10">
        <p className="text-xs text-slate-deep/70 leading-relaxed text-center">
          <span className="font-medium text-slate-deep">This isn't a personality test.</span> Unlike MBTI, TCM sees patterns as layered, situational, and changeable. You're not discovering who you <em>are</em> — you're seeing what you're <em>expressing</em> right now. These patterns shift with seasons, stress, and life phases. Balance is the goal, and movement is the point.
        </p>
      </div>

      {/* Start button - using warm earth color instead of gradient */}
      <button
        onClick={onStart}
        className="w-full max-w-md py-4 bg-earth hover:bg-earth-light text-white font-medium rounded-lg shadow-sm hover:shadow transition-all"
      >
        Begin Assessment
      </button>

      {/* Footer note */}
      <p className="mt-6 text-xs text-slate-deep/40 text-center max-w-md">
        Based on the validated Constitution in Chinese Medicine Questionnaire (CCMQ) used in clinical research
      </p>
    </div>
  )
}
