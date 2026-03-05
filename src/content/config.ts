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
      description:
        "Sunum boyunca düşük seviyede romantik dönem piyano atmosferi kullanıyoruz. Ses seviyesini salona göre ayarlayabilirsiniz.",
      trackTitle: "Nocturne Atmosphere (Placeholder)",
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
      body: "Sorularınızı alalım: Romantik dönemden hangi eseri birlikte analiz edelim?",
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
          names: ["Yer tutucu görseller/video/ses (değiştirilecek)"],
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
        speakerId: "hakim",
        section: "Dönem Özellikleri",
        duration: "1:50",
        text: "Romantik dönemin müzikteki en belirgin özellikleri: daha uzun ve şarkısal melodiler, daha cesur armoni kullanımı, çok geniş dinamik aralık, orkestranın büyümesi ve program müziğinin yaygınlaşması. Yani müzik artık yalnızca biçimsel bir yapı değil; bir hikâye, bir manzara, bir karakter ya da bir psikolojik durum da anlatabiliyor.",
      },
      {
        speakerId: "ulas",
        section: "Besteci Portreleri",
        duration: "2:00",
        text: "Bu dönemde her besteci romantizmi farklı yorumluyor. Chopin, piyanoda içe dönük ve şiirsel bir dünya kuruyor. Liszt, virtüöziteyi neredeyse sahne gösterisine dönüştürüyor. Wagner, operayı dramatik bütünlük içinde yeniden tanımlıyor. Tchaikovsky ise yoğun melodi gücüyle senfoni ve bale repertuvarında çok güçlü bir etki bırakıyor.",
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
        section: "Liszt ve Dramatik Etki",
        duration: "1:40",
        text: "Piyano tarafında Liszt'in etkisi çok büyük. O, piyanoyu adeta bir orkestra gibi kullanıyor. La Campanella çalışmasında teknik zorlukların ötesinde bir tını zenginliği görüyoruz. Bu eserler sadece yetenek göstermek için değil, enstrümanın sınırlarını zorlayarak yeni bir anlatım kurmak için yazılmış.",
      },
      {
        speakerId: "ulas",
        section: "Wagner ve Etki Alanı",
        duration: "1:40",
        text: "Wagner'in etkisi özellikle opera tarafında çok büyük. Leitmotif tekniğiyle karakterleri, fikirleri ve sahneleri belirli müzik motifleriyle eşleştiriyor. Ayrıca Tristan und Isolde gibi eserlerde armonik gerilim çok ileri bir noktaya taşınıyor. Bu, 20. yüzyıl müziğine geçişte önemli bir köprü oluşturuyor.",
      },
      {
        speakerId: "ali",
        section: "Eser Rotası 1",
        duration: "1:35",
        text: "Şimdi kısa eser rotasına geçiyoruz. Chopin'in Nocturne Op.9 No.2 eserinde rubato kullanımına dikkat edin: tempo tam sabit değil ama ifade çok doğal akıyor. Liszt'in Hungarian Rhapsody'sinde ise teknik parlaklık ve ani karakter değişimleri ön planda. İki eser de romantik dönemin farklı yüzlerini gösteriyor.",
      },
      {
        speakerId: "hakim",
        section: "Eser Rotası 2",
        duration: "1:35",
        text: "Wagner tarafında Ride of the Valkyries güçlü orkestral enerji ve motif kullanımını net biçimde gösteriyor. Tchaikovsky'de ise Swan Lake, hem sahne hem müzik anlatısını birlikte yükseltiyor. Bale müziğinin bu kadar kalıcı olmasının nedeni, melodik hafızasının çok güçlü olması ve dramatik akışın netliği.",
      },
      {
        speakerId: "uwayss",
        section: "Romantizmin Özeti",
        duration: "1:30",
        text: "Toparlarsak, Romantik Dönem aslında bir denge değil, bir tutku dönemidir. Chopin'den Tchaikovsky'ye kadar her besteci bu tutkuyu kendi diline dökmüştür. Bu müzik, dinleyiciyi sadece duymaya değil, hissetmeye davet eder.",
      },
      {
        speakerId: "hakim",
        section: "Dönemin Mirası",
        duration: "1:35",
        text: "Romantik dönem, modern müziğin kapısını aralayan bir dönem. Geç romantik bestecilerde tonallik sınırlarının zorlandığını görüyoruz. Mahler, Strauss ve Rachmaninov gibi isimler bu eşiği farklı yönlere taşıyor. Kısaca romantik dönem, hem duygusal yoğunluk hem de teknik yenilik bakımından kalıcı bir miras bırakıyor.",
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
