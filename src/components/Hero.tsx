import { motion } from 'framer-motion'

const label: React.CSSProperties = {
  fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", textDecoration: 'none',
}

function Social({ path }: { path: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src="/hero.mp4" autoPlay muted loop playsInline />
      {/* Overlays — opacity reduced by 70%, then bumped back up slightly on user request */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.20)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.26) 0%, transparent 22%, transparent 60%, rgba(0,0,0,0.38) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.15) 100%)' }} />
      <div style={{ position: 'absolute', top: '-14%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '720px', background: 'radial-gradient(ellipse at 50% 30%, rgba(14,116,144,0.05) 0%, transparent 68%)', pointerEvents: 'none' }} />

      {/* Centered lockup */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '26px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2 L20 9 L12 22 L4 9 Z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
              <path d="M4 9 H20 M12 2 V22 M8 9 L12 22 L16 9" stroke="#fff" strokeWidth="0.7" opacity="0.55" />
            </svg>
            <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#fff', fontFamily: "'Inter', sans-serif", paddingLeft: '0.28em' }}>Glacier</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', fontFamily: "'Inter', sans-serif", paddingLeft: '0.34em' }}>Presents</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.24, ease: 'easeOut' }}
          style={{ margin: 0, fontFamily: "'Playfair Display', Georgia, serif", textTransform: 'uppercase', color: '#fff', textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
        >
          <span style={{ display: 'block', fontWeight: 400, fontSize: 'clamp(3.3rem, 8.6vw, 6.4rem)', lineHeight: 1, letterSpacing: '0.02em' }}>Frozen</span>
          <span style={{ display: 'block', fontWeight: 700, fontSize: 'clamp(3rem, 8.2vw, 6.2rem)', lineHeight: 0.98, letterSpacing: '0.01em' }}>In Time</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.42, ease: 'easeOut' }}
          style={{ margin: '24px 0 0', maxWidth: '500px', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: '18px', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 20px rgba(0,0,0,0.45)' }}
        >
          A journey through the silence, light, and slow wonder of the world's vanishing ice.
        </motion.p>

        {/* Oval button — true ellipse via border-radius: 50% */}
        <motion.a
          href="#exhibit"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.58, ease: 'easeOut' }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          whileTap={{ scale: 0.97 }}
          style={{ marginTop: '38px', padding: '20px 58px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.6)', color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", backgroundColor: 'rgba(255,255,255,0)' }}
        >
          Enter Exhibit
        </motion.a>
      </div>

      {/* Footer bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px 26px' }}
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Social path="M15 8h-2a1 1 0 00-1 1v2h3l-.4 3H12v6H9v-6H7v-3h2V8.5A3.5 3.5 0 0112.5 5H15z" />
            <Social path="M4 4l6.8 8.2L4.3 20H6l5.6-6.3L16.5 20H20l-7.1-8.6L19.4 4h-1.7l-5.1 5.8L7.6 4z" />
            <Social path="M4.5 9H7v11H4.5zM5.75 4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM9.5 9H12v1.6c.4-.8 1.6-1.7 3.2-1.7 2.6 0 3.3 1.6 3.3 4.2V20H16v-4.9c0-1.3-.5-2.1-1.6-2.1S12.5 13.8 12.5 15V20H9.5z" />
          </div>
          <a href="#privacy" style={label}>Privacy Policy</a>
        </div>

        {/* Center */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', ...label, display: 'flex', gap: '5px' }}>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Scroll</span>
          <span>To Navigate</span>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a href="#terms" style={label}>Terms of Service</a>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
            <path d="M5 15V9M10 19V5M15 16V8M20 13v-2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
