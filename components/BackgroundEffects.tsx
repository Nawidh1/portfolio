'use client'

import { useDesktopEffects } from '@/hooks/useDesktopEffects'
import InteractiveGrid from '@/components/InteractiveGrid'
import MorphingBlob from '@/components/MorphingBlob'
import FloatingCode from '@/components/FloatingCode'
import CursorTrail from '@/components/CursorTrail'

export default function BackgroundEffects() {
  const enabled = useDesktopEffects()

  if (!enabled) return null

  return (
    <>
      <InteractiveGrid />
      <MorphingBlob />
      <FloatingCode />
      <CursorTrail />
    </>
  )
}
