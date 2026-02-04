'use client'

import { useEffect } from 'react'

export default function ScrollRevealScript() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Function to observe all reveal elements
    const observeRevealElements = () => {
      const revealElements = document.querySelectorAll('.reveal:not(.active)')
      revealElements.forEach((el) => {
        observer.observe(el)
      })
    }

    // Initial observation
    observeRevealElements()

    // Observe new elements that might be added dynamically
    const mutationObserver = new MutationObserver(() => {
      observeRevealElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
