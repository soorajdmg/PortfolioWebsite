import { useRef, useCallback } from 'react'

/**
 * Returns event handlers that make an element magnetically attract to the cursor.
 * @param {number} strength - How many px it shifts (default 10)
 */
export default function useMagnet(strength = 10) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    el.style.transition = 'transform 0.15s ease'
  }, [strength])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
