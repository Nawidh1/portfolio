'use client'

import dynamic from 'next/dynamic'

const BackgroundEffects = dynamic(() => import('@/components/BackgroundEffects'), {
  ssr: false,
})

const RobotBuddy = dynamic(() => import('@/components/RobotBuddy'), {
  ssr: false,
})

export default function ClientDecorations() {
  return (
    <>
      <BackgroundEffects />
      <RobotBuddy />
    </>
  )
}
