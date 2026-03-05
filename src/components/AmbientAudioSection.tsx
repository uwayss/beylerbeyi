import type { AmbientAudioContent } from '../types/content'

type AmbientAudioSectionProps = {
  content: AmbientAudioContent
}

export const AmbientAudioSection = ({ content }: AmbientAudioSectionProps) => {
  return (
    <section className="section ambient-audio">
      <div className="ambient-audio__panel">
        <p className="eyebrow">Dönem Atmosferi</p>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>

        <div className="ambient-audio__track">Şimdi çalan: {content.trackTitle}</div>
        <audio controls preload="metadata" loop={content.loop ?? true} className="ambient-audio__player">
          <source src={content.audioUrl} />
        </audio>
      </div>
    </section>
  )
}
