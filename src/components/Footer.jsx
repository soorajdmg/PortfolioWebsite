import './Footer.css'

const now = [
  { label: 'building', value: 'Pennywise', note: 'AI finance companion' },
  { label: 'reading', value: 'Gods, Guns and Missionaries' },
  { label: 'status', value: 'Open to opportunities', highlight: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">Sooraj<span className="footer-logo-dot">.</span></span>
          <p className="footer-tagline">Crafting thoughtful software, one commit at a time.</p>
        </div>

        <div className="footer-right">
          <p className="footer-now-heading">now</p>
          <ul className="footer-now-list">
            {now.map(({ label, value, note, highlight }) => (
              <li key={label} className="footer-now-item">
                <span className="footer-now-label">{label}</span>
                <span className={`footer-now-value ${highlight ? 'footer-now-value--open' : ''}`}>
                  {highlight && <span className="footer-now-dot" />}
                  {value}
                </span>
                {note && <span className="footer-now-note">{note}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Sooraj Murugaraj - Software Developer &amp; Designer</p>
        </div>
      </div>
    </footer>
  )
}
