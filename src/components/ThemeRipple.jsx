import { useEffect, useRef, useState } from 'react'
import './ThemeRipple.css'

function RippleLayer({ ripple, onCommit, onDone }) {
  useEffect(() => {
    const commitTimer = setTimeout(() => onCommit(ripple.theme), 340)
    const doneTimer   = setTimeout(() => onDone(), 700)
    return () => {
      clearTimeout(commitTimer)
      clearTimeout(doneTimer)
    }
  }, []) // eslint-disable-line

  return (
    <div
      className="theme-ripple"
      style={{
        '--ripple-x': `${ripple.x}px`,
        '--ripple-y': `${ripple.y}px`,
        '--ripple-color': ripple.color,
      }}
      aria-hidden="true"
    />
  )
}

export default function ThemeRipple({ ripple, onDone }) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (ripple) setActive(ripple)
  }, [ripple])

  if (!active) return null

  return (
    <RippleLayer
      key={active.id}
      ripple={active}
      onCommit={(theme) => onDone(theme)}
      onDone={() => setActive(null)}
    />
  )
}
