import { useEffect, useRef } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return null
  const dotRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('custom-cursor-active')

    const interactive = '.nav-links a, .btn, .hamburger, .colour-circle, input, textarea, select, label, .bento-credential-link'

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
      document.body.classList.remove('custom-cursor-active')
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
