'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import type { Locale } from '@/lib/i18n'

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()

  const toggle = () => {
    const next: Locale = locale === 'en' ? 'nl' : 'en'
    setLocale(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.language.switchTo}
      className="relative z-[120] flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors touch-manipulation"
    >
      <span className={locale === 'en' ? 'text-emerald-400 font-semibold' : 'text-neutral-500'}>EN</span>
      <span className="text-neutral-600">|</span>
      <span className={locale === 'nl' ? 'text-emerald-400 font-semibold' : 'text-neutral-500'}>NL</span>
    </button>
  )
}
