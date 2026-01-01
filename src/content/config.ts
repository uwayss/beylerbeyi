import type { PageConfig } from '../types/content';

const exampleConfig: PageConfig = {
  sections: [
    {
      type: 'hero',
      title: 'Hristiyanlık Dini',
      subtitle: 'Muhammed Antar & Youssef Awal',
      description:
        'Günümüzde en fazla mensubu bulunan dinlerden biri olan Hristiyanlık, Hz. İsa\'nın öğretileri ve hayatı etrafında şekillenmiş semavi bir dindir[19].',
      ctas: [],
      background: {
        video: '/assets/hristiyanlik-intro.mp4',
        overlayColor: '#000000',
        overlayOpacity: 0.6,
      },
    },
    {
      type: 'parallax',
      id: 'history',
      eyebrow: 'Nasıra\'dan Dünyaya',
      heading: 'Giriş ve Tarihçe',
      body:
        'Hz. İsa, Filistin\'in Nasıra kasabasında dünyaya gelmiş ve 30 yaşında peygamber olarak görevlendirilmiştir[22, 24]. Başlangıçta Roma baskısı altında kalan din, 313 Milan Fermanı ile serbest kalmış, 395 yılında Roma\'nın resmi dini olmuştur[51, 52].',
      imageLayers: [
        {
          src: '/assets/antik.jpg',
          alt: 'Historical map or Jerusalem footage',
        },
      ],
      factoids: [
        { label: 'Köken', value: 'Hz. İsa (Hristos) [20]' },
        { label: 'Kutsal Kitap', value: 'Kitab-ı Mukaddes [100]' },
        { label: 'Merkez', value: 'Kudüs & Vatikan [120, 121]' },
      ],
    },
    {
      type: 'carousel',
      heading: 'Semboller ve Mekanlar',
      intro: 'Hristiyanlıkta öne çıkan kutsal ögeler',
      slides: [
        {
          title: 'Haç İşareti',
          image: '/assets/cross.png',
          description: 'Hz. İsa\'nın çarmıha gerilişini sembolize eder, en temel işarettir[123].',
          tag: 'Sembol',
        },
        {
          title: 'Kiliseler',
          description: 'Ayinlerin yapıldığı, çan ile davet edilen ibadet yerleridir[116, 125].',
          video: '/assets/klise-drone.mp4',
          tag: 'Mabet',
        },
        {
          title: 'İncil (Ahd-i Cedit)',
          description: 'Matta, Markos, Luka ve Yuhanna İncilleri kutsal kabul edilir[101].',
          video: '/assets/bible-close-up.mp4',
          tag: 'Kitap',
        },
      ],
    },
    {
      type: 'parallax',
      id: 'beliefs',
      eyebrow: 'İnanç Esasları',
      heading: 'Üçlü Birlik: Teslis İnancı',
      body:
        'Hristiyan inancının temeli "Baba, Oğul ve Kutsal Ruh" üçlemesine dayanır. Baba yaratıcıyı, Oğul Hz. İsa\'yı, Kutsal Ruh ise Tanrı\'nın gücünü temsil eder[79, 87].',
      imageLayers: [
        {
          src: '/assets/teslis.png',
          alt: 'Trinity symbolism',
        },
      ],
      factoids: [
        { label: 'Baba', value: 'Yaratıcı İlah [80]' },
        { label: 'Oğul', value: 'Hz. İsa (Kurtarıcı) [81]' },
        { label: 'Amaç', value: 'Asli günahtan kurtuluş [84]' },
      ],
    },
    {
      type: 'parallax',
      id: 'rituals',
      eyebrow: 'İbadetler',
      heading: 'Sakramentler ve Ritüeller',
      body:
        'Kiliselerde yapılan ayinlere Sakrament denir. En önemlisi, kişinin asli günahtan arınması için yapılan Vaftiz törenidir[131, 134].',
      imageLayers: [
        {
          video: '/assets/vaftiz.mp4',
          alt: 'Church rituals',
          speed: 10,
        },
      ],
      factoids: [
        { label: 'Vaftiz', value: 'Kutsal su ile arınma [134]' },
        { label: 'Evharistiya', value: 'Ekmek-Şarap ayini [141]' },
        { label: 'Gün', value: 'Pazar günleri [106]' },
      ],
    },
    {
      type: 'timeline',
      heading: 'Hristiyanlığın Tarihsel Yolculuğu',
      description: 'Filistin\'den dünyaya yayılan bu inancın dönüm noktaları.',
      imageLayers: [
        {
          src: '/assets/luther.png',
          alt: 'Timeline',
        },
      ],
      entriesOpacity: 0.7,
      entries: [
        {
          year: 'MS 30 civarı',
          title: 'Tebliğ Dönemi',
          description: 'Hz. İsa, 30 yaşında peygamber olarak görevlendirildi ve tebliğe başladı[24].',
        },
        {
          year: '313',
          title: 'Milan Fermanı',
          description: 'İmparator Konstantin, Hristiyanlığı koruma altına aldı[51].',
        },
        {
          year: '325',
          title: 'İznik Konsili',
          description: 'Temel inanç esasları belirlendi ve 4 İncil kabul edildi[72, 74].',
        },
        {
          year: '1054',
          title: 'Büyük Bölünme',
          description: 'Roma (Katolik) ve İstanbul (Ortodoks) kiliseleri birbirinden ayrıldı[76].',
        },
        {
          year: '16. Yüzyıl',
          title: 'Reform',
          description: 'Martin Luther öncülüğünde Protestanlık mezhebi doğdu[167].',
        },
      ],
    },
    {
      type: 'quote',
      quote:
        'Ben Tanrı\'ya, kudretli Baba\'ya ve onun biricik oğlu Rab İsa\'ya... ve Kutsal Ruh\'a inanırım.',
      speaker: 'Havariler Akidesi',
      context: 'Hristiyanlığın İnanç Esasları [88]',
      imageLayers: [
        {
          src: '/assets/havariler.png',
          alt: 'Quote',
        },
      ],
    },
    {
      type: 'media',
      heading: 'Hristiyanlık Mezhepleri',
      imageLayers: [
        {
          src: '/assets/mezhepler.png',
          alt: 'Quote',
        },
      ],
      callout: 'Dünya geneli dağılım ve çeşitlilik',
    },
    {
      type: 'parallax',
      id: 'catholic',
      eyebrow: 'Mezhepler',
      heading: 'Katolik Kilisesi',
      body:
        'Hristiyanlığın en büyük mezhebi olan Katoliklik, merkezi bir yapıya sahiptir. Vatikan merkezli bu inancın lideri Papa\'dır. Geleneklere, sakramentlere ve Meryem Ana\'ya verilen önem belirgindir[76, 120].',
      imageLayers: [
        {
          src: '/assets/catholic.png',
          alt: 'Vatikan ve Katolik Sanatı',
        },
      ],
      factoids: [
        { label: 'Merkez', value: 'Vatikan (Roma) [120]' },
        { label: 'Lider', value: 'Papa [121]' },
        { label: 'Mensup', value: '1.3 Milyar+' },
      ],
    },
    {
      type: 'parallax',
      id: 'orthodox',
      eyebrow: 'Mezhepler',
      heading: 'Ortodoks Kilisesi',
      body:
        '1054 yılında Roma\'dan ayrılan Doğu kiliselerini temsil eder. İkonlara büyük önem verilir ve ayinler mistik bir hava taşır. Her milletin kendi milli kilisesi (Yunan, Rus vb.) bulunsa da manevi liderlik İstanbul Ekümenik Patrikhanesi\'ndedir[76].',
      imageLayers: [
        {
          src: '/assets/orthodox.png',
          alt: 'Ortodoks Kilisesi ve İkonlar',
        },
      ],
      factoids: [
        { label: 'Merkez', value: 'İstanbul / Moskova [76]' },
        { label: 'Lider', value: 'Patrik' },
        { label: 'Özellik', value: 'İkonografi ve Gelenek' },
      ],
    },
    {
      type: 'parallax',
      id: 'protestant',
      eyebrow: 'Mezhepler',
      heading: 'Protestanlık',
      body:
        '16. yüzyılda Martin Luther\'in Katolik Kilisesi\'ne yönelik eleştirileriyle doğmuştur. Sadece İncil\'i (Sola Scriptura) ve imanı temel alır. Merkezi bir ruhani liderlik yoktur; birçok farklı alt gruba (Anglikan, Baptist vb.) ayrılır[167].',
      imageLayers: [
        {
          src: '/assets/luther.png',
          alt: 'Martin Luther ve Reform',
        },
      ],
      factoids: [
        { label: 'Köken', value: '16. YY Reform [167]' },
        { label: 'Esas', value: 'Sola Scriptura (Yalnız Kitap)' },
        { label: 'Yapı', value: 'Merkezi Olmayan' },
      ],
    },
    {
      type: 'closing',
      heading: 'Dinlediğiniz için teşekkür ederiz 🙏',
      body: 'Sorularınız varsa memnuniyetle cevaplayabiliriz.',
      imageLayers: [
        {
          src: '/assets/closing.jpg',
          alt: 'Quote',
        },
      ],
    },
  ],
};

export default exampleConfig;