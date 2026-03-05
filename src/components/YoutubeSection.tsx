import type { YoutubeSectionContent } from '../types/content'

type YoutubeSectionProps = {
  content: YoutubeSectionContent
}

export const YoutubeSection = ({ content }: YoutubeSectionProps) => {
  return (
    <section className="section youtube">
      <div className="youtube__copy">
        <p className="eyebrow">Canlı Performans</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
        <div className="media__callout">{content.callout}</div>
      </div>

      <div className="youtube__frame-wrap">
        <iframe
          className="youtube__frame"
          src={content.embedUrl.replace('watch?v=', 'embed/')}
          title={content.heading}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  )
}
