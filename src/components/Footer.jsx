import { useState, useEffect } from 'react'
import './Footer.css'

// Cloudinary CDN URLs — replace with your actual cloud name and image IDs
const slides = [
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860378/Boat-Ride_gkwsro.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860379/Man-Walking_bn6e5n.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860378/Cloudy-Beach_z4z5lf.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860379/Old-Building_xpqwcw.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860379/Train-Track_w7gxuy.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860379/Small-Island_tdaq8f.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860378/Docked-Ship_o2pxk3.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860378/Busy-Beach_i3ovqy.jpg',
  'https://res.cloudinary.com/dmjxhnhbi/image/upload/v1776860378/Fishing-Boat_aaxh8n.jpg',
]

function PhotoSlide() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % slides.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="fslide">
      <p className="fslide-header">caught on camera<span className="fslide-header-dot"> ✦</span></p>
      <div className="fslide-frame">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide ${i + 1}`}
            className={`fslide-img${i === active ? ' fslide-img--active' : ''}`}
          />
        ))}
      </div>
      <div className="fslide-dots">
        {slides.map((_, i) =>
          i === active ? (
            <span key={i} className="fslide-dot fslide-dot--active" aria-label="active" />
          ) : (
            <span key={i} className="fslide-dot" aria-label={`slide ${i + 1}`} onClick={() => setActive(i)} />
          )
        )}
      </div>
    </div>
  )
}

const now = [
  { label: 'building', value: 'Pennywise', note: 'AI finance companion' },
  { label: 'reading',  value: 'Gods, Guns and Missionaries' },
  { label: 'status',   value: 'Open to opportunities', highlight: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">Sooraj<span className="footer-logo-dot">.</span></span>
          <p className="footer-tagline">Crafting thoughtful software, one commit at a time.</p>
        </div>

        <PhotoSlide />

        <div className="footer-right">
          <p className="footer-now-heading">now</p>
          <ul className="footer-now-list">
            {now.map(({ label, value, note, highlight }) => (
              <li key={label} className="footer-now-item">
                <span className="footer-now-label">{label}</span>
                <div className="footer-now-body">
                  <span className={`footer-now-value ${highlight ? 'footer-now-value--open' : ''}`}>
                    {highlight && <span className="footer-now-dot" />}
                    {value}
                  </span>
                  {note && <span className="footer-now-note">{note}</span>}
                </div>
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
