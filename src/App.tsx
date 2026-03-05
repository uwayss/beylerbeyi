import { content } from './content/sections'
import { HeroSection } from './components/HeroSection'
import { AmbientAudioSection } from './components/AmbientAudioSection'
import { ParallaxSection } from './components/ParallaxSection'
import { TimelineRail } from './components/TimelineRail'
import { QuoteBlock } from './components/QuoteBlock'
import { MediaReveal } from './components/MediaReveal'
import { YoutubeSection } from './components/YoutubeSection'
import { SplitMediaSection } from './components/SplitMediaSection'
import { GallerySection } from './components/GallerySection'
import { ComposerSpotlightSection } from './components/ComposerSpotlightSection'
import { CarouselSection } from './components/CarouselSection'
import { ClosingSection } from './components/ClosingSection'
import { TranscriptPage } from './components/TranscriptPage'
import type { Section } from './types/content'

const SectionRenderer = ({ section }: { section: Section }) => {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section} />
    case 'ambientAudio':
      return <AmbientAudioSection content={section} />
    case 'parallax':
      return <ParallaxSection content={section} />
    case 'timeline':
      return <TimelineRail content={section} />
    case 'quote':
      return <QuoteBlock content={section} />
    case 'media':
      return <MediaReveal content={section} />
    case 'youtube':
      return <YoutubeSection content={section} />
    case 'splitMedia':
      return <SplitMediaSection content={section} />
    case 'gallery':
      return <GallerySection content={section} />
    case 'composerSpotlight':
      return <ComposerSpotlightSection content={section} />
    case 'carousel':
      return <CarouselSection content={section} />
    case 'closing':
      return <ClosingSection content={section} />
    default:
      return null
  }
}

function App() {
  const { sections } = content
  const isTranscriptPage = window.location.pathname === '/transcript'

  return (
    <div className="page">
      <nav className="floating-nav">
        <a href="/" className={isTranscriptPage ? 'nav-link ghost' : 'nav-link'}>
          Sunum
        </a>
        <a href="/transcript" className={isTranscriptPage ? 'nav-link' : 'nav-link ghost'}>
          Transcript
        </a>
      </nav>

      {isTranscriptPage ? (
        <TranscriptPage transcript={content.transcript} />
      ) : (
        sections.map((section, index) => (
          <SectionRenderer key={`${section.type}-${index}`} section={section} />
        ))
      )}
    </div>
  )
}

export default App
