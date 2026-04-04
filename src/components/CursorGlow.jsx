import { useEffect, useRef } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const interactive = '.nav-links a, .btn, .hamburger, .pose-circle, input, textarea, select, label, .bento-credential-link'

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      if (glowRef.current) glowRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    const onOver = (e) => {
      if (e.target.closest(interactive)) {
        dotRef.current?.classList.add('cursor-hidden')
      }
    }

    const onOut = (e) => {
      if (e.target.closest(interactive)) {
        dotRef.current?.classList.remove('cursor-hidden')
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
