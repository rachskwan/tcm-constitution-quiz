import { useState, useRef } from 'react'
import { getCurrentSeason, getSeasonEmoji, getSeasonName } from '../data/seasonalFoods'
import { healthFocuses, getHealthFocusFoods, getFoodIcon, getFoodDescription, celebrityConstitutions } from '../data/healthFocusFoods'
import { constitutionIcons, evidenceLevels } from '../data/constitutions'

export default function SeasonalFoodGuide({ constitution, onClose }) {
  const [selectedFocus, setSelectedFocus] = useState('energy')
  const [activeSection, setActiveSection] = useState('browse') // browse, top, avoid, recipe, share
  const [selectedFood, setSelectedFood] = useState(null)
  const [showShareCard, setShowShareCard] = useState(false)
  const [friendEmail, setFriendEmail] = useState('')
  const [friendSent, setFriendSent] = useState(false)
  const shareCardRef = useRef(null)

  const season = getCurrentSeason()
  const year = new Date().getFullYear()
  const focusData = getHealthFocusFoods(constitution.id, selectedFocus)
  const focus = healthFocuses[selectedFocus]
  const celebrities = celebrityConstitutions[constitution.id] || []
  const iconPath = constitutionIcons[constitution.id]

  const focusColors = {
    energy: { bg: 'bg-gold/10', border: 'border-gold/30', text: 'text-earth', headerBg: 'bg-earth', accent: 'bg-gold' },
    digestion: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage-dark', headerBg: 'bg-sage', accent: 'bg-sage' },
    sleep: { bg: 'bg-slate-deep/10', border: 'border-slate-deep/30', text: 'text-slate-deep', headerBg: 'bg-slate-deep', accent: 'bg-slate-deep' },
    immunity: { bg: 'bg-gold/10', border: 'border-gold/30', text: 'text-earth', headerBg: 'bg-gold', accent: 'bg-gold' }
  }

  const colors = focusColors[selectedFocus]

  const handleCompareWithFriend = (e) => {
    e.preventDefault()
    setFriendSent(true)
    console.log('Invite sent to:', friendEmail)
    setTimeout(() => setFriendSent(false), 3000)
  }

  const sections = [
    { id: 'browse', icon: '🍽️', label: 'Browse' },
    { id: 'top', icon: '⭐', label: 'Top 5' },
    { id: 'avoid', icon: '⚠️', label: 'Avoid' },
    { id: 'recipe', icon: '👨‍🍳', label: 'Recipe' },
    { id: 'share', icon: '📤', label: 'Share' },
  ]

  return (
    <div className="fixed inset-0 bg-slate-deep/50 z-50 flex items-end sm:items-center justify-center">
      <div className="bg-neutral-warm w-full max-w-lg h-[85vh] sm:h-[80vh] sm:max-h-[700px] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden">

        {/* Compact Header */}
        <div className={`${colors.headerBg} px-4 py-3 text-white flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              {iconPath ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                </svg>
              ) : (
                <span className="text-lg">{constitution.emoji}</span>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-lg leading-tight">
                {getSeasonEmoji(season)} {getSeasonName(season)} Guide
              </h2>
              <p className="text-white/80 text-xs">{constitution.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Health Focus Pills - Horizontal scroll */}
        <div className="px-4 py-3 border-b border-slate-deep/10 bg-white">
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {Object.values(healthFocuses).map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFocus(f.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedFocus === f.id
                    ? `${focusColors[f.id].headerBg} text-white`
                    : 'bg-slate-deep/5 text-slate-deep/70 hover:bg-slate-deep/10'
                }`}
              >
                <span>{f.icon}</span>
                <span>{f.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">

          {/* Evidence Disclaimer Banner */}
          <div className={`mx-4 mt-4 ${evidenceLevels.ratings.traditional.bgColor} ${evidenceLevels.ratings.traditional.borderColor} border rounded-lg p-3`}>
            <div className="flex items-start gap-2">
              <span className="text-sm mt-0.5">{evidenceLevels.ratings.traditional.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-medium ${evidenceLevels.ratings.traditional.color}`}>
                    {evidenceLevels.ratings.traditional.label}
                  </span>
                </div>
                <p className="text-xs text-slate-deep/70 leading-relaxed">
                  {evidenceLevels.disclaimers.foodRecommendations}
                </p>
              </div>
            </div>
          </div>

          {/* Browse Section */}
          {activeSection === 'browse' && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-deep">
                  {focus.name} Foods
                </h3>
                <span className="text-sm text-slate-deep/50">{focusData.allFoods.length} items</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {focusData.allFoods.map((food, i) => {
                  const foodInfo = getFoodDescription(food);
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedFood({ name: food, type: 'browse', ...foodInfo })}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${colors.bg} ${colors.border} border hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95`}
                    >
                      <span className="text-lg">{getFoodIcon(food)}</span>
                      <span className="text-sm text-slate-deep font-medium">{food}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        foodInfo.thermal === 'Hot' ? 'bg-red-100 text-red-700' :
                        foodInfo.thermal === 'Warm' ? 'bg-orange-100 text-orange-700' :
                        foodInfo.thermal === 'Neutral' ? 'bg-gray-100 text-gray-600' :
                        foodInfo.thermal === 'Cool' ? 'bg-blue-100 text-blue-700' :
                        foodInfo.thermal === 'Cold' ? 'bg-indigo-100 text-indigo-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {foodInfo.thermal}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Top 5 Section */}
          {activeSection === 'top' && (
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-medium text-slate-deep mb-1">Top 5 to Emphasize</h3>
                <p className="text-sm text-slate-deep/50">Best foods for {focus.name.toLowerCase()} support</p>
              </div>

              <div className="space-y-3">
                {focusData.top5.map((food, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFood({ ...food, type: 'top' })}
                    className={`w-full p-4 rounded-xl ${colors.bg} flex items-center gap-4 text-left hover:scale-[1.02] transition-transform active:scale-[0.98]`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                      {getFoodIcon(food.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full ${colors.accent} text-white text-xs flex items-center justify-center font-medium`}>
                          {i + 1}
                        </span>
                        <p className="font-medium text-slate-deep">{food.name}</p>
                      </div>
                      <p className="text-sm text-slate-deep/60 mt-1 line-clamp-2">{food.reason}</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-deep/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Avoid Section */}
          {activeSection === 'avoid' && (
            <div className="p-4">
              <div className="mb-4">
                <h3 className="font-medium text-slate-deep mb-1">5 to Minimize</h3>
                <p className="text-sm text-slate-deep/50">Foods that may not support your {focus.name.toLowerCase()}</p>
              </div>

              <div className="space-y-3">
                {focusData.minimize5.map((food, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFood({ ...food, type: 'avoid' })}
                    className="w-full p-4 rounded-xl bg-gold/10 flex items-center gap-4 text-left hover:scale-[1.02] transition-transform active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm opacity-60">
                      🚫
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-deep">{food.name}</p>
                      <p className="text-sm text-earth/70 mt-1 line-clamp-2">{food.reason}</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-deep/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recipe Section */}
          {activeSection === 'recipe' && (
            <div className="p-4">
              <div className="bg-white rounded-xl border border-slate-deep/10 overflow-hidden">
                {/* Recipe Header */}
                <div className={`${colors.headerBg} p-4 text-white`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">👨‍🍳</span>
                    <span className="text-sm text-white/80">Simple Recipe</span>
                  </div>
                  <h3 className="text-xl font-semibold">{focusData.recipe.name}</h3>
                  <p className="text-white/80 text-sm mt-1">Perfect for {focus.name.toLowerCase()} support</p>
                </div>

                {/* Ingredients */}
                <div className="p-4 border-b border-slate-deep/10">
                  <h4 className="font-medium text-slate-deep mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center text-sm">🥬</span>
                    Ingredients
                  </h4>
                  <ul className="space-y-2">
                    {focusData.recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-deep/70">
                        <span className="w-5 h-5 rounded bg-slate-deep/10 flex items-center justify-center text-xs text-slate-deep/50">
                          {i + 1}
                        </span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div className="p-4">
                  <h4 className="font-medium text-slate-deep mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-sm">📝</span>
                    Instructions
                  </h4>
                  <p className="text-slate-deep/70 leading-relaxed">{focusData.recipe.instructions}</p>
                </div>
              </div>
            </div>
          )}

          {/* Share Section */}
          {activeSection === 'share' && (
            <div className="p-4 space-y-4">
              {/* Quick Summary Card */}
              <div className={`${colors.bg} rounded-xl p-4`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-full ${colors.headerBg} flex items-center justify-center`}>
                    {iconPath ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                      </svg>
                    ) : (
                      <span className="text-xl">{constitution.emoji}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-deep">{constitution.name}</p>
                    <p className="text-sm text-slate-deep/50">{focus.name} Focus • {getSeasonName(season)} {year}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {focusData.top5.slice(0, 3).map((food, i) => (
                    <div key={i} className="flex-1 bg-white rounded-lg p-2 text-center">
                      <span className="text-xl block">{getFoodIcon(food.name)}</span>
                      <span className="text-[10px] text-slate-deep/60">{food.name.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Actions */}
              <button
                onClick={() => setShowShareCard(true)}
                className={`w-full py-3 ${colors.headerBg} text-white rounded-xl font-medium flex items-center justify-center gap-2`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                Create Story Card
              </button>

              {/* Invite Friend */}
              <div className="bg-white rounded-xl p-4 border border-slate-deep/10">
                <h4 className="font-medium text-slate-deep mb-3">Compare with a friend</h4>
                {!friendSent ? (
                  <form onSubmit={handleCompareWithFriend} className="flex gap-2">
                    <input
                      type="email"
                      value={friendEmail}
                      onChange={(e) => setFriendEmail(e.target.value)}
                      placeholder="Friend's email"
                      required
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-deep/20 text-sm focus:outline-none focus:border-sage text-slate-deep"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-deep text-white rounded-lg text-sm font-medium"
                    >
                      Invite
                    </button>
                  </form>
                ) : (
                  <p className="text-sage text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Invite sent!
                  </p>
                )}
              </div>

              {/* Celebrities */}
              {celebrities.length > 0 && (
                <div className="bg-gold/10 rounded-xl p-4">
                  <h4 className="font-medium text-slate-deep mb-2 flex items-center gap-2">
                    <span>⭐</span>
                    Famous {constitution.name} types
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {celebrities.map((celeb, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-slate-deep">
                        {celeb}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-deep/40 mt-2">*Based on public characteristics</p>
                </div>
              )}

              {/* Seasonal Reminder */}
              <div className="bg-sage/10 rounded-xl p-4">
                <p className="text-sm text-sage-dark">
                  <span className="font-medium">Tip:</span> Retake the quiz when seasons change for updated recommendations.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-slate-deep/10 bg-white px-2 py-2 flex justify-around">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
                activeSection === section.id
                  ? `${colors.bg} ${colors.text}`
                  : 'text-slate-deep/50 hover:text-slate-deep'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="text-[10px] font-medium mt-0.5">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Food Detail Modal */}
        {selectedFood && (
          <div
            className="absolute inset-0 bg-slate-deep/40 flex items-center justify-center z-10 p-4"
            onClick={() => setSelectedFood(null)}
          >
            <div
              className="bg-white w-full max-w-xs rounded-2xl overflow-hidden shadow-xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                {/* Header with icon and name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${selectedFood.type === 'avoid' ? 'bg-gold/10' : colors.bg} flex items-center justify-center text-2xl`}>
                    {selectedFood.type === 'avoid' ? '🚫' : getFoodIcon(selectedFood.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-deep">{selectedFood.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      {selectedFood.thermal && selectedFood.type === 'browse' && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                          selectedFood.thermal === 'Hot' ? 'bg-red-100 text-red-700' :
                          selectedFood.thermal === 'Warm' ? 'bg-orange-100 text-orange-700' :
                          selectedFood.thermal === 'Neutral' ? 'bg-gray-100 text-gray-600' :
                          selectedFood.thermal === 'Cool' ? 'bg-blue-100 text-blue-700' :
                          selectedFood.thermal === 'Cold' ? 'bg-indigo-100 text-indigo-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {selectedFood.thermal === 'Hot' ? '🔥' :
                           selectedFood.thermal === 'Warm' ? '☀️' :
                           selectedFood.thermal === 'Neutral' ? '⚖️' :
                           selectedFood.thermal === 'Cool' ? '💧' :
                           selectedFood.thermal === 'Cold' ? '❄️' : '⚖️'} {selectedFood.thermal}
                        </span>
                      )}
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                        selectedFood.type === 'avoid' ? 'bg-gold/20 text-earth' : `${colors.bg} ${colors.text}`
                      }`}>
                        {selectedFood.type === 'avoid' ? 'Minimize' : selectedFood.type === 'top' ? 'Recommended' : 'Browse'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedFood(null)}
                    className="p-1.5 hover:bg-slate-deep/10 rounded-full -mr-1 -mt-1 self-start"
                  >
                    <svg className="w-4 h-4 text-slate-deep/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                {(selectedFood.reason || selectedFood.description) && (
                  <p className="text-sm text-slate-deep/80 leading-relaxed mb-3">
                    {selectedFood.reason || selectedFood.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${colors.bg} ${colors.text}`}>
                    {focus.icon} {focus.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-slate-deep/5 text-slate-deep/60">
                    {getSeasonEmoji(season)} {getSeasonName(season)}
                  </span>
                </div>

                {/* Evidence indicator */}
                <div className={`mt-3 pt-3 border-t border-slate-deep/10 flex items-center gap-1.5 ${evidenceLevels.ratings.traditional.color}`}>
                  <span className="text-xs">{evidenceLevels.ratings.traditional.icon}</span>
                  <span className="text-[10px]">{evidenceLevels.ratings.traditional.label}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share Card Modal */}
        {showShareCard && (
          <div className="absolute inset-0 bg-slate-deep/70 z-20 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden">
              <div
                ref={shareCardRef}
                className={`aspect-[9/16] max-h-[50vh] ${colors.headerBg} p-5 flex flex-col justify-between text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <p className="text-white/80 text-xs">My TCM Tendencies</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl">{constitution.emoji}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{constitution.name}</h3>
                      <p className="text-white/80 text-xs">{constitution.chinese}</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-white/80 text-xs mb-2">
                    {getSeasonEmoji(season)} {getSeasonName(season)} • {focus.name}
                  </p>
                  <div className="bg-white/20 rounded-lg p-2 mb-3">
                    <p className="text-xs font-medium mb-1">My Top 3:</p>
                    <div className="flex gap-2">
                      {focusData.top5.slice(0, 3).map((food, i) => (
                        <div key={i} className="text-center flex-1">
                          <span className="text-xl block">{getFoodIcon(food.name)}</span>
                          <span className="text-[9px]">{food.name.split(' ')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-serif text-xs italic text-white/80">"{constitution.tagline}"</p>
                </div>

                <div className="relative z-10 text-center">
                  <p className="text-[9px] text-white/60">tcmconstitution.com</p>
                </div>
              </div>

              <div className="p-3 space-y-2">
                <button
                  onClick={() => alert('Download feature coming soon!')}
                  className={`w-full py-2.5 ${colors.headerBg} text-white rounded-lg font-medium text-sm`}
                >
                  Download for Stories
                </button>
                <button
                  onClick={() => setShowShareCard(false)}
                  className="w-full py-2.5 bg-slate-deep/10 text-slate-deep rounded-lg font-medium text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
