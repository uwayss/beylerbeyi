import { useEffect } from 'react'
import Lenis from 'lenis'

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: false,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}

