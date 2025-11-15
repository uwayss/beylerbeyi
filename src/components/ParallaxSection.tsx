import type { ImageLayer, ParallaxSectionContent } from '../content/sections'
import { useParallax } from '../hooks/useParallax'

const ParallaxLayer = ({ layer }: { layer: ImageLayer }) => {
  const ref = useParallax(layer.speed ?? 12)
  return (
    <div
      className="parallax-layer"
      ref={ref}
      style={{ backgroundImage: `url(${layer.src})` }}
      aria-hidden
    >
      <span className="sr-only">{layer.alt}</span>
      {layer.credit ? <span className="parallax-layer__credit">{layer.credit}</span> : null}
    </div>
  )
}

type ParallaxSectionProps = {
  content: ParallaxSectionContent
}

export const ParallaxSection = ({ content }: ParallaxSectionProps) => {
  return (
    <section className="section parallax" id={content.id}>
      <div className="parallax__media">
        {content.imageLayers.map((layer) => (
          <ParallaxLayer key={layer.src} layer={layer} />
        ))}
      </div>
      <div className="parallax__body">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
        <dl className="factoid-grid">
          {content.factoids.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

