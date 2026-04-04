import { useEffect, useRef, useState, useCallback } from 'react'
import cheerPose from '../assets/images/poses/cheer-pose.png'
import lovePose from '../assets/images/poses/love-pose.png'
import phonePose from '../assets/images/poses/phone-pose.png'
import proPose from '../assets/images/poses/pro-pose.png'
import shyPose from '../assets/images/poses/shy-pose.png'
import thinkPose from '../assets/images/poses/think-pose.png'
import wavePose from '../assets/images/poses/wave-pose.png'
import './PoseStrip.css'

const poses = [cheerPose, lovePose, phonePose, proPose, shyPose, thinkPose, wavePose]
const row = [...poses, ...poses, ...poses, ...poses, ...poses]

const BALL_COUNT = 50
const GRAVITY = 0.18
const MAX_VY = 5

function buildBalls(src) {
  const vw = window.innerWidth
  const sizes = []

  // Pre-place balls with no overlap using a simple rejection approach
  const placed = []
  let attempts = 0
  while (placed.length < BALL_COUNT && attempts < 3000) {
    attempts++
    const r = 28 + Math.random() * 34       // radius 28–62px → diameter 56–124px
    const x = r + Math.random() * (vw - r * 2)
    const y = -r - Math.random() * 300      // start above viewport, spread vertically

    // Check no overlap with already-placed balls
    let ok = true
    for (const p of placed) {
      const dx = p.x - x
      const dy = p.y - y
      const minDist = p.r + r + 2
      if (dx * dx + dy * dy < minDist * minDist) { ok = false; break }
    }
    if (!ok) continue

    const spin = (Math.random() - 0.5) * 1.2  // deg/frame spin
    placed.push({
      id: placed.length,
      src,
      r,
      x,
      y,
      vx: (Math.random() - 0.5) * 2.5,
      vy: 2 + Math.random() * 2,              // initial downward velocity
      angle: Math.random() * 360,
      spin,
      opacity: 0.7 + Math.random() * 0.3,
    })
    sizes.push(r)
  }
  return placed
}

// Resolve circle-circle overlap and exchange velocity components
function resolveCollisions(balls) {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      const a = balls[i], b = balls[j]
      const dx = b.x - a.x
      const dy = b.y - a.y
      const dist2 = dx * dx + dy * dy
      const minDist = a.r + b.r
      if (dist2 >= minDist * minDist || dist2 === 0) continue

      const dist = Math.sqrt(dist2)
      const overlap = (minDist - dist) / 2
      const nx = dx / dist, ny = dy / dist

      // Push apart
      a.x -= nx * overlap
      a.y -= ny * overlap
      b.x += nx * overlap
      b.y += ny * overlap

      // Exchange velocity along collision normal (equal mass)
      const dvx = a.vx - b.vx
      const dvy = a.vy - b.vy
      const dot = dvx * nx + dvy * ny
      if (dot > 0) {
        const impulse = dot * 0.9   // slight energy loss per collision
        a.vx -= impulse * nx
        a.vy -= impulse * ny
        b.vx += impulse * nx
        b.vy += impulse * ny
      }
    }
  }
}

function usePhysicsBalls() {
  const [balls, setBalls] = useState(null)
  const rafRef = useRef(null)
  const stateRef = useRef(null)   // mutable physics state, not React state

  const launch = useCallback((src) => {
    // Cancel any running simulation
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const initial = buildBalls(src)
    stateRef.current = initial.map(b => ({ ...b }))
    setBalls(stateRef.current.map(b => ({ ...b })))  // initial render

    const vh = window.innerHeight

    const tick = () => {
      const bs = stateRef.current
      if (!bs) return

      // Physics step
      for (const b of bs) {
        b.vy = Math.min(b.vy + GRAVITY, MAX_VY)
        b.x += b.vx
        b.y += b.vy
        b.angle += b.spin
      }

      resolveCollisions(bs)

      // Snapshot for React render — shallow copy each ball object
      setBalls(bs.map(b => ({ ...b })))

      // Stop once every ball has fully exited the bottom
      if (bs.every(b => b.y - b.r > vh)) {
        setBalls(null)
        stateRef.current = null
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  return { balls, launch }
}

export default function PoseStrip() {
  const rowRef = useRef(null)
  const { balls, launch } = usePhysicsBalls()

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
    <>
      {balls && (
        <div className="pose-rain-layer" aria-hidden="true">
          {balls.map(ball => (
            <div
              key={ball.id}
              className="pose-physics-ball"
              style={{
                width: ball.r * 2,
                height: ball.r * 2,
                transform: `translate(${ball.x - ball.r}px, ${ball.y - ball.r}px) rotate(${ball.angle}deg)`,
                opacity: ball.opacity,
              }}
            >
              <img src={ball.src} alt="" />
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
              onClick={() => launch(src)}
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
