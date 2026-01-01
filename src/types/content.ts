export type ImageLayer = {
  src?: string
  alt: string
  speed?: number
  credit?: string
  video?: string
  poster?: string
}

export type HeroContent = {
  type: 'hero'
  title: string
  subtitle: string
  description: string
  ctas: { label: string; href: string }[]
  background: {
    image?: string
    video?: string
    poster?: string
    overlayColor?: string
    overlayOpacity?: number
  }
}

export type ParallaxSectionContent = {
  type: 'parallax'
  id: string
  eyebrow: string
  heading: string
  body: string
  imageLayers: ImageLayer[]
  factoids: { label: string; value: string }[]
}

export type TimelineEntry = {
  year: string
  title: string
  description: string
}

export type TimelineContent = {
  type: 'timeline'
  heading: string
  description?: string
  imageLayers?: ImageLayer[]
  entriesOpacity?: number
  entries: TimelineEntry[]
}

export type QuoteContent = {
  type: 'quote'
  quote: string
  speaker: string
  context: string
  imageLayers?: ImageLayer[]
}

export type MediaSectionContent = {
  type: 'media'
  heading: string
  description?: string
  videoUrl?: string
  posterUrl?: string
  callout: string
  imageLayers?: ImageLayer[]
}

export type CarouselSlide = {
  title: string
  description: string
  image?: string
  video?: string
  poster?: string
  tag?: string
}

export type CarouselContent = {
  type: 'carousel'
  heading: string
  intro: string
  slides: CarouselSlide[]
}

export type ClosingNoteContent = {
  type: 'closing'
  heading: string
  body: string
  imageLayers?: ImageLayer[]
}

export type Section = 
  | HeroContent 
  | ParallaxSectionContent 
  | TimelineContent 
  | QuoteContent 
  | MediaSectionContent 
  | CarouselContent
  | ClosingNoteContent

export type PageConfig = {
  sections: Section[]
}

