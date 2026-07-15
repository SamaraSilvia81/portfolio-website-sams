import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch {}
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en')
  }, [lang])

  const t = translations[lang]
  const toggle = () => setLang((l) => (l === 'en' ? 'pt' : 'en'))

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
