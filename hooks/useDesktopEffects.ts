'use client'

import { useEffect, useState } from 'react'

function shouldEnableEffects() {
  if (typeof window === 'undefined') return false

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isDesktop = window.innerWidth >= 1024
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches

  return isDesktop && hasFinePointer && !prefersReducedMotion
}

export function useDesktopEffects() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const update = () => setEnabled(shouldEnableEffects())

    update()

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerQuery = window.matchMedia('(pointer: fine)')

    motionQuery.addEventListener('change', update)
    pointerQuery.addEventListener('change', update)
    window.addEventListener('resize', update)

    return () => {
      motionQuery.removeEventListener('change', update)
      pointerQuery.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return enabled
}
