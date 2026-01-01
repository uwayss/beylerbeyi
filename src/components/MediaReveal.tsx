import type { MediaSectionContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type MediaRevealProps = {
  content: MediaSectionContent
}

export const MediaReveal = ({ content }: MediaRevealProps) => {
  const { heading, description, callout, videoUrl, posterUrl, imageLayers } = content;
  return (
    <section className={`section media ${!videoUrl ? 'media--no-video' : ''}`}>
      {imageLayers && imageLayers.length > 0 && (
        <div className="media__background">
          {imageLayers.map((layer, index) => (
            <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
          ))}
        </div>
      )}
      <div className="media__copy">
        <p className="eyebrow">Atmosfer</p>
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
        <div className="media__callout">{callout}</div>
      </div>
      {videoUrl && (
        <div className="media__player">
          <video
            src={videoUrl}
            poster={posterUrl}
            playsInline
            autoPlay
            muted
            loop
          />
        </div>
      )}
    </section>
  )
}

