export type ImageLayer = {
  src?: string;
  alt: string;
  speed?: number;
  credit?: string;
  video?: string;
  poster?: string;
};

export type HeroContent = {
  type: "hero";
  title: string;
  subtitle: string;
  description: string;
  ctas: { label: string; href: string }[];
  background: {
    image?: string;
    video?: string;
    poster?: string;
    overlayColor?: string;
    overlayOpacity?: number;
  };
};

export type AmbientAudioContent = {
  type: "ambientAudio";
  heading: string;
  description: string;
  trackTitle: string;
  audioUrl: string;
  loop?: boolean;
};

export type ParallaxSectionContent = {
  type: "parallax";
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  imageLayers: ImageLayer[];
  factoids: { label: string; value: string }[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type TimelineContent = {
  type: "timeline";
  heading: string;
  description?: string;
  imageLayers?: ImageLayer[];
  entriesOpacity?: number;
  entries: TimelineEntry[];
};

export type QuoteContent = {
  type: "quote";
  quote: string;
  speaker: string;
  context: string;
  imageLayers?: ImageLayer[];
};

export type MediaSectionContent = {
  type: "media";
  heading: string;
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
  callout: string;
  imageLayers?: ImageLayer[];
};

export type YoutubeSectionContent = {
  type: "youtube";
  heading: string;
  description: string;
  embedUrl: string;
  callout: string;
};

export type SplitMediaContent = {
  type: "splitMedia";
  heading: string;
  description: string;
  left: {
    title: string;
    image?: string;
    video?: string;
    poster?: string;
  };
  right: {
    title: string;
    image?: string;
    video?: string;
    poster?: string;
  };
  takeaway: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  kind: "image" | "video";
  poster?: string;
};

export type GalleryContent = {
  type: "gallery";
  heading: string;
  description: string;
  items: GalleryItem[];
};

export type ComposerSpotlightItem = {
  name: string;
  years: string;
  region: string;
  signatureWork: string;
  portrait: string;
};

export type ComposerSpotlightContent = {
  type: "composerSpotlight";
  heading: string;
  description: string;
  composers: ComposerSpotlightItem[];
};

export type CarouselSlide = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
  tag?: string;
};

export type CarouselContent = {
  type: "carousel";
  heading: string;
  intro: string;
  slides: CarouselSlide[];
};

export type ClosingNoteContent = {
  type: "closing";
  heading: string;
  body: string;
  imageLayers?: ImageLayer[];
  credits?: {
    role: string;
    names: string[];
  }[];
};

export type Section =
  | HeroContent
  | AmbientAudioContent
  | ParallaxSectionContent
  | TimelineContent
  | QuoteContent
  | MediaSectionContent
  | YoutubeSectionContent
  | SplitMediaContent
  | GalleryContent
  | ComposerSpotlightContent
  | CarouselContent
  | ClosingNoteContent;

export type TranscriptSpeaker = {
  id: string;
  name: string;
  color: string;
};

export type TranscriptSegment = {
  speakerId: string;
  section: string;
  duration: string;
  text: string;
};

export type TranscriptContent = {
  title: string;
  subtitle: string;
  totalDuration: string;
  speakers: TranscriptSpeaker[];
  segments: TranscriptSegment[];
};

export type PageConfig = {
  sections: Section[];
  transcript: TranscriptContent;
};
