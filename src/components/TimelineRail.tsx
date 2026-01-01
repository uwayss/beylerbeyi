import type { TimelineContent } from '../types/content'
import { ParallaxLayer } from './ParallaxLayer'

type TimelineRailProps = {
  content: TimelineContent
}

export const TimelineRail = ({ content }: TimelineRailProps) => {
  const { entries, heading, description, imageLayers, entriesOpacity } = content;
  return (
    <section className="section timeline">
      {imageLayers && imageLayers.length > 0 && (
        <div className="timeline__media">
          {imageLayers.map((layer, index) => (
            <ParallaxLayer key={layer.video || layer.src || `layer-${index}`} layer={layer} />
          ))}
        </div>
      )}
      <div className="timeline__header">
        <p className="eyebrow">Zaman Çizgisi</p>
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
      </div>
      <div 
        className="timeline__rail"
        style={entriesOpacity !== undefined ? { opacity: entriesOpacity } : {}}
      >
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

