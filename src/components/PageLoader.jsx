import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './PageLoader.css'

export default function PageLoader({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      onDone?.()
      setTimeout(() => {
        setVisible(false)
        document.body.style.overflow = ''
        window.scrollTo(0, 0)
        document.documentElement.style.scrollBehavior = ''
      }, 80)
    }, 1600)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Name */}
          <motion.span
            layoutId="site-logo"
            className="loader-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Sooraj<span className="loader-dot">.</span>
          </motion.span>

          {/* Progress bar track */}
          <motion.div
            className="loader-track"
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            <motion.div
              className="loader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
