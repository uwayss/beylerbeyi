import type { QuoteContent } from '../content/sections'

type QuoteBlockProps = {
  content: QuoteContent
}

export const QuoteBlock = ({ content }: QuoteBlockProps) => {
  return (
    <section className="section quote">
      <p className="eyebrow">{content.context}</p>
      <blockquote>
        <span>“</span>
        {content.quote}
        <span>”</span>
      </blockquote>
      <cite>{content.speaker}</cite>
    </section>
  )
}

