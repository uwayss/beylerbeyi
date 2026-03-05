import type { TranscriptContent } from '../types/content'

type TranscriptPageProps = {
  transcript: TranscriptContent
}

export const TranscriptPage = ({ transcript }: TranscriptPageProps) => {
  return (
    <main className="transcript-page page">
      <header className="transcript-page__header">
        <p className="eyebrow">Tam Konuşma Metni</p>
        <h1>{transcript.title}</h1>
        <p>{transcript.subtitle}</p>
        <p className="transcript-page__duration">Toplam süre: {transcript.totalDuration}</p>
      </header>

      <section className="transcript-speakers">
        {transcript.speakers.map((speaker) => (
          <div className="transcript-speakers__chip" key={speaker.id}>
            <span className="transcript-speakers__dot" style={{ background: speaker.color }} />
            {speaker.name}
          </div>
        ))}
      </section>

      <section className="transcript-segments">
        {transcript.segments.map((segment, index) => {
          const speaker = transcript.speakers.find((item) => item.id === segment.speakerId)
          if (!speaker) return null

          return (
            <article className="transcript-segment" key={`${segment.speakerId}-${index}`}>
              <div className="transcript-segment__meta">
                <span className="transcript-speakers__dot" style={{ background: speaker.color }} />
                <strong>{speaker.name}</strong>
                <span>{segment.section}</span>
                <span>{segment.duration}</span>
              </div>
              <p>{segment.text}</p>
            </article>
          )
        })}
      </section>
    </main>
  )
}
