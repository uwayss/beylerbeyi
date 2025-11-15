import { beylerbeyiContent } from './content/sections'
import { HeroSection } from './components/HeroSection'
import { ParallaxSection } from './components/ParallaxSection'
import { TimelineRail } from './components/TimelineRail'
import { QuoteBlock } from './components/QuoteBlock'
import { MediaReveal } from './components/MediaReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()
  const { hero, parallaxSections, timeline, quote, media, closingNote } = beylerbeyiContent

  return (
    <div className="page">
      <HeroSection content={hero} />
      {parallaxSections.map((section) => (
        <ParallaxSection key={section.id} content={section} />
      ))}
      <TimelineRail entries={timeline} />
      <QuoteBlock content={quote} />
      <MediaReveal content={media} />
      <section className="section closing">
        <h2>{closingNote.heading}</h2>
        <p>{closingNote.body}</p>
      </section>
    </div>
  )
}

export default App
