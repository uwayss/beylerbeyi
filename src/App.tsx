import { content } from './content/sections'
import { HeroSection } from './components/HeroSection'
import { ParallaxSection } from './components/ParallaxSection'
import { TimelineRail } from './components/TimelineRail'
import { QuoteBlock } from './components/QuoteBlock'
import { MediaReveal } from './components/MediaReveal'
import { CarouselSection } from './components/CarouselSection'
import type { Section } from './types/content'

const SectionRenderer = ({ section }: { section: Section }) => {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section} />
    case 'parallax':
      return <ParallaxSection content={section} />
    case 'timeline':
      return <TimelineRail content={section} />
    case 'quote':
      return <QuoteBlock content={section} />
    case 'media':
      return <MediaReveal content={section} />
    case 'carousel':
      return <CarouselSection content={section} />
    case 'closing':
      return (
        <section className="section closing">
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      )
    default:
      return null
  }
}

function App() {
  const { sections } = content

  return (
    <div className="page">
      {sections.map((section, index) => (
        <SectionRenderer key={`${section.type}-${index}`} section={section} />
      ))}
    </div>
  )
}

export default App
