import type { PageConfig } from '../types/content';

export const exampleConfig: PageConfig = {
  sections: [
    {
      type: 'hero',
      title: 'Beylerbeyi Sarayı',
      subtitle: 'Boğazın şatafatlı nefesi',
      description:
        '19. yüzyılda Osmanlı diplomasi sahnesinin gözdesi olan saray, deniz esintisiyle karışan kristal avizeleri ve egzotik bahçeleriyle hâlâ nefes kesiyor.',
      ctas: [],
      background: {
        video: '/assets/kapi1.mp4',
        overlayColor: '#020817',
        overlayOpacity: 0.45,
      },
    },
    {
      type: 'parallax',
      id: 'story',
      eyebrow: 'Boğazın Kıyısında',
      heading: 'Denizle konuşan cepheler, mermerde dalga izleri',
      body:
        'Sarayın denize açılan rıhtımı, misafirleri sandallarla karşılayarak daha ilk anda teatral bir etki yaratırdı. Zemin katın yazlık planı, serin kuzey rüzgârlarını içeri davet eder.',
      imageLayers: [
        {
          video: '/assets/deniz.mp4',
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
      type: 'carousel',
      heading: 'Bazi Guzel Kareler',
      intro: 'Bazi anlik kareler',
      slides: [
        {
          title: 'Dış Mimari',
          image: '/assets/pic1.jpg',
          description: 'Detaylara bayıldım',
          tag: 'Dış Mimari',
        },
        {
          title: 'Ilk kacak cekim tecrubem',
          description: 'Caktirmadan avizeleri cekmeye calistim',
          video: '/assets/kacak.mp4',
          tag: 'Serinlik',
        },
        {
          title: 'Gol',
          description: 'Cicekleri begendim. Ama koparamadim :*(',
          image: '/assets/pic2.jpeg',
          tag: 'Detay',
        },
      ],
    },
    {
      type: 'parallax',
      id: 'craftsmanship',
      eyebrow: 'Atlantik’ten Gelen Esintiler',
      heading: 'İtalyan mermer ustalarıyla Kafkas oymacıların ortak dili',
      body:
        'Tavanlardaki altın varak süslemeler Roma atölyelerinde hazırlanırken duvar panellerindeki geometrik desenler Üsküdar’daki ahşap ustalarının imzasını taşıyor.',
      imageLayers: [
        {
          video: '/assets/heykel.mp4',
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
      type: 'parallax',
      id: 'interiors',
      eyebrow: 'Disarisi',
      heading: 'Bambu bahcesi',
      body: 'Biraz alakasiz buldum. Girmedim',
      imageLayers: [
        {
          video: '/assets/bambu.mp4',
          alt: 'Interior chandeliers',
          speed: 10,
        },
      ],
      factoids: [
        { label: 'Mekân', value: 'Bambu Bahcesi' },
        { label: 'Neden', value: 'Padisah seviyormus' },
      ],
    },
    {
      type: 'timeline',
      heading: 'Beylerbeyi Sarayı nasıl bugünkü hâline geldi?',
      description: 'Aşağıdaki istasyonlar sunum sırasında hikâyeyi 5 dakikaya yaymanız için hazırlandı. İstediğiniz kadar detay ekleyebilir ya da çıkarabilirsiniz.',
      entries: [
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
    },
    {
      type: 'quote',
      quote:
        'Boğaz’ın mavisi salona giriyor, dalgalar mermer zeminde yankılanıyordu; sanki saray, suyun üstünde süzülüyordu.',
      speaker: 'Fransız gazeteci Theophile Gautier',
      context: '1869 İstanbul seyahatnamesi',
    },
    {
      type: 'media',
      heading: 'Sarayın ritmi: Dalgalar ve rüzgârlar...',
      videoUrl: '/assets/bahcaaa.mp4',
      callout: 'Burayi degistir!!',
    },
    {
      type: 'closing',
      heading: 'Dinlediginiz icin tesekkur ederim 🙏🙏🫶',
      body: 'Evet simdi editorune de tesekkur et!',
    },
  ],
};

