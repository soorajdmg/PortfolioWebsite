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
