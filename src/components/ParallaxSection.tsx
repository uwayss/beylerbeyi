import type { ParallaxSectionContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type ParallaxSectionProps = {
  content: ParallaxSectionContent
}

export const ParallaxSection = ({ content }: ParallaxSectionProps) => {
  return (
    <section className="section parallax" id={content.id}>
      <div className="parallax__media">
        {content.imageLayers.map((layer, index) => (
          <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
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

