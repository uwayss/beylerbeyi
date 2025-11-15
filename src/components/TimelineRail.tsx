import type { TimelineEntry } from '../content/sections'

type TimelineRailProps = {
  entries: TimelineEntry[]
}

export const TimelineRail = ({ entries }: TimelineRailProps) => {
  return (
    <section className="section timeline">
      <div className="timeline__header">
        <p className="eyebrow">Zaman Çizgisi</p>
        <h2>Beylerbeyi Sarayı nasıl bugünkü hâline geldi?</h2>
        <p>
          Aşağıdaki istasyonlar sunum sırasında hikâyeyi 5 dakikaya yaymanız için hazırlandı. İstediğiniz
          kadar detay ekleyebilir ya da çıkarabilirsiniz.
        </p>
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

