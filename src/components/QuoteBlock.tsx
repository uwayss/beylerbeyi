import type { QuoteContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type QuoteBlockProps = {
  content: QuoteContent
}

export const QuoteBlock = ({ content }: QuoteBlockProps) => {
  const { quote, speaker, context, imageLayers } = content;
  return (
    <section className="section quote">
      {imageLayers && imageLayers.length > 0 && (
        <div className="quote__media">
          {imageLayers.map((layer, index) => (
            <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
          ))}
        </div>
      )}
      <p className="eyebrow">{context}</p>
      <blockquote>
        <span>“</span>
        {quote}
        <span>”</span>
      </blockquote>
      <cite>{speaker}</cite>
    </section>
  )
}

