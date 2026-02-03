import { useState, useEffect } from 'react'
import { getSeasonalRecommendations, getCurrentSeason, getSeasonEmoji, getPropertyColor } from '../data/seasonalFoods'
import { constitutionIcons, evidenceLevels } from '../data/constitutions'
import SeasonalFoodGuide from './SeasonalFoodGuide'
import ConstitutionRadarChart from './ConstitutionRadarChart'
import { sendFoodGuideDemo } from '../services/emailService'

export default function Results({ results }) {
  const [revealStage, setRevealStage] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [email, setEmail] = useState('')
  const [saveResults, setSaveResults] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFoodGuide, setShowFoodGuide] = useState(false)
  const [hoveredTendency, setHoveredTendency] = useState(null)
  const [activeTab, setActiveTab] = useState('characteristics')
  const [showBloodPanel, setShowBloodPanel] = useState(false)

  const primaryConstitution = results.primary[0]
  const season = getCurrentSeason()
  const seasonalRecs = primaryConstitution ? getSeasonalRecommendations(primaryConstitution.id, season) : null
  const iconPath = primaryConstitution ? constitutionIcons[primaryConstitution.id] : null

  // Safety check
  if (!primaryConstitution) {
    return (
      <div className="min-h-screen bg-neutral-warm flex items-center justify-center">
        <div className="text-center p-6">
          <p className="text-slate-deep/70">Something went wrong. Please retake the quiz.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-earth text-white rounded-lg"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    )
  }

  // Animated reveal sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealStage(1), 500),   // Show icon
      setTimeout(() => setRevealStage(2), 1200),  // Show name
      setTimeout(() => setRevealStage(3), 1800),  // Show tagline
      setTimeout(() => setRevealStage(4), 2500),  // Show description
      setTimeout(() => setShowDetails(true), 3200) // Enable scrolling to details
    ]
    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  return (
    <div className="min-h-screen bg-neutral-warm">
      {/* Hero reveal section */}
      <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-all duration-500 ${showDetails ? 'min-h-0' : ''}`}>
        {/* Icon */}
        <div className={`w-24 h-24 mb-6 rounded-full ${primaryConstitution.headerBg} flex items-center justify-center transition-all duration-700 ${revealStage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          {iconPath ? (
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          ) : (
            <span className="text-4xl">{primaryConstitution.emoji}</span>
          )}
        </div>

        {/* Chinese character */}
        <div className={`text-3xl text-slate-deep/40 mb-2 transition-all duration-500 ${revealStage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          {primaryConstitution.chinese}
        </div>

        {/* Constitution name */}
        <h1 className={`text-3xl font-semibold text-slate-deep mb-3 text-center transition-all duration-500 ${revealStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {primaryConstitution.name}
        </h1>

        {/* Tagline - using Crimson Pro */}
        <p className={`font-serif text-xl text-earth italic mb-6 text-center transition-all duration-500 ${revealStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          "{primaryConstitution.tagline}"
        </p>

        {/* Description */}
        <div className={`max-w-lg text-center transition-all duration-700 ${revealStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-deep/70 leading-relaxed">
            {primaryConstitution.description}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-12 transition-all duration-500 ${showDetails ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-slate-deep/40">
            <span className="text-sm mb-2">Scroll for more</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Details sections */}
      {showDetails && (
        <div className="px-6 pb-12 max-w-lg mx-auto space-y-6">
          {/* Spider/Radar Chart */}
          <ConstitutionRadarChart
            scores={results.scores}
            primaryId={primaryConstitution.id}
          />

          {/* Tendencies section */}
          {results.tendencies.length > 0 && (
            <div className="bg-white rounded-lg p-6 border border-slate-deep/10">
              <h3 className="font-medium text-slate-deep mb-3">You also show tendencies toward:</h3>
              <div className="space-y-2">
                {results.tendencies.map(t => (
                  <div
                    key={t.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTendency(t.id)}
                    onMouseLeave={() => setHoveredTendency(null)}
                  >
                    <div className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-slate-deep/5 cursor-pointer transition-colors">
                      <div className={`w-8 h-8 rounded-full ${t.headerBg} flex items-center justify-center`}>
                        {constitutionIcons[t.id] ? (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d={constitutionIcons[t.id]} />
                          </svg>
                        ) : (
                          <span className="text-sm">{t.emoji}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-slate-deep">{t.name}</span>
                        <span className="text-slate-deep/50 ml-2">({t.chinese})</span>
                      </div>
                      <svg className="w-4 h-4 text-slate-deep/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>

                    {/* Hover tooltip */}
                    {hoveredTendency === t.id && (
                      <div className="mt-2 p-4 bg-slate-deep/5 rounded-lg border border-slate-deep/10 animate-in fade-in duration-200">
                        <p className="font-serif text-sm text-earth italic mb-3">"{t.tagline}"</p>
                        <p className="text-sm text-slate-deep/70 mb-3">{t.corePattern}</p>
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-slate-deep/50 uppercase tracking-wide">Key characteristics:</p>
                          <ul className="text-sm text-slate-deep/70 space-y-1">
                            {t.characteristics.slice(0, 3).map((char, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-sage mt-0.5">•</span>
                                <span>{char}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabbed Profile Section */}
          <div className="bg-white rounded-lg border border-slate-deep/10 overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-slate-deep/10">
              <button
                onClick={() => setActiveTab('characteristics')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'characteristics'
                    ? 'text-slate-deep bg-slate-deep/5 border-b-2 border-gold -mb-px'
                    : 'text-slate-deep/50 hover:text-slate-deep hover:bg-slate-deep/5'
                }`}
              >
                <span className="hidden sm:inline">Characteristics</span>
                <span className="sm:hidden">Traits</span>
              </button>
              <button
                onClick={() => setActiveTab('strengths')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'strengths'
                    ? 'text-sage-dark bg-sage/10 border-b-2 border-sage -mb-px'
                    : 'text-slate-deep/50 hover:text-slate-deep hover:bg-slate-deep/5'
                }`}
              >
                Strengths
              </button>
              <button
                onClick={() => setActiveTab('watchout')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'watchout'
                    ? 'text-earth bg-gold/10 border-b-2 border-gold -mb-px'
                    : 'text-slate-deep/50 hover:text-slate-deep hover:bg-slate-deep/5'
                }`}
              >
                <span className="hidden sm:inline">Watch Out</span>
                <span className="sm:hidden">Avoid</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5">
              {activeTab === 'characteristics' && (
                <div className="animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <span className="text-sm text-slate-deep/60">Common patterns for {primaryConstitution.name}</span>
                  </div>
                  <ul className="space-y-3">
                    {primaryConstitution.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-deep/70">
                        <span className="text-gold mt-1">•</span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'strengths' && (
                <div className="animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span className="text-sm text-slate-deep/60">Natural advantages of your constitution</span>
                  </div>
                  <ul className="space-y-3">
                    {primaryConstitution.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-3 text-sage-dark">
                        <span className="text-sage mt-1">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'watchout' && (
                <div className="animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <span className="text-sm text-slate-deep/60">Things to be mindful of</span>
                  </div>
                  <ul className="space-y-3">
                    {primaryConstitution.watchOutFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-earth">
                        <span className="text-gold mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Swipe hint for mobile */}
            <div className="px-5 pb-4 flex justify-center gap-1.5">
              <div className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'characteristics' ? 'bg-gold' : 'bg-slate-deep/20'}`} />
              <div className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'strengths' ? 'bg-sage' : 'bg-slate-deep/20'}`} />
              <div className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'watchout' ? 'bg-gold' : 'bg-slate-deep/20'}`} />
            </div>
          </div>

          {/* Seasonal Foods */}
          <div className="bg-white rounded-lg p-6 border border-slate-deep/10">
            <h3 className="font-medium text-slate-deep mb-4 flex items-center gap-2">
              <span className="text-xl">{getSeasonEmoji(season)}</span>
              {season.charAt(0).toUpperCase() + season.slice(1)} Food Guide
            </h3>

            {/* Evidence Tag for Food Recommendations */}
            <div className={`${evidenceLevels.ratings.traditional.bgColor} ${evidenceLevels.ratings.traditional.borderColor} border rounded-lg p-2.5 mb-4`}>
              <div className="flex items-center gap-2">
                <span className="text-xs">{evidenceLevels.ratings.traditional.icon}</span>
                <span className={`text-xs font-medium ${evidenceLevels.ratings.traditional.color}`}>{evidenceLevels.ratings.traditional.label}</span>
                <span className="text-xs text-slate-deep/50">|</span>
                <span className="text-xs text-slate-deep/60">Based on classical TCM theory</span>
              </div>
            </div>

            {/* Principle */}
            {seasonalRecs.principle && (
              <p className="font-serif text-slate-deep/60 text-sm mb-4 italic">
                "{seasonalRecs.principle}"
              </p>
            )}

            {/* Emphasize */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-sage-dark uppercase tracking-wide mb-3">
                Emphasize These Foods
              </h4>
              <div className="space-y-2">
                {seasonalRecs.emphasize.map((food, i) => (
                  <div key={i} className="bg-sage/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-deep">{food.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${getPropertyColor(food.property)}`}>
                        {food.property}
                      </span>
                    </div>
                    <p className="text-sage-dark text-sm">{food.benefit}</p>
                    {food.note && (
                      <p className="text-sage text-xs mt-1 italic">{food.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Minimize */}
            {seasonalRecs.minimize && seasonalRecs.minimize.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-earth uppercase tracking-wide mb-3">
                  Minimize or Avoid
                </h4>
                <div className="space-y-2">
                  {seasonalRecs.minimize.map((food, i) => (
                    <div key={i} className="bg-gold/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-slate-deep">{food.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${getPropertyColor(food.property)}`}>
                          {food.property}
                        </span>
                      </div>
                      <p className="text-earth text-sm">{food.reason}</p>
                      {food.examples && (
                        <p className="text-gold text-xs mt-1 italic">e.g., {food.examples}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tea recommendation */}
            {seasonalRecs.tea && (
              <div className="mt-4 pt-4 border-t border-slate-deep/10">
                <p className="text-slate-deep/70 text-sm">
                  <span className="font-medium">Recommended tea:</span> {seasonalRecs.tea}
                </p>
              </div>
            )}

            {/* Open Full Food Guide Button */}
            <button
              onClick={() => setShowFoodGuide(true)}
              className="w-full mt-4 py-3 bg-earth hover:bg-earth-light text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              Open Full Seasonal Food Guide
            </button>
          </div>

          {/* Blood Test Bridge */}
          <div className={`${primaryConstitution.headerBg} rounded-lg p-6 text-white`}>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              Want to Learn More?
            </h3>
            <p className="text-white/90 leading-relaxed mb-4">
              {primaryConstitution.bridgeMessage}
            </p>
            <div className="bg-white/20 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-medium uppercase tracking-wide mb-2">
                Relevant Biomarkers
              </h4>
              <div className="flex flex-wrap gap-2">
                {primaryConstitution.biomarkers.primary.map((marker, i) => (
                  <span key={i} className="px-2 py-1 bg-white/30 rounded text-sm">
                    {marker}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowBloodPanel(true)}
              className="w-full py-3 bg-white text-slate-deep rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Explore Blood Wellness Panel
            </button>
          </div>

          {/* Email Capture */}
          <div className="bg-white rounded-lg p-6 border border-sage/20">
            {!emailSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sage/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-slate-deep text-lg mb-2">
                    Get Your Complete Seasonal Food Guide
                  </h3>
                  <p className="text-slate-deep/60 text-sm">
                    Receive personalized food recommendations for your {primaryConstitution.name} constitution,
                    plus quarterly updates as seasons change.
                  </p>
                </div>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmitting(true)
                    try {
                      // Send the food guide PDF via email
                      await sendFoodGuideDemo({
                        email,
                        constitutionName: primaryConstitution.name,
                        constitutionId: primaryConstitution.id,
                        saveResults
                      })
                      setEmailSubmitted(true)
                    } catch (error) {
                      console.error('Failed to send email:', error)
                      alert('Failed to send email. Please try again.')
                    } finally {
                      setIsSubmitting(false)
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-deep/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all text-slate-deep placeholder-slate-deep/40"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={saveResults}
                      onChange={(e) => setSaveResults(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-slate-deep/30 text-sage focus:ring-sage"
                    />
                    <span className="text-sm text-slate-deep/60">
                      Save my results for later comparison (track how your constitution changes over time)
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-earth hover:bg-earth-light text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send My Guide'
                    )}
                  </button>

                  <p className="text-xs text-slate-deep/40 text-center">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-slate-deep text-lg mb-2">
                  Your Guide is Ready!
                </h3>
                <p className="text-slate-deep/60 text-sm">
                  Your personalized {primaryConstitution.name} Seasonal Food Guide PDF has been opened in a new tab.
                  We'll also send seasonal updates to {email}.
                </p>
                <a
                  href="/tcm_seasonal_food_guide.pdf"
                  download={`TCM_Food_Guide_${primaryConstitution.name.replace(/\s+/g, '_')}.pdf`}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-sage/10 text-sage-dark rounded-lg text-sm font-medium hover:bg-sage/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download PDF Again
                </a>
                {saveResults && (
                  <p className="text-sage text-sm mt-3">
                    Your results have been saved for future comparison.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Retake quiz option */}
          <div className="text-center pt-4">
            <button
              onClick={() => window.location.reload()}
              className="text-slate-deep/50 hover:text-slate-deep underline underline-offset-2"
            >
              Retake the quiz
            </button>
          </div>

          {/* General Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-deep/10">
            <div className="bg-slate-deep/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-deep/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-1">About This Assessment</h4>
                  <p className="text-xs text-slate-deep/60 leading-relaxed mb-2">
                    {evidenceLevels.disclaimers.general}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className={`px-2 py-1 rounded ${evidenceLevels.ratings.strong.bgColor} ${evidenceLevels.ratings.strong.color}`}>
                      {evidenceLevels.ratings.strong.icon} Quiz Validity: Strong Evidence
                    </span>
                    <span className={`px-2 py-1 rounded ${evidenceLevels.ratings.traditional.bgColor} ${evidenceLevels.ratings.traditional.color}`}>
                      {evidenceLevels.ratings.traditional.icon} Food Recommendations: Traditional Theory
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seasonal Food Guide Modal */}
      {showFoodGuide && (
        <SeasonalFoodGuide
          constitution={primaryConstitution}
          onClose={() => setShowFoodGuide(false)}
        />
      )}

      {/* Blood Wellness Panel Modal */}
      {showBloodPanel && (
        <div
          className="fixed inset-0 bg-slate-deep/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowBloodPanel(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`${primaryConstitution.headerBg} p-6 rounded-t-2xl`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-lg">Blood Wellness Panel</h2>
                    <p className="text-white/70 text-sm">For {primaryConstitution.name} Constitution</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBloodPanel(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Based on TCM research, these biomarkers are commonly associated with your constitution pattern and can provide deeper insights.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Evidence Level Tag */}
              {(() => {
                const evidenceKey = evidenceLevels.claimTypes.biomarkers[primaryConstitution.id] || 'moderate';
                const evidence = evidenceLevels.ratings[evidenceKey];
                return (
                  <div className={`${evidence.bgColor} ${evidence.borderColor} border rounded-lg p-3`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{evidence.icon}</span>
                      <span className={`text-sm font-medium ${evidence.color}`}>{evidence.label}</span>
                    </div>
                    <p className="text-xs text-slate-deep/70">{evidence.description}</p>
                  </div>
                );
              })()}

              {/* Primary Biomarkers */}
              <div>
                <h3 className="font-medium text-slate-deep mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage"></span>
                  Recommended Biomarkers
                </h3>
                <div className="space-y-2">
                  {primaryConstitution.biomarkers.primary.map((marker, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-sage/10 rounded-lg">
                      <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
                        </svg>
                      </div>
                      <span className="text-slate-deep font-medium">{marker}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gold/10 rounded-lg p-4">
                <h4 className="font-medium text-earth mb-2 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  Why These Markers?
                </h4>
                <p className="text-earth/80 text-sm leading-relaxed">
                  {primaryConstitution.biomarkers.explanation}
                </p>
              </div>

              {/* Additional biomarker categories if available */}
              {primaryConstitution.biomarkers.immune && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Immune Markers</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.immune}
                  </p>
                </div>
              )}

              {primaryConstitution.biomarkers.metabolic && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Metabolic Markers</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.metabolic}
                  </p>
                </div>
              )}

              {primaryConstitution.biomarkers.hormonal && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Hormonal Markers</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.hormonal}
                  </p>
                </div>
              )}

              {primaryConstitution.biomarkers.inflammatory && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Inflammatory Markers</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.inflammatory}
                  </p>
                </div>
              )}

              {primaryConstitution.biomarkers.gutMicrobiome && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Gut Microbiome</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.gutMicrobiome}
                  </p>
                </div>
              )}

              {primaryConstitution.biomarkers.genetic && (
                <div>
                  <h4 className="text-sm font-medium text-slate-deep/70 mb-2">Genetic Markers</h4>
                  <p className="text-sm text-slate-deep/60 bg-slate-deep/5 p-3 rounded-lg">
                    {primaryConstitution.biomarkers.genetic}
                  </p>
                </div>
              )}

              {/* Research Disclaimer */}
              <div className="bg-slate-deep/5 rounded-lg p-3 border border-slate-deep/10">
                <p className="text-xs text-slate-deep/60 leading-relaxed">
                  <span className="font-medium">Research Note:</span> {evidenceLevels.disclaimers.biomarkers}
                </p>
              </div>

              {/* CTA Section */}
              <div className="border-t border-slate-deep/10 pt-6">
                <div className="text-center mb-4">
                  <h4 className="font-medium text-slate-deep mb-2">Ready to Learn More?</h4>
                  <p className="text-sm text-slate-deep/60">
                    Order a comprehensive blood testing kit to get personalized insights based on your constitution.
                  </p>
                </div>

                <a
                  href="https://example.com/blood-test-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 ${primaryConstitution.headerBg} text-white rounded-lg font-medium text-center hover:opacity-90 transition-all`}
                >
                  Order Blood Testing Kit
                </a>

                <p className="text-xs text-slate-deep/40 text-center mt-3">
                  Convenient at-home testing with detailed analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
