import { useEffect, useRef } from 'react'
import cheerPose from '../assets/images/poses/cheer-pose.png'
import lovePose from '../assets/images/poses/love-pose.png'
import phonePose from '../assets/images/poses/phone-pose.png'
import proPose from '../assets/images/poses/pro-pose.png'
import shyPose from '../assets/images/poses/shy-pose.png'
import thinkPose from '../assets/images/poses/think-pose.png'
import wavePose from '../assets/images/poses/wave-pose.png'
// import winkPose from '../assets/images/poses/wink-pose.png'
import './PoseStrip.css'
const poses = [cheerPose, lovePose, phonePose, proPose, shyPose, thinkPose, wavePose]
// Duplicate twice to ensure full-width coverage at any screen size
const row = [...poses, ...poses, ...poses]

export default function PoseStrip() {
  const rowRef = useRef(null)

  useEffect(() => {
    const section = rowRef.current?.closest('.pose-strip')
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
    <div className="pose-strip">
      <div className="pose-row" ref={rowRef}>
        {row.map((src, i) => (
          <div className="pose-circle" key={i}>
            <img src={src} alt="pose" />
          </div>
        ))}
      </div>
    </div>
  )
}
