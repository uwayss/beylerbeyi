import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import type { HeroContent } from '../content/sections'
import { useParallax } from '../hooks/useParallax'

type HeroSectionProps = {
  content: HeroContent
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  const overlayRef = useParallax(6)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { background } = content

  useEffect(() => {
    const video = videoRef.current
    if (video && background.video) {
      video.play().catch(() => {
        // Ignore play errors (e.g., autoplay policy restrictions)
      })
    }
  }, [background.video])

  return (
    <section
      className="section hero"
      style={
        background.video
          ? ({
              '--hero-overlay': background.overlayColor ?? '#000',
              '--hero-overlay-opacity': background.overlayOpacity ?? 0.4,
            } as React.CSSProperties)
          : ({
              '--hero-image': `url(${background.image})`,
              '--hero-overlay': background.overlayColor ?? '#000',
              '--hero-overlay-opacity': background.overlayOpacity ?? 0.4,
            } as React.CSSProperties)
      }
    >
      <div className="hero__media" aria-hidden>
        {background.video ? (
          <video
            ref={videoRef}
            src={background.video}
            poster={background.poster || background.image}
            muted
            loop
            playsInline
            autoPlay
            className="hero__video"
          />
        ) : null}
        <div className="hero__overlay" ref={overlayRef} />
      </div>
      <div className="hero__content">
        <p className="eyebrow">{content.subtitle}</p>
        <h1>{content.title}</h1>
        <p className="lede">{content.description}</p>
        <div className="hero__actions">
          {content.ctas.map((cta, index) => (
            <a
              key={cta.label}
              className={clsx('pill-button', { ghost: index > 0 })}
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

