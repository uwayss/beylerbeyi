import type { GalleryContent } from '../types/content'

type GallerySectionProps = {
  content: GalleryContent
}

export const GallerySection = ({ content }: GallerySectionProps) => {
  return (
    <section className="section gallery">
      <div className="gallery__header">
        <p className="eyebrow">Görsel Kolaj</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>

      <div className="gallery__grid">
        {content.items.map((item) => (
          <figure key={`${item.src}-${item.caption}`} className="gallery__item">
            {item.kind === 'video' ? (
              <video src={item.src} poster={item.poster} muted loop autoPlay playsInline />
            ) : (
              <img src={item.src} alt={item.alt} />
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
