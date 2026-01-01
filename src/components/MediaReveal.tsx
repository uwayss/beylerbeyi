import type { MediaSectionContent } from '../types/content'

type MediaRevealProps = {
  content: MediaSectionContent
}

export const MediaReveal = ({ content }: MediaRevealProps) => {
  return (
    <section className="section media">
      <div className="media__copy">
        <p className="eyebrow">Atmosfer</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
        <div className="media__callout">{content.callout}</div>
      </div>
      <div className="media__player">
        <video
          src={content.videoUrl}
          poster={content.posterUrl}
          playsInline
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  )
}

