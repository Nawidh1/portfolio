'use client'

import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Remove browser extension attributes that cause hydration mismatches
    const removeExtensionAttributes = () => {
      try {
        const allElements = document.querySelectorAll('*')
        allElements.forEach((el) => {
          if (el.hasAttribute('bis_skin_checked')) {
            el.removeAttribute('bis_skin_checked')
          }
        })
      } catch (e) {
        // Silently fail if DOM is not ready
      }
    }

    // Run immediately
    removeExtensionAttributes()

    // Use MutationObserver to catch attributes added dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
          if (mutation.target instanceof Element) {
            mutation.target.removeAttribute('bis_skin_checked')
          }
        }
        if (mutation.addedNodes.length > 0) {
          removeExtensionAttributes()
        }
      })
    })

    // Observe the entire document
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked']
    })

    // Also run periodically as a fallback
    const intervalId = setInterval(removeExtensionAttributes, 1000)

    return () => {
      observer.disconnect()
      clearInterval(intervalId)
    }
  }, [])

  return null
}
