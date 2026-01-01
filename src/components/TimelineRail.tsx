import type { TimelineContent } from '../types/content'

type TimelineRailProps = {
  content: TimelineContent
}

export const TimelineRail = ({ content }: TimelineRailProps) => {
  const { entries, heading, description } = content;
  return (
    <section className="section timeline">
      <div className="timeline__header">
        <p className="eyebrow">Zaman Çizgisi</p>
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="timeline__rail">
        {entries.map((entry) => (
          <article key={entry.year} className="timeline__card">
            <span className="timeline__year">{entry.year}</span>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

