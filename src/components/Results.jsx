import { useState, useEffect, useRef } from 'react'
import { getSeasonalRecommendations, getCurrentSeason, getSeasonEmoji, getPropertyColor } from '../data/seasonalFoods'
import { constitutionIcons } from '../data/constitutions'
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
  const [showShareCard, setShowShareCard] = useState(false)
  const [expandedSections, setExpandedSections] = useState({ understanding: true })
  const [activeGuideTab, setActiveGuideTab] = useState('notice')
  const [shareStatus, setShareStatus] = useState(null)
  const shareCardRef = useRef(null)

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
        <h1 className={`text-3xl font-semibold text-slate-deep mb-2 text-center transition-all duration-500 ${revealStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {primaryConstitution.name}
        </h1>

        {/* Archetype */}
        {primaryConstitution.archetype && (
          <div className={`text-center mb-4 transition-all duration-500 ${revealStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg font-medium text-earth">{primaryConstitution.archetype}</p>
            <p className="text-sm text-slate-deep/60">"{primaryConstitution.archetypeTitle}"</p>
          </div>
        )}

        {/* Archetype Insight */}
        {primaryConstitution.archetypeInsight && (
          <p className={`font-serif text-lg text-slate-deep/80 italic mb-4 text-center max-w-md transition-all duration-500 ${revealStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            → {primaryConstitution.archetypeInsight}
          </p>
        )}

        {/* Quiet Clue - the "how did it know that?" moment */}
        {primaryConstitution.quietClue && (
          <div className={`mb-6 transition-all duration-700 ${revealStage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-center text-slate-deep/50 text-sm mb-1">You might say:</p>
            <p className="font-serif text-xl text-earth italic text-center">
              "{primaryConstitution.quietClue}"
            </p>
          </div>
        )}

        {/* Description */}
        <div className={`max-w-lg text-center transition-all duration-700 ${revealStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Pattern framing - not identity */}
          <div className="mb-4 p-3 bg-slate-deep/5 rounded-lg border border-slate-deep/10">
            <p className="text-xs text-slate-deep/60 leading-relaxed">
              <span className="font-medium text-slate-deep">This is a pattern you're expressing</span> — not a fixed identity.
              TCM sees tendencies as layered and situational. They shift with seasons, stress, and life phases.
              <span className="italic"> Movement toward balance is the point.</span>
            </p>
          </div>

          {/* Primary constitution percentage bar */}
          {results.theoreticalMax && results.scores && results.scores[0] && (
            <div className="max-w-xs mx-auto">
              <div className="flex justify-between text-sm text-slate-deep/60 mb-1.5">
                <span>Match Strength</span>
                <span>{Math.round((results.scores[0].total / results.theoreticalMax) * 100)}%</span>
              </div>
              <div className="h-2 bg-slate-deep/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${primaryConstitution.headerBg}`}
                  style={{ width: `${Math.round((results.scores[0].total / results.theoreticalMax) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Share button */}
        <div className={`mt-8 transition-all duration-500 ${revealStage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => setShowShareCard(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-deep/20 rounded-full text-slate-deep/70 hover:text-slate-deep hover:border-slate-deep/40 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share Results
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-8 transition-all duration-500 ${showDetails ? 'opacity-100' : 'opacity-0'}`}>
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
          {results.tendencies && results.tendencies.length > 0 && (
            <div className="bg-white rounded-lg p-6 border border-slate-deep/10">
              <h3 className="font-medium text-slate-deep mb-1">Secondary Tendencies</h3>
              <p className="text-sm text-slate-deep/50 mb-4">Other patterns present in your tendency profile</p>
              <div className="space-y-3">
                {results.tendencies.map(t => {
                  // Calculate percentage for the bar using theoretical max
                  const theoreticalMax = results.theoreticalMax || 54
                  const percentage = Math.round((t.score / theoreticalMax) * 100)

                  return (
                  <div
                    key={t.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTendency(t.id)}
                    onMouseLeave={() => setHoveredTendency(null)}
                  >
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-deep/5 hover:bg-slate-deep/10 cursor-pointer transition-colors">
                      <div className={`w-10 h-10 rounded-full ${t.headerBg} flex items-center justify-center flex-shrink-0`}>
                        {constitutionIcons[t.id] ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d={constitutionIcons[t.id]} />
                          </svg>
                        ) : (
                          <span className="text-lg">{t.emoji}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-slate-deep">{t.name}</span>
                          <span className="text-slate-deep/40 text-sm">({t.chinese})</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            t.strength === 'strong'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-deep/10 text-slate-deep/60'
                          }`}>
                            {t.strength === 'strong' ? 'Notable' : 'Mild'}
                          </span>
                        </div>
                        {/* Percentage bar */}
                        <div className="mt-2 h-1.5 bg-slate-deep/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${t.headerBg}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-slate-deep/60 mt-1.5 truncate">{t.tagline}</p>
                      </div>
                      <svg className="w-5 h-5 text-slate-deep/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>

                    {/* Expanded details */}
                    {hoveredTendency === t.id && (
                      <div className="mt-2 p-4 bg-slate-deep/5 rounded-lg border border-slate-deep/10 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Explanation */}
                        <p className="text-sm text-slate-deep/80 mb-4 italic leading-relaxed">{t.description}</p>

                        {/* Common Signs */}
                        <div className="mb-4">
                          <p className="text-xs font-medium text-slate-deep/50 uppercase tracking-wide mb-2">Common Signs</p>
                          <ul className="text-sm text-slate-deep/70 space-y-1.5">
                            {t.characteristics.slice(0, 5).map((char, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${t.headerBg}`}></span>
                                <span>{char}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Lifestyle Guidance */}
                        {t.lifestyleGuidance && (
                          <div className="p-3 bg-sage/10 rounded-lg">
                            <p className="text-xs font-medium text-sage-dark uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                              <span>🧘</span> Lifestyle Guidance
                            </p>
                            <p className="text-sm text-slate-deep/70 leading-relaxed">{t.lifestyleGuidance}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Mode Shifts - Same archetype, different conditions */}
          {primaryConstitution.modes && (
            <div className="bg-white rounded-lg p-6 border border-slate-deep/10">
              <h3 className="font-medium text-slate-deep mb-1 flex items-center gap-2">
                <span>🔄</span> {primaryConstitution.archetype} in Different Conditions
              </h3>
              <p className="text-sm text-slate-deep/50 mb-5">Same pattern, different expressions. Your body has habits under pressure—and they change with support.</p>

              <div className="space-y-4">
                {/* Baseline Mode */}
                <div className="relative pl-6 pb-4 border-l-2 border-slate-deep/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-deep/20 border-2 border-white"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-slate-deep/40 uppercase tracking-wide">Day-to-day</span>
                  </div>
                  <p className="font-medium text-slate-deep">{primaryConstitution.modes.baseline.name}</p>
                  <p className="text-sm text-slate-deep/60">{primaryConstitution.modes.baseline.description}</p>
                  {primaryConstitution.layeredExpression && (
                    <p className="text-xs text-slate-deep/50 mt-2 italic">
                      Your system currently tends to show: {primaryConstitution.layeredExpression.systemTends}
                    </p>
                  )}
                </div>

                {/* Strain Mode */}
                <div className="relative pl-6 pb-4 border-l-2 border-amber-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-white"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">Under prolonged stress</span>
                  </div>
                  <p className="font-medium text-amber-700">{primaryConstitution.modes.strain.name}</p>
                  <p className="text-sm text-amber-700/70">{primaryConstitution.modes.strain.description}</p>
                  {primaryConstitution.layeredExpression && (
                    <div className="mt-2 p-2.5 bg-amber-50 rounded-lg border border-amber-200/50">
                      <p className="text-xs text-amber-800/80">
                        <span className="font-medium">May lean toward:</span> {primaryConstitution.layeredExpression.underPressure}
                      </p>
                    </div>
                  )}
                </div>

                {/* Unsupported / Neglected */}
                {primaryConstitution.layeredExpression && (
                  <div className="relative pl-6 pb-4 border-l-2 border-red-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-300 border-2 border-white"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-red-400 uppercase tracking-wide">If neglected long-term</span>
                    </div>
                    <p className="font-medium text-red-400">Pattern Deepening</p>
                    <div className="mt-1 p-2.5 bg-red-50 rounded-lg border border-red-100">
                      <p className="text-xs text-red-700/80">
                        <span className="font-medium">Can develop:</span> {primaryConstitution.layeredExpression.whenUnsupported}
                      </p>
                    </div>
                  </div>
                )}

                {/* Recovery Mode */}
                <div className="relative pl-6 border-l-2 border-sage">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-sage border-2 border-white"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-sage-dark uppercase tracking-wide">When supported</span>
                  </div>
                  <p className="font-medium text-sage-dark">{primaryConstitution.modes.recovery.name}</p>
                  <p className="text-sm text-sage-dark/70">{primaryConstitution.modes.recovery.description}</p>
                  <p className="text-xs text-sage-dark/60 mt-2 italic">
                    With the right support, these secondary patterns ease and your primary expression stabilizes.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-deep/10">
                <p className="text-xs text-slate-deep/50 italic text-center">
                  The archetype stays the same. The expression changes.
                </p>
              </div>
            </div>
          )}

          {/* Comprehensive Guide Section - Tabbed Interface */}
          <div className="bg-white rounded-2xl border border-slate-deep/10 overflow-hidden shadow-sm">
            {/* Header */}
            <div className={`${primaryConstitution.headerBg} px-5 py-4 text-white`}>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="text-2xl">{primaryConstitution.emoji}</span>
                Your {primaryConstitution.name} Guide
              </h3>
              <p className="text-white/80 text-sm mt-0.5">{primaryConstitution.chinese} • {primaryConstitution.pinyin}</p>
            </div>

            {/* Description - Always visible */}
            <div className="px-5 py-4 border-b border-slate-deep/10">
              <p className="text-slate-deep/70 leading-relaxed text-sm">{primaryConstitution.description}</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto border-b border-slate-deep/10 px-2 pt-2 gap-1 scrollbar-hide">
              {[
                { id: 'notice', label: 'You Might Notice', icon: '👁️' },
                { id: 'signs', label: 'Physical Signs', icon: '🔍' },
                { id: 'strengths', label: 'Strengths', icon: '✨' },
                { id: 'lifestyle', label: 'Lifestyle', icon: '🧘' },
                { id: 'mindful', label: 'Be Mindful', icon: '⚠️' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGuideTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-all ${
                    activeGuideTab === tab.id
                      ? `${primaryConstitution.bgLight} ${primaryConstitution.headerBg === 'bg-sage' || primaryConstitution.headerBg === 'bg-sage-dark' ? 'text-sage-dark' : primaryConstitution.headerBg === 'bg-gold' ? 'text-earth' : 'text-slate-deep'} border-b-2 border-current -mb-[2px]`
                      : 'text-slate-deep/50 hover:text-slate-deep/70 hover:bg-slate-deep/5'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-5 min-h-[220px]">
              {/* You Might Notice */}
              {activeGuideTab === 'notice' && primaryConstitution.behavioralTells && (
                <div className="animate-in fade-in duration-200 space-y-4">
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    When this pattern is expressing, you might notice that you {primaryConstitution.behavioralTells[0]?.toLowerCase()}. It's also common to find yourself {primaryConstitution.behavioralTells[1]?.toLowerCase()}, or to catch yourself {primaryConstitution.behavioralTells[2]?.toLowerCase()}.
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    {primaryConstitution.behavioralTells[3] && `You may also notice a pull toward ${primaryConstitution.behavioralTells[3]?.toLowerCase()}.`} These are signals—your body's way of communicating what it needs right now.
                  </p>
                  {primaryConstitution.bodyReactions && (
                    <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                      <p className="text-sm text-slate-deep/80 leading-relaxed">
                        <span className="font-medium text-purple-700">Under stress</span>, your system currently responds in characteristic ways: {primaryConstitution.bodyReactions.join('. ').toLowerCase()}. Recognizing these patterns early gives you the chance to shift before they deepen.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Physical Signs */}
              {activeGuideTab === 'signs' && (
                <div className="animate-in fade-in duration-200 space-y-4">
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    TCM practitioners look for physical markers that reflect current internal patterns. When this pattern is present, signs often include {primaryConstitution.characteristics.slice(0, 3).join(', ').toLowerCase()}.
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    You might also experience {primaryConstitution.characteristics.slice(3, 5).join(' and ').toLowerCase()}. {primaryConstitution.characteristics[5] && `${primaryConstitution.characteristics[5]} can also show up with this pattern.`}
                  </p>
                  {primaryConstitution.tongueSign && (
                    <div className="p-4 bg-slate-deep/5 rounded-xl">
                      <p className="text-sm text-slate-deep/80 leading-relaxed">
                        <span className="font-medium text-slate-deep">Tongue diagnosis</span> is a key assessment tool in TCM. This pattern often shows: {primaryConstitution.tongueSign.toLowerCase()}. {primaryConstitution.pulseSign && `The pulse may feel ${primaryConstitution.pulseSign.toLowerCase()}.`}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Strengths */}
              {activeGuideTab === 'strengths' && (
                <div className="animate-in fade-in duration-200 space-y-4">
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    When this pattern is in balance, certain qualities tend to emerge more easily. You may find yourself {primaryConstitution.strengths[0]?.toLowerCase()}—not because you're forcing it, but because your system is resourced enough to express it.
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    People expressing this pattern often notice they're {primaryConstitution.strengths[1]?.toLowerCase()}, and find it easier to be {primaryConstitution.strengths[2]?.toLowerCase()}. {primaryConstitution.strengths[3] && `There's also more capacity to be ${primaryConstitution.strengths[3]?.toLowerCase()} when the pattern is supported.`}
                  </p>
                  <div className="p-4 bg-sage/10 rounded-xl border border-sage/30">
                    <p className="text-sm text-sage-dark leading-relaxed">
                      These aren't fixed traits—they're what becomes available when your system has what it needs. Support the pattern, and these qualities have room to show up.
                    </p>
                  </div>
                </div>
              )}

              {/* Lifestyle */}
              {activeGuideTab === 'lifestyle' && (
                <div className="animate-in fade-in duration-200 space-y-4">
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    {primaryConstitution.lifestyleGuidance}
                  </p>
                  {primaryConstitution.seasonalAdvice && (
                    <div className="p-4 bg-gold/10 rounded-xl">
                      <p className="text-sm text-slate-deep/80 leading-relaxed">
                        <span className="font-medium text-earth">Seasonal considerations:</span> {primaryConstitution.seasonalAdvice}
                      </p>
                    </div>
                  )}
                  {primaryConstitution.emotionalTendency && (
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <p className="text-sm text-slate-deep/80 leading-relaxed">
                        <span className="font-medium text-purple-700">Emotionally</span>, this pattern currently leans toward {primaryConstitution.emotionalTendency.toLowerCase()}. Knowing this helps you recognize the terrain and work with it, rather than against it.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Be Mindful */}
              {activeGuideTab === 'mindful' && (
                <div className="animate-in fade-in duration-200 space-y-4">
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    Right now, your system may be more sensitive to certain things. You might find that {primaryConstitution.watchOutFor[0]?.toLowerCase()} affects you more than usual, or that {primaryConstitution.watchOutFor[1]?.toLowerCase()} can throw things off balance.
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    It's also worth noticing how {primaryConstitution.watchOutFor.slice(2).join(' and ').toLowerCase()} land for you. These are patterns to observe and adjust—not permanent restrictions.
                  </p>
                  {primaryConstitution.diseaseRisk && (
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <p className="text-sm text-amber-900/80 leading-relaxed">
                        <span className="font-medium text-amber-700">Patterns to watch:</span> If this pattern goes unsupported over time, there may be increased susceptibility to {primaryConstitution.diseaseRisk.toLowerCase()}. This is useful information for prevention—patterns can shift with the right support.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Seasonal Foods - Visual Card */}
          <div className="bg-gradient-to-br from-sage/10 to-earth/5 rounded-2xl overflow-hidden border border-sage/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-sage to-sage-dark px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{getSeasonEmoji(season)}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{season.charAt(0).toUpperCase() + season.slice(1)} Foods</h3>
                    <p className="text-white/70 text-sm">For your {primaryConstitution.name} constitution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* TCM Food Theory Introduction */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-deep mb-3 flex items-center gap-2">
                    <span>🍽️</span>
                    Food as Medicine in TCM
                  </h4>
                  <p className="text-sm text-slate-deep/70 leading-relaxed mb-3">
                    In Traditional Chinese Medicine, food isn't just nutrition—it's a form of gentle, daily medicine. Every food has a <span className="font-medium text-slate-deep">thermal nature</span> (warming, cooling, or neutral) and an affinity for certain organs. The goal isn't restriction, but alignment: eating in a way that supports what your body is expressing right now.
                  </p>
                  <p className="text-sm text-slate-deep/70 leading-relaxed">
                    Unlike Western diets that focus on calories and macros, TCM food therapy looks at <span className="font-medium text-slate-deep">how food moves energy</span> in your body. A "healthy" food for one pattern might create imbalance in another. That's why your current pattern matters.
                  </p>
                </div>

                {/* Why Season Matters */}
                <div className="bg-white rounded-xl p-4 border border-slate-deep/10">
                  <p className="text-xs font-medium text-sage-dark uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span>{getSeasonEmoji(season)}</span>
                    Why {season.charAt(0).toUpperCase() + season.slice(1)} Matters
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    {season === 'spring' && "Spring is a time of rising energy and renewal. The Liver is most active now, making this an ideal time for light, fresh foods that support detoxification and smooth the flow of Qi. Your body is naturally ready to shed winter's heaviness."}
                    {season === 'summer' && "Summer brings peak Yang energy—heat and expansion. The Heart is most active, and your body needs cooling, hydrating foods to balance the external heat. This is the time for lighter meals, more raw foods, and staying well-hydrated."}
                    {season === 'autumn' && "Autumn is a time of turning inward and letting go. The Lungs are most active, making this season about moistening dryness and building reserves for winter. Warming soups and foods that nourish Yin help your body prepare for the colder months."}
                    {season === 'winter' && "Winter is the most Yin time of year—cold, dark, and still. The Kidneys are most active, and your body needs warming, nourishing foods to conserve energy. This is the time for slow-cooked meals, bone broths, and foods that build deep reserves."}
                  </p>
                </div>

                {/* Your Pattern + This Season */}
                <div className="bg-gradient-to-r from-sage/10 to-gold/10 rounded-xl p-4 border border-sage/20">
                  <p className="text-xs font-medium text-earth uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span>{primaryConstitution.emoji}</span>
                    Your {primaryConstitution.archetype} in {season.charAt(0).toUpperCase() + season.slice(1)}
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed mb-3">
                    {primaryConstitution.corePattern}. Given what your body is currently expressing, {season} brings specific considerations for how you eat.
                  </p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">
                    {primaryConstitution.seasonalAdvice}
                  </p>
                </div>

                {/* Core Dietary Principles */}
                <div className="bg-white rounded-xl p-4 border border-slate-deep/10">
                  <p className="text-xs font-medium text-slate-deep/50 uppercase tracking-wide mb-2">Your Food Principles</p>
                  <p className="text-sm text-slate-deep/80 leading-relaxed">{primaryConstitution.dietaryPrinciples}</p>
                </div>
              </div>

              {/* Tea recommendation */}
              {seasonalRecs.tea && (
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍵</span>
                    <div>
                      <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-1">Recommended Tea for Your Pattern</p>
                      <p className="text-sm text-slate-deep font-medium mb-2">{seasonalRecs.tea}</p>
                      <p className="text-xs text-amber-800/70 leading-relaxed">
                        In TCM, teas are more than beverages—they're a simple way to shift your internal environment. This tea supports your current pattern by {primaryConstitution.id === 'yang_deficient' || primaryConstitution.id === 'qi_deficient' ? 'gently warming and tonifying your system' : primaryConstitution.id === 'yin_deficient' || primaryConstitution.id === 'damp_heat' ? 'cooling and moistening to balance internal heat' : primaryConstitution.id === 'phlegm_dampness' ? 'promoting movement and reducing accumulation' : primaryConstitution.id === 'blood_stasis' ? 'invigorating circulation and promoting flow' : primaryConstitution.id === 'qi_stagnation' ? 'soothing tension and promoting smooth energy flow' : primaryConstitution.id === 'inherited_special' ? 'gently supporting your system without overstimulation' : 'maintaining your current balance'}.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Open Full Food Guide Button */}
              <button
                onClick={() => setShowFoodGuide(true)}
                className="w-full py-3 bg-earth hover:bg-earth-light text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                View Full Food Guide
              </button>
            </div>
          </div>

          {/* Email Capture - Combined for Food Guide & Wellness Updates */}
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
                    Get Your Personalized Wellness Guide
                  </h3>
                  <p className="text-slate-deep/60 text-sm mb-4">
                    Receive your complete {primaryConstitution.name} guide including seasonal food recommendations and biomarker insights.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-sage/10 text-sage-dark rounded-full flex items-center gap-1">
                      <span>🥗</span> Seasonal Food Guide
                    </span>
                    <span className="px-2 py-1 bg-gold/10 text-earth rounded-full flex items-center gap-1">
                      <span>🩸</span> Biomarker Insights
                    </span>
                    <span className="px-2 py-1 bg-slate-deep/5 text-slate-deep/70 rounded-full flex items-center gap-1">
                      <span>📅</span> Quarterly Updates
                    </span>
                  </div>

                  {/* Biomarker Blurb */}
                  <div className="mt-4 p-3 bg-slate-deep/5 rounded-lg">
                    <p className="text-xs text-slate-deep/70 leading-relaxed">
                      <span className="font-medium text-slate-deep">Curious to know more?</span> Biomarkers can provide another level of insight if you want to understand what's happening in your body.
                    </p>
                  </div>
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
                      required
                      className="mt-1 w-4 h-4 rounded border-slate-deep/30 text-sage focus:ring-sage"
                    />
                    <span className="text-sm text-slate-deep/60">
                      I agree to receive wellness updates and seasonal food guides via email <span className="text-red-500">*</span>
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
                      'Get My Wellness Guide'
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
                  You're All Set!
                </h3>
                <p className="text-slate-deep/60 text-sm">
                  Your personalized {primaryConstitution.name} wellness guide has been sent to {email}.
                  You'll also receive seasonal food updates and biomarker insights.
                </p>
                <a
                  href="/tcm_seasonal_food_guide.pdf"
                  download={`TCM_Food_Guide_${primaryConstitution.name.replace(/\s+/g, '_')}.pdf`}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-sage/10 text-sage-dark rounded-lg text-sm font-medium hover:bg-sage/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Food Guide PDF
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

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-deep/10">
            <p className="text-xs text-slate-deep/50 text-center leading-relaxed">
              This assessment is based on traditional Chinese medicine principles and is for educational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Please consult a licensed healthcare practitioner for personalized guidance.
            </p>
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

      {/* Share Card Modal */}
      {showShareCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowShareCard(false)}>
          <div className="w-full max-w-sm" onClick={e => e.stopPropagation()}>
            {/* Share Card */}
            <div ref={shareCardRef} className="bg-gradient-to-br from-neutral-warm to-white rounded-2xl overflow-hidden shadow-xl">
              {/* Header */}
              <div className={`${primaryConstitution.headerBg} p-5 text-center text-white`}>
                <div className="text-3xl mb-2">{primaryConstitution.emoji}</div>
                <h3 className="text-xl font-semibold mb-0.5">{primaryConstitution.name}</h3>
                {primaryConstitution.archetype && (
                  <p className="text-white/90 text-sm font-medium">{primaryConstitution.archetype}</p>
                )}
                <p className="text-white/60 text-xs mt-1">{primaryConstitution.archetypeTitle}</p>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Match Strength */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate-deep/60 mb-1">
                    <span>Match Strength</span>
                    <span>{Math.round((results.scores[0]?.total / results.theoreticalMax) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-slate-deep/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${primaryConstitution.headerBg}`}
                      style={{ width: `${Math.round((results.scores[0]?.total / results.theoreticalMax) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Secondary Tendencies */}
                {results.tendencies && results.tendencies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-deep/50 uppercase tracking-wide mb-2">Secondary Tendencies</p>
                    <div className="flex flex-wrap gap-2">
                      {results.tendencies.slice(0, 3).map(t => (
                        <span key={t.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-deep/5 rounded-full text-sm text-slate-deep/70">
                          <span>{t.emoji}</span>
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* My Tea */}
                {primaryConstitution.recommendedTeas && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🍵</span>
                      <div>
                        <p className="text-[10px] font-medium text-amber-700/60 uppercase tracking-wide">My Tea</p>
                        <p className="text-sm font-medium text-amber-800">{primaryConstitution.recommendedTeas.split(',')[0].trim()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-slate-deep/10 text-center">
                  <p className="text-xs text-slate-deep/40">Take the quiz at tcm-quiz.com</p>
                </div>
              </div>
            </div>

            {/* Share Actions */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={async () => {
                  const shareText = `My TCM Constitution: ${primaryConstitution.name}\n${primaryConstitution.archetype} — "${primaryConstitution.archetypeTitle}"\n\n→ ${primaryConstitution.archetypeInsight}\n\n🍵 My tea: ${primaryConstitution.recommendedTeas?.split(',')[0].trim() || 'Take the quiz to find yours!'}\n\ntcm-quiz.com`

                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: 'My TCM Constitution Results',
                        text: shareText
                      })
                      setShareStatus('shared')
                    } catch (err) {
                      if (err.name !== 'AbortError') {
                        console.error('Share failed:', err)
                      }
                    }
                  } else {
                    await navigator.clipboard.writeText(shareText)
                    setShareStatus('copied')
                    setTimeout(() => setShareStatus(null), 2000)
                  }
                }}
                className="flex-1 py-3 bg-slate-deep text-white rounded-xl font-medium hover:bg-slate-deep/90 transition-colors flex items-center justify-center gap-2"
              >
                {shareStatus === 'copied' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {navigator.share ? 'Share' : 'Copy to Clipboard'}
                  </>
                )}
              </button>
              <button
                onClick={() => setShowShareCard(false)}
                className="px-5 py-3 bg-white border border-slate-deep/20 text-slate-deep/70 rounded-xl font-medium hover:bg-slate-deep/5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
