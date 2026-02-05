import { useState } from 'react'
import { constitutions, constitutionIcons } from '../data/constitutions'

// Constitution display order and short labels for the chart
const constitutionOrder = [
  { id: 'qi_deficient', label: 'Qi Def.' },
  { id: 'yang_deficient', label: 'Yang Def.' },
  { id: 'yin_deficient', label: 'Yin Def.' },
  { id: 'phlegm_dampness', label: 'Phlegm' },
  { id: 'damp_heat', label: 'Damp Heat' },
  { id: 'blood_stasis', label: 'Blood Sta.' },
  { id: 'qi_stagnation', label: 'Qi Stag.' },
  { id: 'inherited_special', label: 'Inherited' }
]

export default function ConstitutionRadarChart({ scores, primaryId }) {
  const [hoveredPoint, setHoveredPoint] = useState(null)

  const numAxes = constitutionOrder.length
  const centerX = 150
  const centerY = 150
  const maxRadius = 100

  // Calculate angle for each axis (starting from top, going clockwise)
  const getAngle = (index) => {
    return (Math.PI * 2 * index) / numAxes - Math.PI / 2
  }

  // Get point coordinates for a given value (0-5 scale) at a given axis
  const getPoint = (index, value) => {
    const angle = getAngle(index)
    const normalizedValue = Math.min(value / 5, 1) // Normalize to 0-1
    const radius = normalizedValue * maxRadius
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  }

  // Create polygon points for the data
  const dataPoints = constitutionOrder.map((c, i) => {
    const scoreData = scores.find(s => s.id === c.id)
    const value = scoreData ? scoreData.average : 0
    return getPoint(i, value)
  })

  const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(' ')

  // Create grid lines (circles at 1, 2, 3, 4, 5)
  const gridLevels = [1, 2, 3, 4, 5]

  // Get score for a constitution
  const getScore = (id) => {
    const scoreData = scores.find(s => s.id === id)
    return scoreData ? scoreData.average.toFixed(1) : '0.0'
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-slate-deep/10">
      <h3 className="font-medium text-slate-deep mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
        </svg>
        Your Tendency Profile
      </h3>

      <div className="flex justify-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-[300px]">
          {/* Background grid circles */}
          {gridLevels.map(level => {
            const radius = (level / 5) * maxRadius
            return (
              <circle
                key={level}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#2C3E50"
                strokeOpacity={0.1}
                strokeWidth={1}
              />
            )
          })}

          {/* Axis lines */}
          {constitutionOrder.map((_, i) => {
            const endPoint = getPoint(i, 5)
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="#2C3E50"
                strokeOpacity={0.1}
                strokeWidth={1}
              />
            )
          })}

          {/* Data polygon */}
          <polygon
            points={polygonPoints}
            fill="#87A96B"
            fillOpacity={0.3}
            stroke="#87A96B"
            strokeWidth={2}
          />

          {/* Data points */}
          {constitutionOrder.map((c, i) => {
            const scoreData = scores.find(s => s.id === c.id)
            const value = scoreData ? scoreData.average : 0
            const point = getPoint(i, value)
            const isPrimary = c.id === primaryId

            return (
              <circle
                key={c.id}
                cx={point.x}
                cy={point.y}
                r={isPrimary ? 6 : 4}
                fill={isPrimary ? '#D4AF37' : '#87A96B'}
                stroke="white"
                strokeWidth={2}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredPoint(c.id)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            )
          })}

          {/* Axis labels */}
          {constitutionOrder.map((c, i) => {
            const angle = getAngle(i)
            const labelRadius = maxRadius + 25
            const x = centerX + labelRadius * Math.cos(angle)
            const y = centerY + labelRadius * Math.sin(angle)
            const isPrimary = c.id === primaryId
            const isHovered = hoveredPoint === c.id

            return (
              <text
                key={c.id}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[9px] ${isPrimary ? 'font-semibold fill-gold' : isHovered ? 'font-medium fill-sage-dark' : 'fill-slate-deep/60'}`}
                style={{
                  fill: isPrimary ? '#D4AF37' : isHovered ? '#6B8B54' : 'rgba(44, 62, 80, 0.6)',
                  fontWeight: isPrimary ? 600 : isHovered ? 500 : 400
                }}
              >
                {c.label}
              </text>
            )
          })}
        </svg>
      </div>

      {/* Hover tooltip */}
      {hoveredPoint && (
        <div className="mt-4 p-3 bg-slate-deep/5 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-6 h-6 rounded-full ${constitutions[hoveredPoint].headerBg} flex items-center justify-center`}>
              {constitutionIcons[hoveredPoint] && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={constitutionIcons[hoveredPoint]} />
                </svg>
              )}
            </div>
            <span className="font-medium text-slate-deep">{constitutions[hoveredPoint].name}</span>
            <span className="text-slate-deep/50 text-sm">({constitutions[hoveredPoint].chinese})</span>
            <span className="ml-auto text-sm font-medium text-sage">{getScore(hoveredPoint)}/5</span>
          </div>
          <p className="text-sm text-slate-deep/70">{constitutions[hoveredPoint].corePattern}</p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-deep/60">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-gold"></div>
          <span>Primary</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-sage"></div>
          <span>Other Types</span>
        </div>
      </div>

      {/* How to read your results */}
      <div className="mt-4 pt-4 border-t border-slate-deep/10 space-y-3">
        <p className="text-sm text-slate-deep/70 leading-relaxed">
          <span className="font-medium text-slate-deep">Reading your profile:</span> Most people express 2–3 patterns. Your primary tendency is strongest right now, but secondary patterns also shape your experience. These are snapshots — they shift with seasons, stress, and life phases.
        </p>
        <p className="text-xs text-sage-dark bg-sage/10 rounded-lg px-3 py-2">
          <span className="font-medium">The goal is balance</span> — not fixing who you are, but supporting how you move.
        </p>
      </div>
    </div>
  )
}
