import { motion } from 'framer-motion'
import './FloatingShapes.css'

const shapes = [
  { size: 300, top: '10%', left: '-5%', color: 'rgba(251, 197, 41, 0.2)', duration: 8, delay: 0 },
  { size: 200, top: '60%', right: '-3%', color: 'rgba(5, 119, 221, 0.14)', duration: 10, delay: 1.5 },
  { size: 150, top: '30%', left: '60%', color: 'rgba(242, 139, 0, 0.15)', duration: 7, delay: 0.8 },
  { size: 120, top: '75%', left: '20%', color: 'rgba(64, 180, 229, 0.14)', duration: 9, delay: 2 },
  { size: 80, top: '15%', left: '45%', color: 'rgba(251, 197, 41, 0.12)', duration: 6, delay: 0.3 },
]

export default function FloatingShapes() {
  return (
    <div className="floating-shapes" aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="shape"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            right: s.right,
            background: `radial-gradient(circle, ${s.color} 0%, transparent 70%)`,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
