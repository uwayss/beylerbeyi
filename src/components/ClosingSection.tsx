import type { ClosingNoteContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type ClosingSectionProps = {
  content: ClosingNoteContent
}

export const ClosingSection = ({ content }: ClosingSectionProps) => {
  const { heading, body, imageLayers } = content;
  return (
    <section className="section closing">
      {imageLayers && imageLayers.length > 0 && (
        <div className="closing__media">
          {imageLayers.map((layer, index) => (
            <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
          ))}
        </div>
      )}
      <h2>{heading}</h2>
      <p>{body}</p>
    </section>
  )
}

