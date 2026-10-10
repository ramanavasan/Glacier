import { useState } from 'react'
import { motion } from 'framer-motion'

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3 4.6 L4.7 10.1 c-.44.37-.7.92-.7 1.5 V19 a1.6 1.6 0 001.6 1.6 H9 v-4.4 a3 3 0 016 0 V20.6 h3.4 A1.6 1.6 0 0020 19 v-7.4 c0-.58-.26-1.13-.7-1.5 L12.7 4.6 a1.1 1.1 0 00-1.4 0 Z" fill="currentColor" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12.2 L11 14.7 L15.6 9.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5.5" width="16" height="15" rx="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.6 H20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 3.6 V6.4 M15.5 3.6 V6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <g fill="currentColor">
        <circle cx="8.4" cy="13" r="0.9" /><circle cx="12" cy="13" r="0.9" /><circle cx="15.6" cy="13" r="0.9" />
        <circle cx="8.4" cy="16.6" r="0.9" /><circle cx="12" cy="16.6" r="0.9" /><circle cx="15.6" cy="16.6" r="0.9" />
      </g>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="13" r="7.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="11" cy="13" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 13 L19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.5 5 H19 V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const items = [
  { key: 'home', Icon: HomeIcon },
  { key: 'tasks', Icon: CheckIcon },
  { key: 'calendar', Icon: CalendarIcon },
  { key: 'goals', Icon: TargetIcon },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  return (
    <div style={{ position: 'fixed', top: '26px', left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
      <motion.nav
        initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 10px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          boxShadow: '0 12px 44px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.16)',
        }}
      >
        {items.map(({ key, Icon }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              aria-label={key}
              style={{
                position: 'relative', width: '58px', height: '30px', borderRadius: '999px',
                border: 'none', background: 'transparent', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.62)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)' }}
              onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.62)' }}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: 'rgba(0,0,0,0.34)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1, display: 'flex' }}><Icon /></span>
            </button>
          )
        })}
      </motion.nav>
    </div>
  )
}
