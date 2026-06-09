'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const rafRef = useRef<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        setIsScrolled(window.scrollY > 50)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-colors duration-300 ${
          isMobileMenuOpen
            ? 'bg-neutral-950 border-b border-neutral-800'
            : isScrolled
              ? 'bg-neutral-950/95 border-b border-neutral-800/80'
              : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="relative z-[120] text-xl sm:text-2xl font-light tracking-widest text-white hover:text-emerald-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NAWID<span className="font-bold">H</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-medium transition-colors uppercase tracking-[0.2em] ${
                    pathname === item.href || (item.href === '/projects' && pathname.startsWith('/projects/'))
                      ? 'text-emerald-500'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-[120] text-white p-3 -mr-1 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block h-px w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-px w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu — sibling of header, not inside it (avoids backdrop-blur containing-block bug) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100] bg-neutral-950"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col items-center justify-center gap-7 h-full px-6 pt-16 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors uppercase tracking-[0.2em] text-lg font-medium text-center ${
                  pathname === item.href || (item.href === '/projects' && pathname.startsWith('/projects/'))
                    ? 'text-emerald-500'
                    : 'text-neutral-200 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
