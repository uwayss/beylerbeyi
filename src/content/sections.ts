import kapiVideo from '../assets/kapi1.mp4'
import denizVideo from '../assets/deniz.mp4'
import heykelVideo from '../assets/heykel.mp4'
import firstPhoto from '../assets/pic1.jpg'
import kacakVideo from '../assets/kacak.mp4'
import lakePhoto from '../assets/pic2.jpeg'
import bambuVideo from "../assets/bambu.mp4"
import bahcaVideo from '../assets/bahcaaa.mp4'

export type ImageLayer = {
  src?: string // Image URL or fallback/poster for video (optional if video is provided)
  alt: string
  speed?: number
  credit?: string
  video?: string // Optional video URL - if provided, video will be used instead of image
  poster?: string // Optional poster image for video (falls back to src if not provided)
}

export type HeroContent = {
  title: string
  subtitle: string
  description: string
  ctas: { label: string; href: string }[]
  background: {
    image?: string
    video?: string // Optional video URL - if provided, video will be used instead of image
    poster?: string // Optional poster image for video
    overlayColor?: string
    overlayOpacity?: number
  }
}

export type ParallaxSectionContent = {
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

export type QuoteContent = {
  quote: string
  speaker: string
  context: string
}

export type MediaSectionContent = {
  heading: string
  description?: string
  videoUrl: string
  posterUrl?: string
  callout: string
}

export type CarouselSlide = {
  title: string
  description: string
  image?: string // Optional fallback/poster for video
  video?: string // Optional video URL - if provided, video will be used instead of image
  poster?: string // Optional poster image for video (falls back to image if not provided)
  tag?: string
}

export type CarouselContent = {
  heading: string
  intro: string
  slides: CarouselSlide[]
}

export type PageContent = {
  hero: HeroContent
  parallaxSections: ParallaxSectionContent[]
  timeline: TimelineEntry[]
  quote: QuoteContent
  media: MediaSectionContent
  carousel: CarouselContent
  closingNote: {
    heading: string
    body: string
  }
}

export const beylerbeyiContent: PageContent = {
  hero: {
    title: 'Beylerbeyi Sarayı',
    subtitle: 'Boğazın şatafatlı nefesi',
    description:
      '19. yüzyılda Osmanlı diplomasi sahnesinin gözdesi olan saray, deniz esintisiyle karışan kristal avizeleri ve egzotik bahçeleriyle hâlâ nefes kesiyor.',
    ctas: [
      // { label: 'Scroll & Discover', href: '#story' },
      // { label: 'Plan Your Visit', href: 'https://muze.gov.tr/' },
    ],
    background: {
      // image:
      //   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      video: kapiVideo,
      overlayColor: '#020817',
      overlayOpacity: 0.45,
    },
  },
  parallaxSections: [
    {
      id: 'story',
      eyebrow: 'Boğazın Kıyısında',
      heading: 'Denizle konuşan cepheler, mermerde dalga izleri',
      body:
        'Sarayın denize açılan rıhtımı, misafirleri sandallarla karşılayarak daha ilk anda teatral bir etki yaratırdı. Zemin katın yazlık planı, serin kuzey rüzgârlarını içeri davet eder.',
      imageLayers: [
        {
          video: denizVideo,
          alt: 'Bosphorus waters at dusk',
        },
      ],
      factoids: [
        { label: 'Mimari Üslup', value: 'Neobarok & Ampir' },
        { label: 'İnşa', value: '1861 - 1865' },
        { label: 'Mimar', value: 'Sarkis Balyan' },
      ],
    },
    {
      id: 'craftsmanship',
      eyebrow: 'Atlantik’ten Gelen Esintiler',
      heading: 'İtalyan mermer ustalarıyla Kafkas oymacıların ortak dili',
      body:
        'Tavanlardaki altın varak süslemeler Roma atölyelerinde hazırlanırken duvar panellerindeki geometrik desenler Üsküdar’daki ahşap ustalarının imzasını taşıyor.',
      imageLayers: [
        {
          video: heykelVideo,
          alt: 'Heykel videosu',
        },
      ],
      factoids: [
        { label: 'Varak', value: '24 ayar yaldız' },
        { label: 'Zemin', value: 'Marmara mermeri' },
        { label: 'Usta', value: 'Balyan ailesi atölyesi' },
      ],
    },
    {
      id: 'interiors',
      eyebrow: 'Disarisi',
      heading: 'Bambu bahcesi',
      body:
        'Biraz alakasiz buldum. Girmedim',
      imageLayers: [
        {
          video:bambuVideo,
          alt: 'Interior chandeliers',
          speed: 10,
        },
      ],
      factoids: [
        { label: 'Mekân', value: 'Bambu Bahcesi' },
        { label: 'Neden', value: 'Padisah seviyormus' },
      ],
    },
  ],
  carousel: {
    heading: 'Bazi Guzel Kareler',
    intro:
      'Bazi anlik kareler',
    slides: [
      {
        title: 'Dış Mimari',
        image: firstPhoto,
        description: 'Detaylara bayıldım',
        tag: 'Dış Mimari',
      },
      {
        title: 'Ilk kacak cekim tecrubem',
        description: 'Caktirmadan avizeleri cekmeye calistim',
        video: kacakVideo,
        tag: 'Serinlik',
      },
      {
        title: 'Gol',
        description: 'Cicekleri begendim. Ama koparamadim :*(',
        image: lakePhoto,
        tag: 'Detay',
      },
    ],
  },
  timeline: [
    {
      year: '1829',
      title: 'İlk Beylerbeyi Kasrı',
      description: 'Sultan II. Mahmud döneminde aynı bölgede ahşap köşk inşa edildi.',
    },
    {
      year: '1851',
      title: 'Yangın',
      description: 'Kasır büyük bir yangında kül oldu; bölge uzun süre boş kaldı.',
    },
    {
      year: '1864',
      title: 'Yeni Sarayın Açılışı',
      description: 'Sultan Abdülaziz, deniz kıyısındaki yeni sarayı büyük törenle açtı.',
    },
    {
      year: '1920’ler',
      title: 'Cumhuriyet Yılları',
      description: 'Saray, yabancı devlet adamları için konuk evi olarak kullanıldı.',
    },
  ],
  quote: {
    quote:
      'Boğaz’ın mavisi salona giriyor, dalgalar mermer zeminde yankılanıyordu; sanki saray, suyun üstünde süzülüyordu.',
    speaker: 'Fransız gazeteci Theophile Gautier',
    context: '1869 İstanbul seyahatnamesi',
  },
  media: {
    heading: 'Sarayın ritmi: Dalgalar ve rüzgârlar...',
    videoUrl: bahcaVideo,
    callout: 'Burayi degistir!!',
  },
  closingNote: {
    heading: 'Dinlediginiz icin tesekkur ederim 🙏🙏🫶',
    body:
      'Evet simdi editorune de tesekkur et!',
  },
}

