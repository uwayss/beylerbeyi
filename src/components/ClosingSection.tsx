import type { ClosingNoteContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type ClosingSectionProps = {
  content: ClosingNoteContent
}

export const ClosingSection = ({ content }: ClosingSectionProps) => {
  const { heading, body, imageLayers, credits } = content;
  return (
    <section className="section closing">
      {imageLayers && imageLayers.length > 0 && (
        <div className="closing__media">
          {imageLayers.map((layer, index) => (
            <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
          ))}
        </div>
      )}
      <div className="closing__content">
        <h2>{heading}</h2>
        <p>{body}</p>

        {credits && credits.length > 0 && (
          <div className="credits-container">
            <div className="credits-scroll">
              {[...credits, ...credits].map((credit, idx) => (
                <div key={idx} className="credit-item">
                  <span className="credit-role">{credit.role}</span>
                  {credit.names.map((name, nIdx) => (
                    <span key={nIdx} className="credit-name">{name}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

