import type { SplitMediaContent } from '../types/content'

type SplitMediaSectionProps = {
  content: SplitMediaContent
}

const MediaCard = ({
  title,
  image,
  video,
  poster,
}: {
  title: string
  image?: string
  video?: string
  poster?: string
}) => {
  return (
    <article className="split-media__card">
      <h3>{title}</h3>
      <div className="split-media__media">
        {video ? (
          <video src={video} poster={poster || image} muted autoPlay loop playsInline />
        ) : (
          image && <img src={image} alt={title} />
        )}
      </div>
    </article>
  )
}

export const SplitMediaSection = ({ content }: SplitMediaSectionProps) => {
  return (
    <section className="section split-media">
      <div className="split-media__header">
        <p className="eyebrow">Karşılaştırma</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>

      <div className="split-media__grid">
        <MediaCard {...content.left} />
        <MediaCard {...content.right} />
      </div>

      <div className="split-media__takeaway">{content.takeaway}</div>
    </section>
  )
}
