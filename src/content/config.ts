import type { PageConfig } from "../types/content";

const romanticPeriodConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Müzikte Romantik Dönem",
      subtitle: "Ali • Muhammed • Uwayss • Ulaş • Hakim",
      description:
        "Duygunun, hayal gücünün ve dev orkestraların yüzyılı: 19. yüzyıl Avrupa müziğine kısa ama etkileyici bir yolculuk.",
      ctas: [
        { label: "Sunuma Başla", href: "#romantik-baslangic" },
        { label: "Transcript Sayfası", href: "/transcript" },
      ],
      background: {
        video: "/assets/romantik/hero-orchestra.mp4",
        poster: "/assets/romantik/hero-orchestra-poster.jpg",
        overlayColor: "#05070f",
        overlayOpacity: 0.62,
      },
    },
    {
      type: "ambientAudio",
      heading: "Arka Plan Atmosferi",
      description: "",
      trackTitle: "Nocturne Atmosphere",
      audioUrl: "/assets/romantik/audio/nocturne-loop.mp3",
      loop: true,
    },
    {
      type: "parallax",
      id: "romantik-baslangic",
      eyebrow: "Tarihsel Çerçeve",
      heading: "Romantik Dönem Ne Zaman?",
      body: "Yaklaşık 1820-1910 arasında, müzikte bireysel ifade ve yoğun duygu öne çıktı. Sanayileşme, milliyetçilik ve edebiyat akımları bestecilerin dilini doğrudan etkiledi.",
      imageLayers: [
        {
          video: "/assets/romantik/timeline-smoke.mp4",
          poster: "/assets/romantik/timeline-smoke-poster.jpg",
          alt: "Romantik dönem atmosfer görüntüsü",
        },
      ],
      factoids: [
        { label: "Dönem", value: "1820 - 1910" },
        { label: "Odak", value: "Duygu & Hayal Gücü" },
        { label: "Kırılma", value: "Program Müziği" },
      ],
    },
    {
      type: "composerSpotlight",
      heading: "Dönemin Öne Çıkan Bestecileri",
      description:
        "Farklı ülkelerden gelen besteciler, romantik dönemin farklı yüzlerini temsil ediyor.",
      composers: [
        {
          name: "Frédéric Chopin",
          years: "1810 - 1849",
          region: "Polonya / Fransa",
          signatureWork: "Nocturne Op. 9 No. 2",
          portrait: "/assets/romantik/composers/chopin.jpg",
        },
        {
          name: "Franz Liszt",
          years: "1811 - 1886",
          region: "Macaristan",
          signatureWork: "Hungarian Rhapsody No. 2",
          portrait: "/assets/romantik/composers/liszt.jpg",
        },
        {
          name: "Richard Wagner",
          years: "1813 - 1883",
          region: "Almanya",
          signatureWork: "Tristan und Isolde",
          portrait: "/assets/romantik/composers/wagner.jpg",
        },
        {
          name: "P. I. Tchaikovsky",
          years: "1840 - 1893",
          region: "Rusya",
          signatureWork: "Swan Lake",
          portrait: "/assets/romantik/composers/tchaikovsky.jpg",
        },
      ],
    },
    {
      type: "splitMedia",
      heading: "Piyano Romantizmi vs Senfonik Romantizm",
      description:
        "Romantik dönemde hem solo piyano hem de dev orkestra dili eşzamanlı büyüdü.",
      left: {
        title: "Salon ve Piyano Dünyası",
        video: "/assets/romantik/split/piano-close.mp4",
        poster: "/assets/romantik/split/piano-close-poster.jpg",
      },
      right: {
        title: "Konser Salonu ve Orkestra",
        video: "/assets/romantik/split/orchestra-wide.mp4",
        poster: "/assets/romantik/split/orchestra-wide-poster.jpg",
      },
      takeaway:
        "Küçük bir piyano parçası da, yüz kişilik orkestra da aynı dönemin duygusal dilini taşır.",
    },
    {
      type: "timeline",
      heading: "Romantik Dönemin Dönüm Noktaları",
      description:
        "Ana tarih çizgisi: biçimden duygunun mutlak üstünlüğüne geçiş.",
      imageLayers: [
        {
          src: "/assets/romantik/timeline-bg.jpg",
          alt: "Romantik dönem zaman çizgisi arka planı",
        },
      ],
      entriesOpacity: 0.78,
      entries: [
        {
          year: "1820",
          title: "Erken Romantik Başlangıç",
          description:
            "Beethoven sonrası kuşak, klasik formu genişletip daha kişisel bir dil kurdu.",
        },
        {
          year: "1830-1848",
          title: "Piyano Çağı",
          description:
            "Chopin ve Liszt, piyano repertuvarını teknik ve duygusal olarak dönüştürdü.",
        },
        {
          year: "1850-1870",
          title: "Program Müziği ve Senfonik Şiir",
          description:
            "Liszt ile tek bölümlü anlatısal orkestral eserler yaygınlaştı.",
        },
        {
          year: "1865",
          title: "Wagner Etkisi",
          description:
            "Tristan und Isolde ile armonik gerilim, modern müziğe kapı araladı.",
        },
        {
          year: "1890-1910",
          title: "Geç Romantik Eşik",
          description:
            "Mahler ve Rachmaninov ile romantik dil modernizme doğru taşındı.",
        },
      ],
    },
    {
      type: "gallery",
      heading: "Dönemin Mimari Dokusu",
      description:
        "Romantik dönem mimarisi, geçmişin görkemine duyulan özlem (Neogotik, Neoklasik) ve doğayla bütünleşen tasarım anlayışıyla şekillendi.",
      items: [
        {
          src: "/assets/romantik/mimari-1.png",
          alt: "Neogotik Mimari Örneği",
          caption: "Neogotik: Orta Çağ'ın dikey hatlarına geri dönüş.",
          kind: "image",
        },
        {
          src: "/assets/romantik/mimari-2.png",
          alt: "Romantik Bahçe ve Köşk",
          caption: "Doğa ile iç içe, asimetrik ve pitoresk yapılar.",
          kind: "image",
        },
      ],
    },
    {
      type: "carousel",
      heading: "Dönemin Magazinel Olayları",
      intro:
        "Müzik dünyasının kurallarını yıkan, aşkları ve kavgalarıyla konuşulan romantik isimler.",
      slides: [
        {
          title: "Lisztomania",
          description:
            "Franz Liszt sahneye çıktığında kadınlar bayılır, eldivenlerini kapmak için birbirlerini ezerlerdi. Tarihin ilk rock starı o kabul edilir.",
          tag: "Fenomen",
          image: "/assets/romantik/composers/liszt.jpg",
        },
        {
          title: "Chopin ve George Sand",
          description:
            "Kırılgan besteci Chopin ile pantolon giyip pipo içen aykırı yazar George Sand'in fırtınalı aşkı, dönemin en çok konuşulan magazin konusuydu.",
          tag: "Skandal Aşk",
          image: "/assets/romantik/composers/chopin.jpg",
        },
        {
          title: "Wagner'in Kaçışları",
          description:
            "Lüks tutkusu yüzünden sürekli borç içinde yüzen Wagner, alacaklılarından kaçarken bir yandan da devasa operalarını yazardı.",
          tag: "Yaşam Tarzı",
          image: "/assets/romantik/composers/wagner.jpg",
        },
      ],
    },
    {
      type: "youtube",
      heading: "İkonik Bir Performans: Liszt",
      description:
        "Romantik dönemin 'rock starı' Liszt'in teknik dehasını ve duygusal derinliğini bu performansta görebiliriz.",
      embedUrl: "https://www.youtube.com/watch?v=H1Dvg2MxQn8",
      callout:
        "Dinlerken: Piyano üzerindeki el hareketlerine ve dinamik değişimlere dikkat edin.",
    },
    {
      type: "quote",
      quote:
        "Müziğin görevi, sözcüklerin bittiği yerde insanın iç dünyasını konuşulur kılmaktır.",
      speaker: "Romantik dönem estetiği özeti",
      context: "Dönemin ortak ruhu",
      imageLayers: [
        {
          src: "/assets/romantik/quote-bg.jpg",
          alt: "Romantik dönem dokusu",
        },
      ],
    },
    {
      type: "closing",
      heading: "Teşekkürler 🎼",
      body: "",
      imageLayers: [
        {
          src: "/assets/romantik/closing-stage.jpg",
          alt: "Kapanış sahnesi",
        },
      ],
      credits: [
        {
          role: "Anlatım",
          names: ["Ali", "Muhammed", "Uwayss", "Ulaş", "Hakim"],
        },
        {
          role: "İçerik Kapsamı",
          names: ["Romantik Dönem", "Besteciler", "Eser Analizi"],
        },
        {
          role: "Medya",
          names: ["Pixabay ve ChatGPT"],
        },
      ],
    },
  ],
  transcript: {
    title: "Müzikte Romantik Dönem - Tam Konuşma Metni",
    subtitle:
      "Bu sayfa, 20 dakikalık sunum sırasında ekip üyelerinin söyleyeceği metnin tam halidir.",
    totalDuration: "20:00",
    speakers: [
      { id: "ali", name: "Ali", color: "#f59e0b" },
      { id: "muhammed", name: "Muhammed", color: "#38bdf8" },
      { id: "uwayss", name: "Uwayss", color: "#a78bfa" },
      { id: "ulas", name: "Ulaş", color: "#34d399" },
      { id: "hakim", name: "Hakim", color: "#f43f5e" },
    ],
    segments: [
      {
        speakerId: "ali",
        section: "Giriş",
        duration: "1:30",
        text: "Herkese merhaba. Bugün sizlere müzik tarihinde çok önemli bir kırılma noktası olan Romantik Dönem'i anlatacağız. Klasik dönemde denge ve biçim daha öndeyken, romantik dönemde duygu, bireysel ifade ve hayal gücü merkezde yer alıyor. Sunum boyunca dönemin temel özelliklerini, önemli bestecilerini ve ikonik eserlerini kısa ama etkili örneklerle birlikte ele alacağız.",
      },
      {
        speakerId: "muhammed",
        section: "Tarihsel Çerçeve",
        duration: "1:40",
        text: "Romantik dönemi kabaca 19. yüzyıl boyunca düşünebiliriz. Bu dönem Avrupa'da toplumsal dönüşümlerin çok hızlandığı bir zaman. Sanayileşme, şehirleşme, milliyetçilik akımları ve edebiyat hareketleri müziği doğrudan etkiliyor. Besteciler artık sadece saraya değil, daha geniş konser salonu kitlesine de üretim yapıyor. Bu da hem formu hem de anlatım dilini değiştiriyor.",
      },
      {
        speakerId: "ulas",
        section: "Besteci Portreleri",
        duration: "2:00",
        text: "Bu dönemde her besteci romantizmi farklı yorumluyor. Chopin, piyanoda içe dönük ve şiirsel bir world kuruyor. Liszt, virtüöziteyi neredeyse sahne gösterisine dönüştürüyor. Wagner, operayı dramatik bütünlük içinde yeniden tanımlıyor. Tchaikovsky ise yoğun melodi gücüyle senfoni ve bale repertuvarında çok güçlü bir etki bırakıyor.",
      },
      {
        speakerId: "ali",
        section: "Piyano ve Salon Kültürü",
        duration: "1:40",
        text: "Romantik dönemde piyano çok merkezi bir enstrüman haline geliyor. Özellikle salon konserlerinde besteciler daha kişisel, daha kırılgan, daha lirizm odaklı eserler üretiyor. Chopin'in nocturne'leri bunun en iyi örneklerinden biri. Teknik açıdan zor ama dinleyici tarafında çok duygusal bir etki bırakan bir dil görüyoruz.",
      },
      {
        speakerId: "hakim",
        section: "Orkestra ve Dev Ses",
        duration: "1:40",
        text: "Aynı dönemde orkestralar hem büyüyor hem de renkleniyor. Üflemeli ve vurmalı kullanımı artıyor. Dinamik aralık çok genişliyor: çok sakin bir pasajdan bir anda patlayıcı bir zirveye çıkılabiliyor. Bu yüzden romantik dönemi dinlerken bir film müziği hissi almak çok normal; dramatik geçişler çok güçlü.",
      },
      {
        speakerId: "uwayss",
        section: "Dönüm Noktaları",
        duration: "1:40",
        text: "Zaman çizgisine baktığımızda, romantik dönemin evrimini net görebiliyoruz. Erken romantiklerden geç romantiğe kadar armoni ve form sürekli genişliyor. Wagner'in Tristan und Isolde'si ile modernliğe kapı aralanıyor, Mahler ve Rachmaninov ile bu dil 20. yüzyıla taşınıyor.",
      },
      {
        speakerId: "ulas",
        section: "Mimari Dokusu",
        duration: "1:20",
        text: "Dönemin mimarisi de bu ruhu yansıtıyor. Neogotik ve Neoklasik etkilerle geçmişin ihtişamına duyulan bir özlem var. Doğa ile iç içe, asimetrik ve pitoresk yapılar, o dönemde gelişen 'uçsuz buçaksızlık' hissini binalara da taşımış. Özellikle neogotik seçkilerdeki dikey hatlar, tıpkı müzikteki yükselişler gibi etkileyici.",
      },
      {
        speakerId: "muhammed",
        section: "Magazinel Olaylar",
        duration: "1:30",
        text: "Tabii bu dönem sadece notalardan ibaret değil, aynı zamanda büyük magazinel olayların da dönemi. Franz Liszt'in 'Lisztomania' etkisi, tarihin ilk rock starı fenomenini yaratmış. Chopin ve George Sand'in fırtınalı aşkı, Wagner'in lüks tutkusu yüzünden alacaklılardan kaçarken devasa operalar yazması gibi olaylar, dönemin insan faktörünü ve tutkusunu en iyi gösteren detaylar.",
      },
      {
        speakerId: "hakim",
        section: "İkonik Performans",
        duration: "1:40",
        text: "Piyano tarafında Liszt'in etkisi çok büyük. O, piyanoyu adeta bir orkestra gibi kullanıyor. La Campanella çalışmasında teknik zorlukların ötesinde bir tını zenginliği görüyoruz. Bu eserler sadece yetenek göstermek için değil, enstrümanın sınırlarını zorlayarak yeni bir anlatım kurmak için yazılmış.",
      },
      {
        speakerId: "uwayss",
        section: "Romantizmin Özeti",
        duration: "1:10",
        text: "Toparlarsak, Romantik Dönem aslında bir denge değil, bir tutku dönemidir. Chopin'den Tchaikovsky'ye kadar her besteci bu tutkuyu kendi diline dökmüştür. Bu müzik, dinleyiciyi sadece duymaya değil, hissetmeye davet eder.",
      },
      {
        speakerId: "ali",
        section: "Kapanış",
        duration: "1:25",
        text: "Toparlarsak: romantik dönem, müzikte bireysel anlatımı güçlendirdi, orkestrayı büyüttü, yeni türleri öne çıkardı ve dinleyiciyle duygusal bağı derinleştirdi. Bugün hâlâ konser programlarında en çok yer alan repertuvarın büyük bölümü bu dönemin üretimlerinden geliyor.",
      },
      {
        speakerId: "muhammed",
        section: "Soruya Geçiş",
        duration: "0:55",
        text: "Dinlediğiniz için teşekkür ederiz. Eğer isterseniz kısa bir dinleme analizi yapabiliriz: seçtiğimiz performansta tempo, dinamizm ve ifade açısından hangi romantik özellikleri duyduğunuzu birlikte konuşabiliriz.",
      },
    ],
  },
};

export default romanticPeriodConfig;
