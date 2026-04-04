import { useEffect, useRef, useState, useCallback } from 'react'
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

let dropIdCounter = 0

function spawnDrops(src) {
  const count = 18
  const drops = []
  for (let i = 0; i < count; i++) {
    const size = 50 + Math.random() * 70          // 50–120px
    const x = Math.random() * 100                 // % across viewport
    const delay = Math.random() * 1.4             // stagger
    const duration = 1.8 + Math.random() * 1.6   // fall speed
    const rotation = (Math.random() - 0.5) * 50  // -25 to +25 deg tilt
    const swayX = (Math.random() - 0.5) * 80     // horizontal drift
    const opacity = 0.55 + Math.random() * 0.45  // 0.55–1
    const shape = Math.random()                   // vary border-radius slightly
    drops.push({
      id: ++dropIdCounter,
      src,
      size,
      x,
      delay,
      duration,
      rotation,
      swayX,
      opacity,
      shape,
    })
  }
  return drops
}

export default function PoseStrip() {
  const rowRef = useRef(null)
  const [drops, setDrops] = useState([])

  useEffect(() => {
    const onScroll = () => {
      const section = rowRef.current?.closest('.pose-strip')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = (window.innerHeight / 2 - rect.top) / window.innerHeight
      if (rowRef.current) {
        rowRef.current.style.transform = `translateX(${progress * -120}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handlePoseClick = useCallback((src) => {
    const newDrops = spawnDrops(src)
    setDrops(prev => [...prev, ...newDrops])
    // clean up after animations finish
    const maxLife = Math.max(...newDrops.map(d => (d.delay + d.duration) * 1000)) + 400
    setTimeout(() => {
      const ids = new Set(newDrops.map(d => d.id))
      setDrops(prev => prev.filter(d => !ids.has(d.id)))
    }, maxLife)
  }, [])

  return (
    <>
      {/* Rain overlay — rendered at root level so it covers the whole viewport */}
      {drops.length > 0 && (
        <div className="pose-rain-layer" aria-hidden="true">
          {drops.map(drop => (
            <div
              key={drop.id}
              className="pose-rain-drop"
              style={{
                '--drop-x': `${drop.x}vw`,
                '--drop-size': `${drop.size}px`,
                '--drop-delay': `${drop.delay}s`,
                '--drop-duration': `${drop.duration}s`,
                '--drop-rotation': `${drop.rotation}deg`,
                '--drop-sway': `${drop.swayX}px`,
                '--drop-opacity': drop.opacity,
                '--drop-radius': `${40 + drop.shape * 20}%`,
              }}
            >
              <img src={drop.src} alt="" />
            </div>
          ))}
        </div>
      )}

      <div className="pose-strip">
        <div className="pose-row" ref={rowRef}>
          {row.map((src, i) => (
            <div
              className="pose-circle"
              key={i}
              onClick={() => handlePoseClick(src)}
              style={{ cursor: 'pointer' }}
            >
              <img src={src} alt="pose" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
