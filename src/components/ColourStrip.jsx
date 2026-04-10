import { useEffect, useRef } from 'react'
import './ColourStrip.css'

// Colour circles using the site's accent palette — no images needed
// Pattern cycles through blue / orange / yellow with size variation for rhythm
// Size pattern: sm-md-sm-lg-sm-md-sm-lg-sm-md (10 items, seam md→sm ✓)
// Colors: hardcoded random order, no two adjacent same, seam sky→sm-blue ✓
const CIRCLES = [
  { color: 'var(--accent-blue)',   size: 'sm' },
  { color: 'var(--accent-yellow)', size: 'md' },
  { color: 'var(--accent-orange)', size: 'sm' },
  { color: 'var(--accent-sky)',    size: 'lg' },
  { color: 'var(--accent-yellow)', size: 'sm' },
  { color: 'var(--accent-orange)', size: 'md' },
  { color: 'var(--accent-blue)',   size: 'sm' },
  { color: 'var(--accent-yellow)', size: 'lg' },
  { color: 'var(--accent-sky)',    size: 'sm' },
  { color: 'var(--accent-orange)', size: 'md' },
]

// Triple the pattern for full-width coverage at any screen size
const row = [...CIRCLES, ...CIRCLES, ...CIRCLES]

export default function ColourStrip() {
  const rowRef = useRef(null)

  useEffect(() => {
    const section = rowRef.current?.closest('.colour-strip')
    if (!section) return

    let rafId
    let sectionTop = section.getBoundingClientRect().top + window.scrollY

    // Recompute section offset on resize (layout may shift)
    const onResize = () => {
      sectionTop = section.getBoundingClientRect().top + window.scrollY
    }
    window.addEventListener('resize', onResize, { passive: true })

    // rAF loop — reads scrollY every frame so animation stays live
    // during iOS momentum scrolling (scroll events are deferred there)
    const loop = () => {
      const rect_top = sectionTop - window.scrollY
      const progress = (window.innerHeight / 2 - rect_top) / window.innerHeight
      const target = progress * -120 - 60
      if (rowRef.current) {
        // translate3d forces a GPU composite layer on Safari (translateX alone doesn't)
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

  return (
    <div className="colour-strip" aria-hidden="true">
      <div className="colour-row" ref={rowRef}>
        {row.map((circle, i) => (
          <div
            key={i}
            className={`colour-circle colour-circle--${circle.size}`}
            style={{ background: circle.color }}
          />
        ))}
      </div>
    </div>
  )
}
