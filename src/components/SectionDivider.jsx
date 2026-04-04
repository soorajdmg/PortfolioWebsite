import './SectionDivider.css'

export default function SectionDivider({ flip = false, fromColor, toColor, layered = false }) {
  const fill = toColor || 'var(--bg-secondary)'
  const bg = fromColor || (flip ? 'var(--bg-secondary)' : 'var(--bg-primary)')
  return (
    <div className={`section-divider ${flip ? 'flip' : ''} ${layered ? 'layered' : ''}`} style={{ background: bg }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {layered && (
          <path
            d="M0,40 C180,75 360,5 540,45 C720,80 900,10 1080,50 C1260,80 1380,30 1440,40 L1440,80 L0,80 Z"
            fill={fill}
            opacity="0.3"
          />
        )}
        <path d="M0,50 C180,10 360,70 540,35 C720,0 900,65 1080,30 C1260,5 1380,55 1440,40 L1440,80 L0,80 Z" fill={fill} />
      </svg>
    </div>
  )
}
