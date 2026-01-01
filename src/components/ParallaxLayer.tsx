import { useEffect, useRef } from 'react'
import type { ImageLayer } from '../types/content'
import { useParallax } from '../hooks/useParallax'

export const ParallaxLayer = ({ layer }: { layer: ImageLayer }) => {
  const ref = useParallax(layer.speed ?? 12)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && layer.video) {
      video.play().catch(() => {
        // Ignore play errors (e.g., autoplay policy restrictions)
      })
    }
  }, [layer.video])

  return (
    <div
      className="parallax-layer"
      ref={ref}
      style={layer.video ? {} : layer.src ? { backgroundImage: `url(${layer.src})` } : {}}
      aria-hidden
    >
      <span className="sr-only">{layer.alt}</span>
      {layer.video ? (
        <video
          ref={videoRef}
          src={layer.video}
          poster={layer.poster || layer.src || undefined}
          muted
          loop
          playsInline
          autoPlay
          className="parallax-layer__video"
        />
      ) : null}
      {layer.credit ? <span className="parallax-layer__credit">{layer.credit}</span> : null}
    </div>
  )
}

