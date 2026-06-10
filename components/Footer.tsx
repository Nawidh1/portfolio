'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="text-xl sm:text-2xl font-light tracking-widest text-white">
            NAWID<span className="font-bold">H</span>
          </div>

          <div className="flex items-center gap-8 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
              className="text-neutral-500 hover:text-emerald-500 transition-colors text-sm uppercase tracking-wider"
            >
              {t.footer.github}
            </a>
          </div>

          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} Nawid Haidari
          </p>
        </div>
      </div>
    </footer>
  )
}
