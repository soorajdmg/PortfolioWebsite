import { useEffect, useRef } from 'react'
import './ColourStrip.css'

// Each circle maps to a theme key and its display colour
// Size pattern: sm-md-sm-lg-sm-md-sm-lg-sm-md  (seam: md→sm ✓)
// No two adjacent circles share the same theme at the seam ✓
const CIRCLES = [
  { color: '#0577dd', theme: 'blue',   size: 'sm' },
  { color: '#fbc529', theme: 'yellow', size: 'md' },
  { color: '#f28b00', theme: 'orange', size: 'sm' },
  { color: '#40b4e5', theme: 'sky',    size: 'lg' },
  { color: '#fbc529', theme: 'yellow', size: 'sm' },
  { color: '#f28b00', theme: 'orange', size: 'md' },
  { color: '#0577dd', theme: 'blue',   size: 'sm' },
  { color: '#fbc529', theme: 'yellow', size: 'lg' },
  { color: '#40b4e5', theme: 'sky',    size: 'sm' },
  { color: '#f28b00', theme: 'orange', size: 'md' },
]

// Triple the pattern for full-width coverage at any screen size
const ROW = [...CIRCLES, ...CIRCLES, ...CIRCLES]

// Map theme key → the solid colour used for the ripple flood fill.
// We use the theme's bg-secondary so the flood matches the incoming palette.
const THEME_RIPPLE_COLOURS = {
  blue:   '#ddeeff',
  yellow: '#fff6d0',
  orange: '#ffead4',
  sky:    '#d4f0fb',
}

export default function ColourStrip({ onThemeClick }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const section = rowRef.current?.closest('.colour-strip')
    if (!section) return

    let rafId
    let sectionTop = section.getBoundingClientRect().top + window.scrollY

    const onResize = () => {
      sectionTop = section.getBoundingClientRect().top + window.scrollY
    }
    window.addEventListener('resize', onResize, { passive: true })

    const loop = () => {
      const rect_top = sectionTop - window.scrollY
      const progress = (window.innerHeight / 2 - rect_top) / window.innerHeight
      const target = progress * -120 - 60
      if (rowRef.current) {
        rowRef.current.style.transform = `translate3d(${target}px, 0, 0)`
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handleClick = (circle, e) => {
    if (!onThemeClick) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    onThemeClick({
      x,
      y,
      theme: circle.theme,
      color: THEME_RIPPLE_COLOURS[circle.theme],
      id: Date.now(),
    })
  }

  return (
    <div className="colour-strip" aria-label="Colour theme selector">
      <div className="colour-row" ref={rowRef}>
        {ROW.map((circle, i) => (
          <button
            key={i}
            className={`colour-circle colour-circle--${circle.size}`}
            style={{ background: circle.color }}
            onClick={(e) => handleClick(circle, e)}
            aria-label={`Switch to ${circle.theme} theme`}
            title={`${circle.theme.charAt(0).toUpperCase() + circle.theme.slice(1)} theme`}
          />
        ))}
      </div>
    </div>
  )
}
