import { useState, useEffect } from 'react'

const constitutionTypes = [
  { name: 'Balanced', archetype: 'The Thermostat', tagline: 'Harmony in motion', description: 'Good energy, adaptable, resilient. Your system maintains equilibrium naturally.' },
  { name: 'Qi Deficiency', archetype: 'The Candle', tagline: 'Gentle energy that needs nurturing', description: 'Low energy reserves that deplete easily. Benefits from rest and warm, nourishing foods.' },
  { name: 'Yang Deficiency', archetype: 'The Ember', tagline: 'A body that craves warmth', description: 'Tends toward coldness and sluggish metabolism. Thrives with warming foods and activities.' },
  { name: 'Yin Deficiency', archetype: 'The Lightning', tagline: 'Running warm with inner heat', description: 'Runs hot and dry, often restless. Benefits from cooling, moistening foods and calm activities.' },
  { name: 'Phlegm-Dampness', archetype: 'The Fog', tagline: 'A body that holds onto excess', description: 'Prone to accumulation and sluggishness. Benefits from light foods and regular movement.' },
  { name: 'Damp-Heat', archetype: 'The Geyser', tagline: 'Internal heat meeting moisture', description: 'Combination of heat and dampness creating inflammation. Benefits from cooling, draining foods.' },
  { name: 'Blood Stasis', archetype: 'The Glacier', tagline: 'Circulation seeking flow', description: 'Sluggish circulation affecting energy and recovery. Benefits from movement and circulation-promoting foods.' },
  { name: 'Qi Stagnation', archetype: 'The Knot', tagline: 'Emotions seeking expression', description: 'Energy gets stuck, often tied to emotional tension. Benefits from movement, expression, and stress relief.' },
  { name: 'Inherited Special', archetype: 'The Antenna', tagline: 'A sensitive system seeking balance', description: 'Heightened sensitivity to environment and allergens. Benefits from gentle support and avoiding triggers.' },
]

export default function Intro({ onStart }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [activeTab, setActiveTab] = useState('patterns')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % constitutionTypes.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const currentType = constitutionTypes[currentIndex]

  return (
    <div className="min-h-screen bg-neutral-warm flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <div className="w-16 h-16 mb-6 rounded-full bg-earth flex items-center justify-center shadow-sm">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-slate-deep text-center mb-3 max-w-md">
        How Traditional Chinese Medicine Understands Your Body's Patterns
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
              <span className="text-lg font-semibold text-earth">{currentType.archetype}</span>
            </div>
            <p className="text-sm text-slate-deep/70">{currentType.name}</p>
            <p className="text-xs text-slate-deep/50 italic mt-0.5">{currentType.tagline}</p>
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
        {/* Learn More link */}
        <button
          onClick={() => setShowInfoModal(true)}
          className="mt-3 text-sm text-earth hover:text-earth-light underline underline-offset-2 transition-colors"
        >
          View all 9 patterns & learn more
        </button>
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

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowInfoModal(false)}>
          <div className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-xl" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-deep/10 bg-earth text-white">
              <h2 className="text-lg font-semibold">About This Assessment</h2>
              <button
                onClick={() => setShowInfoModal(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-deep/10">
              <button
                onClick={() => setActiveTab('patterns')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'patterns'
                    ? 'text-earth border-b-2 border-earth bg-earth/5'
                    : 'text-slate-deep/60 hover:text-slate-deep'
                }`}
              >
                The 9 Patterns
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'about'
                    ? 'text-earth border-b-2 border-earth bg-earth/5'
                    : 'text-slate-deep/60 hover:text-slate-deep'
                }`}
              >
                About & Disclaimers
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[60vh] p-5">
              {activeTab === 'patterns' && (
                <div className="space-y-3">
                  <p className="text-sm text-slate-deep/70 mb-4">
                    TCM recognizes 9 constitutional patterns. Most people express 2-3 patterns at any given time, with one being primary.
                  </p>
                  {constitutionTypes.map((type, i) => (
                    <div key={i} className="p-4 bg-slate-deep/5 rounded-lg border border-slate-deep/10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-earth">{type.archetype}</p>
                          <p className="text-sm text-slate-deep/70">{type.name}</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-deep/60 mt-2 italic">{type.tagline}</p>
                      <p className="text-sm text-slate-deep/80 mt-2">{type.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'about' && (
                <div className="space-y-6">
                  {/* What is this quiz */}
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">What is this assessment?</h3>
                    <p className="text-sm text-slate-deep/70 leading-relaxed">
                      This quiz is based on the Constitution in Chinese Medicine Questionnaire (CCMQ), a validated instrument developed by Professor Wang Qi and used in clinical research worldwide. It helps identify your current constitutional tendencies according to Traditional Chinese Medicine (TCM) principles.
                    </p>
                  </div>

                  {/* How it works */}
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">How does it work?</h3>
                    <p className="text-sm text-slate-deep/70 leading-relaxed">
                      You'll answer 23 questions about your physical sensations, energy levels, and tendencies. Your responses are scored across all 9 constitutional patterns. Most people show a mix of patterns, with 1-3 being most prominent.
                    </p>
                  </div>

                  {/* Patterns vs personality */}
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">This isn't a personality test</h3>
                    <p className="text-sm text-slate-deep/70 leading-relaxed">
                      Unlike MBTI or Enneagram, TCM constitutions are not fixed identities. They represent your body's current tendencies—patterns that shift with seasons, stress levels, diet, and life circumstances. The goal isn't to "be" a type, but to understand your current state and support balance.
                    </p>
                  </div>

                  {/* Medical disclaimer */}
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-semibold text-amber-800 mb-2">Medical Disclaimer</h3>
                    <p className="text-sm text-amber-900/80 leading-relaxed">
                      This assessment is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease or health condition. The results should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making any changes to your diet, lifestyle, or health regimen.
                    </p>
                  </div>

                  {/* TCM perspective */}
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">The TCM perspective</h3>
                    <p className="text-sm text-slate-deep/70 leading-relaxed">
                      Traditional Chinese Medicine views health as a dynamic balance. Constitutional patterns describe tendencies, not destinies. With awareness and appropriate lifestyle adjustments—including diet, movement, rest, and emotional regulation—patterns can shift toward greater balance over time.
                    </p>
                  </div>

                  {/* Data privacy */}
                  <div>
                    <h3 className="font-semibold text-slate-deep mb-2">Your privacy</h3>
                    <p className="text-sm text-slate-deep/70 leading-relaxed">
                      Your quiz responses are processed locally in your browser. We do not store your answers or results on our servers unless you explicitly choose to save them by providing your email address.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 border-t border-slate-deep/10 bg-slate-deep/5">
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-full py-2.5 bg-earth hover:bg-earth-light text-white font-medium rounded-lg transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
