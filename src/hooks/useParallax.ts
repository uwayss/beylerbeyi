import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let pluginRegistered = false
const registerTrigger = () => {
  if (!pluginRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    pluginRegistered = true
  }
}

export const useParallax = (speed = 12) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    registerTrigger()

    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { yPercent: -speed / 2 },
        {
          yPercent: speed / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, element)

    return () => ctx.revert()
  }, [speed])

  return ref
}

