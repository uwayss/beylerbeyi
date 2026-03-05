import type { ComposerSpotlightContent } from '../types/content'

type ComposerSpotlightSectionProps = {
  content: ComposerSpotlightContent
}

export const ComposerSpotlightSection = ({ content }: ComposerSpotlightSectionProps) => {
  return (
    <section className="section spotlight">
      <div className="spotlight__header">
        <p className="eyebrow">Besteci Portreleri</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>

      <div className="spotlight__grid">
        {content.composers.map((composer) => (
          <article className="spotlight__card" key={composer.name}>
            <img src={composer.portrait} alt={composer.name} />
            <div>
              <h3>{composer.name}</h3>
              <p>{composer.years}</p>
              <p>{composer.region}</p>
              <p>
                <strong>İmza eser:</strong> {composer.signatureWork}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
