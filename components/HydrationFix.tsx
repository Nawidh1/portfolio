'use client'

import { useEffect } from 'react'

const EXTENSION_ATTRS = ['bis_skin_checked', 'bis_register']

function stripExtensionAttributes(root: ParentNode) {
  for (const attr of EXTENSION_ATTRS) {
    root.querySelectorAll(`[${attr}]`).forEach((el) => {
      el.removeAttribute(attr)
    })
  }
}

export default function HydrationFix() {
  useEffect(() => {
    stripExtensionAttributes(document)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName &&
          EXTENSION_ATTRS.includes(mutation.attributeName) &&
          mutation.target instanceof Element
        ) {
          mutation.target.removeAttribute(mutation.attributeName)
        }
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: EXTENSION_ATTRS,
    })

    return () => observer.disconnect()
  }, [])

  return null
}
