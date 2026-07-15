import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage?.getItem?.('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggle = (t) => {
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
    try { localStorage.setItem('theme', t) } catch {}
  }

  return (
    <div className="theme-toggle">
      <button
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => toggle('dark')}
        aria-label="Dark mode"
        title="Dark mode"
      >
        ☾
      </button>
      <button
        className={theme === 'light' ? 'active' : ''}
        onClick={() => toggle('light')}
        aria-label="Light mode"
        title="Light mode"
      >
        ☀
      </button>
    </div>
  )
}
