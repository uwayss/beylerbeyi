import { Fragment } from 'react'
import { beylerbeyiContent } from './content/sections'
import { HeroSection } from './components/HeroSection'
import { ParallaxSection } from './components/ParallaxSection'
import { TimelineRail } from './components/TimelineRail'
import { QuoteBlock } from './components/QuoteBlock'
import { MediaReveal } from './components/MediaReveal'
import { CarouselSection } from './components/CarouselSection'

function App() {
  const { hero, parallaxSections, timeline, quote, media, carousel, closingNote } = beylerbeyiContent

  return (
    <div className="page">
      <HeroSection content={hero} />
      {parallaxSections.map((section) => (
        <Fragment key={section.id}>
          <ParallaxSection content={section} />
          {section.id === 'craftsmanship' ? <CarouselSection content={carousel} /> : null}
        </Fragment>
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
