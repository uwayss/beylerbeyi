export type ImageLayer = {
  src: string
  alt: string
  speed?: number
  credit?: string
}

export type HeroContent = {
  title: string
  subtitle: string
  description: string
  ctas: { label: string; href: string }[]
  background: {
    image: string
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
  description: string
  videoUrl: string
  posterUrl: string
  callout: string
}

export type PageContent = {
  hero: HeroContent
  parallaxSections: ParallaxSectionContent[]
  timeline: TimelineEntry[]
  quote: QuoteContent
  media: MediaSectionContent
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
      { label: 'Scroll & Discover', href: '#story' },
      { label: 'Plan Your Visit', href: 'https://muze.gov.tr/' },
    ],
    background: {
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
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
          src: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1600&q=80',
          alt: 'Bosphorus waters at dusk',
          speed: 8,
        },
        {
          src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
          alt: 'Palace facade close-up',
          speed: 16,
        },
      ],
      factoids: [
        { label: 'Mimari Üslup', value: 'Neobarok & Ampir' },
        { label: 'İnşa', value: '1861 - 1865' },
        { label: 'Mimar', value: 'Sarkis Balyan' },
      ],
    },
    {
      id: 'interiors',
      eyebrow: 'İçerideki Serinlik',
      heading: 'Kristal avizeler ve bambu mobilyalar yan yana',
      body:
        'Çin porseleni vazolar, Fransız saatleri, Mısır’dan gelen bambu oturma grupları… Sarayın salonları, Avrupa’nın modernliğiyle Doğu’nun konforunu aynı mekânda buluşturuyor.',
      imageLayers: [
        {
          src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1600&q=80',
          alt: 'Interior chandeliers',
          speed: 10,
        },
        {
          src: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=80',
          alt: 'Marble staircase details',
          speed: 20,
        },
      ],
      factoids: [
        { label: 'Mekân', value: 'Mermer Salonu' },
        { label: 'İklim', value: 'Doğal klima etkisi' },
        { label: 'Konuk', value: 'II. Napolyon’un eşi Eugénie' },
      ],
    },
    {
      id: 'gardens',
      eyebrow: 'Yamaçtaki Botanik',
      heading: 'Terraslar, selvi gölgeleri ve egzotik kuş sesleri',
      body:
        'Yamaç bahçeleri kademeli olarak yükselirken her terasta farklı kokularla tanışılıyor. Sarayın hayvanat bahçesi egzotik kuşlarla ün salmıştı.',
      imageLayers: [
        {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
          alt: 'Garden pathway',
          speed: 7,
        },
        {
          src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
          alt: 'Sunlit trees',
          speed: 18,
        },
      ],
      factoids: [
        { label: 'Terraza', value: '3 kademeli plan' },
        { label: 'Hayvanat Bahçesi', value: 'Tavus kuşları & Papağanlar' },
        { label: 'Sulama', value: 'Boğaz’dan çekilen tatlı su' },
      ],
    },
  ],
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
    heading: 'Sarayın ritmi: dalga, rüzgâr, kristal',
    description:
      'Kısa bir video döngüsü, deniz yüzeyiyle iç mekândaki ışığın titreşimini buluşturuyor. Kendi 4K çekimlerinizi buraya koyduğunuzda, sunum boyunca arka planda akıcı bir atmosfer oluşur.',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-istanbul-bridge-5945/1080p.mp4',
    posterUrl:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    callout: 'Videoyu kendi çekimlerinizle değiştirin; aynı oranı koruyun.',
  },
  closingNote: {
    heading: 'Sunumunuzu kişiselleştirin',
    body:
      'Metinleri, görselleri ve animasyon hızlarını `src/content/sections.ts` dosyasından değiştirerek kendi anlatınızı oluşturabilirsiniz. Her bölüm, tek bir obje olarak düzenlendiği için değişiklikler saniyeler içinde devreye girer.',
  },
}

