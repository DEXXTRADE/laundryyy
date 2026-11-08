/* ==========================================================================
   Chingu Laundry Express — Single Script Configuration & Application Logic
   File: script.js
   Pure Vanilla JavaScript (Tanpa build/bundling — Siap Deploy ke GitHub Pages)
   ========================================================================== */

(function (root) {
  'use strict';

  /* ==========================================================================
     PANDUAN PENGELOLAAN / EDIT KONTEN OLEH CLIENT ATAU PEMILIK WEB
     --------------------------------------------------------------------------
     Seluruh teks, harga, nomor WhatsApp, foto, promo, layanan, cabang outlet,
     dan testimoni diatur pada objek LAUNDRY_CONFIG di bawah ini.

     Untuk mengubah isi website:
     1. Buka file "script.js" ini.
     2. Ubah data di dalam LAUNDRY_CONFIG sesuai petunjuk komentar.
     3. Simpan (Save) dan Push/Upload ke GitHub.
     4. Website di GitHub Pages akan langsung terupdate otomatis!
     ========================================================================== */

  var LAUNDRY_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. INFORMASI UTAMA & KONTAK BISNIS
    // ------------------------------------------------------------------------
    brandName: 'dex Laundry',
    // Nomor WhatsApp tujuan order (awali dengan 62 atau 08, otomatis diformat):
    whatsappNumber: '6282276328839',
    operationalHours: 'Setiap hari 07.00 – 20.00 WIB',
    copyrightYear: '2026',
    copyrightBrand: 'dex Laundry Express',

    // ------------------------------------------------------------------------
    // 2. FOTO & GAMBAR WEBSITE
    // Anda bisa menggunakan file lokal (seperti './assets/images/...') atau URL online.
    // ------------------------------------------------------------------------
    images: {
      hero: './assets/images/hero_laundry_lounge.jpg',
      promo: './assets/images/promo_fresh_linens.jpg',
      facility: './assets/images/facility_steam_care.jpg',
      outlet: './assets/images/outlet_storefront_interior.jpg',
    },

    // ------------------------------------------------------------------------
    // 3. HERO BANNER (Bagian Tampilan Utama Atas)
    // ------------------------------------------------------------------------
    heroEyebrow: 'Annyeonghaseyo · Layanan Laundry Express Higienis',
    heroTitle: 'Bersih, Wangi, dan Rapi dalam Hitungan Jam.',
    heroSubtitle:
      'Konsep 1 Mesin 1 Pelanggan agar pakaian Anda tidak pernah tercampur. Dijemput kurir maksimal 30 menit dan diantar kembali tepat waktu.',
    heroCtaText: 'Hitung Harga & Pesan',
    heroCaptionTitle: '1 Mesin, 1 Customer',
    heroCaptionSub: 'Pakaian tidak pernah dicampur',

    // 3 Angka Statistik di Bawah Tombol Hero:
    heroMetrics: [
      { value: '27+', label: 'Outlet di 5 Kota' },
      { value: '30 Mnt', label: 'Pickup Kurir Cepat' },
      { value: '3 Jam', label: 'Layanan Express Kilat' },
    ],

    // ------------------------------------------------------------------------
    // 4. RUNNING TEXT (Teks Berjalan / Marquee Ticker)
    // ------------------------------------------------------------------------
    marqueeItems: [
      '1 Mesin 1 Customer',
      'Express Selesai 3 Jam',
      'Antar Jemput Maks. 30 Menit',
      'Parfum Premium Tahan Lama',
      'Pembayaran QRIS & Cashless',
    ],

    // ------------------------------------------------------------------------
    // 5. KEUNGGULAN LAYANAN (4 Poin Utama)
    // ------------------------------------------------------------------------
    featuresKicker: 'Standar Pelayanan i',
    featuresTitle: 'Mengapa Harus Chingu Laundry?',
    featuresLead:
      'Dirancang untuk gaya hidup aktif yang mengutamakan kebersihan higienis, ketepatan waktu, dan perawatan serat kain yang lembut.',
    features: [
      {
        id: 'fitur-1',
        title: '1 Mesin untuk 1 Pelanggan',
        description:
          'Setiap order diproses dalam tabung cuci terpisah untuk menjaga higienitas dan mencegah pakaian tertukar.',
      },
      {
        id: 'fitur-2',
        title: 'Pilihan Kecepatan Express 3 Jam',
        description:
          'Tersedia layanan Reguler 3 Hari, One Day 24 Jam, Express 6 Jam, hingga paket kilat Quick 3 Jam selesai.',
      },
      {
        id: 'fitur-3',
        title: 'Kurir Jemput Maksimal 30 Menit',
        description:
          'Pesan dari rumah atau kantor, kurir mitra kami segera menjemput cucian Anda dan mengantar kembali dalam keadaan rapi.',
      },
      {
        id: 'fitur-4',
        title: 'Setrika Uap & Parfum Eksklusif',
        description:
          'Finishing menggunakan boiler setrika uap yang aman untuk bahan sensitif serta pilihan parfum tahan lama.',
      },
    ],

    // ------------------------------------------------------------------------
    // 6. ALUR & LANGKAH PENGERJAAN
    // ------------------------------------------------------------------------
    processKicker: 'Alur Layanan Praktis',
    processTitle: 'Tinggal Duduk Manis, Cucian Beres Tepat Waktu.',
    processLead:
      'Empat langkah terstruktur dari penjemputan hingga pengantaran kembali ke alamat Anda.',
    processSteps: [
      {
        title: 'Hitung Estimasi & Konfirmasi Form',
        description:
          'Pilih jenis layanan kiloan, kecepatan pengerjaan, dan isi alamat penjemputan melalui kalkulator di atas.',
      },
      {
        title: 'Kurir Jemput Maksimal 30 Menit',
        description:
          'Kurir outlet terdekat datang menjemput cucian dan melakukan penimbangan transparan di tempat.',
      },
      {
        title: 'Proses Cuci 1 Mesin 1 Pelanggan',
        description:
          'Dicuci dengan deterjen antibakteri ramah serat kain, dikeringkan optimal, dan disetrika uap secara teliti.',
      },
      {
        title: 'Pengantaran Rapi & Pembayaran Mudah',
        description:
          'Cucian diantar dalam kemasan rapi dan wangi. Pembayaran praktis via QRIS, transfer bank, atau tunai.',
      },
    ],
    facilityCaptionTitle: '10+ Tahun Pengalaman Operasional',
    facilityCaptionSub: 'Melayani kebutuhan harian rumah tangga, apartemen, hingga korporat',

    // ------------------------------------------------------------------------
    // 7. DAFTAR LAYANAN & TARIF KILOAN
    // Anda bisa menambah, mengurangi, atau mengganti tarif layanan kiloan di sini.
    // ------------------------------------------------------------------------
    pricingTitle: 'Daftar Tarif & Kalkulator Kiloan',
    calcTitle: 'Kalkulator Harga Kiloan & Pesan WhatsApp',
    services: [
      {
        id: 'cuci-kering-gosok',
        name: 'Cuci Kering Gosok',
        description: 'Cuci higienis, pengeringan optimal, setrika uap rapi, dan parfum tahan lama.',
        pricePerKg: 8000,
        minKg: 1,
      },
      {
        id: 'cuci-kering-lipat',
        name: 'Cuci Kering Lipat',
        description: 'Cocok untuk pakaian santai dan kaos harian, dilipat rapi siap masuk lemari.',
        pricePerKg: 6000,
        minKg: 1,
      },
      {
        id: 'setrika-uap-kiloan',
        name: 'Setrika Uap Kiloan',
        description: 'Penyetrikaan uap lembut untuk pakaian yang sudah dicuci agar bebas kusut.',
        pricePerKg: 5500,
        minKg: 1,
      },
      {
        id: 'bedcover-sprei-kiloan',
        name: 'Cuci Sprei & Selimut Kiloan',
        description: 'Perawatan khusus sprei, sarung bantal, dan selimut dengan deterjen antibakteri.',
        pricePerKg: 11000,
        minKg: 2,
      },
    ],

    // ------------------------------------------------------------------------
    // 8. OPSI KECEPATAN & DURASI PENGERJAAN
    // extraPerKg adalah biaya tambahan per kilogram untuk layanan yang lebih cepat.
    // ------------------------------------------------------------------------
    speeds: [
      { id: 'reguler', name: 'Reguler', eta: '3 Hari', extraPerKg: 0 },
      { id: 'oneday', name: 'One Day', eta: '24 Jam', extraPerKg: 2000 },
      { id: 'express', name: 'Express', eta: '6 Jam', extraPerKg: 4000 },
      { id: 'quick', name: 'Quick', eta: '3 Jam', extraPerKg: 6000 },
    ],

    // ------------------------------------------------------------------------
    // 9. PROMO VOUCHER & DISKON
    // promoEnabled: true (aktif) atau false (non-aktif)
    // ------------------------------------------------------------------------
    promoEnabled: true,
    promoText: 'Promo Pelanggan Baru: Diskon 10% untuk semua layanan kiloan dengan kode voucher',
    promoCode: 'CHINGU10',
    promoDiscountPercent: 10,
    promoCardTitle: 'Hemat 10% untuk Order Pertama Anda',
    promoCardDesc:
      'Gunakan kode voucher aktif pada kalkulator di bawah untuk mendapatkan potongan langsung pada total biaya cuci kiloan.',

    // ------------------------------------------------------------------------
    // 10. BIAYA PENGIRIMAN & AROMA PARFUM
    // ------------------------------------------------------------------------
    pickupFee: 0, // 0 = Gratis Antar-Jemput
    fragrances: ['Sakura Bloom', 'Fresh Cotton', 'Ocean Breeze', 'Tanpa Parfum'],

    // ------------------------------------------------------------------------
    // 11. CABANG OUTLET RESMI
    // Anda bisa menambah, mengubah, atau menghapus lokasi cabang di bawah ini.
    // ------------------------------------------------------------------------
    outletsKicker: 'Jaringan Cabang Resmi',
    outletsTitle: 'Temukan Outlet Terdekat',
    outlets: [
      {
        id: 'bandung-kosambi',
        city: 'Bandung',
        name: 'Chingu Laundry Kosambi',
        address: 'Jl. Baranang Siang No. 59, Kota Bandung',
      },
      {
        id: 'bandung-cihampelas',
        city: 'Bandung',
        name: 'Chingu Laundry Cihampelas',
        address: 'Jl. Boscha No. 12, Cihampelas, Kota Bandung',
      },
      {
        id: 'bandung-dago',
        city: 'Bandung',
        name: 'Chingu Laundry Dago',
        address: 'Jl. Ir. H. Juanda No. 184, Dago, Kota Bandung',
      },
      {
        id: 'jakarta-lebak-bulus',
        city: 'Jakarta',
        name: 'Chingu Laundry Lebak Bulus',
        address: 'Jl. Karang Tengah Raya No. 28, Jakarta Selatan',
      },
      {
        id: 'jakarta-pondok-kelapa',
        city: 'Jakarta',
        name: 'Chingu Laundry Pondok Kelapa',
        address: 'Jl. Pondok Kelapa Raya Blok F2 No. 9, Jakarta Timur',
      },
      {
        id: 'jakarta-tebet',
        city: 'Jakarta',
        name: 'Chingu Laundry Tebet',
        address: 'Jl. Tebet Barat Dalam Raya No. 41, Jakarta Selatan',
      },
      {
        id: 'bekasi-jatibening',
        city: 'Bekasi',
        name: 'Chingu Laundry Jatibening',
        address: 'Jl. Caman Raya No. 72, Jatibening, Bekasi',
      },
      {
        id: 'semarang-majapahit',
        city: 'Semarang',
        name: 'Chingu Laundry Majapahit',
        address: 'Jl. Brigjen Sudiarto No. 115, Semarang',
      },
    ],

    // ------------------------------------------------------------------------
    // 12. TESTIMONI & ULASAN PELANGGAN
    // rating: 1 sampai 5
    // ------------------------------------------------------------------------
    testimonialsKicker: 'Kepercayaan Pelanggan',
    testimonialsTitle: 'Pengalaman Pelanggan Setia Kami',
    testimonials: [
      {
        id: 'testi-1',
        name: 'Inggit Chairun',
        role: 'Content Creator · Bandung',
        rating: 5,
        quote:
          'Pengerjaan sangat cepat, lipatan rapi, dan aromanya tahan lama. Konsep satu mesin satu pelanggan membuat saya tenang mencuci pakaian kerja setiap minggu.',
      },
      {
        id: 'testi-2',
        name: 'Radya Ananta Vikrama',
        role: 'Karyawan Swasta · Jakarta Selatan',
        rating: 5,
        quote:
          'Sangat terbantu dengan paket Express dan layanan antar-jemputnya. Estimasi biaya di kalkulator transparan dan respon admin WhatsApp sangat sigap.',
      },
      {
        id: 'testi-3',
        name: 'Salsabila Septia Gunawan',
        role: 'Mahasiswi · Dago Bandung',
        rating: 5,
        quote:
          'Harga kiloan sangat bersahabat untuk mahasiswa, pakaian halus tidak pernah melar karena disetrika uap, dan selalu selesai sesuai jam yang dijanjikan.',
      },
    ],

    // ------------------------------------------------------------------------
    // 13. TANYA JAWAB (FAQ)
    // ------------------------------------------------------------------------
    faqKicker: 'Informasi Umum',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
      {
        id: 'faq-1',
        question: 'Berapa minimal berat pemesanan laundry kiloan?',
        answer:
          'Pemesanan laundry kiloan dapat dimulai dari 1 kg dengan perhitungan berat aktual yang ditimbang langsung oleh kurir atau petugas outlet menggunakan timbangan digital terkalibrasi.',
      },
      {
        id: 'faq-2',
        question: 'Apakah cucian saya digabung dengan pakaian pelanggan lain?',
        answer:
          'Tidak pernah. Kami menerapkan standar operasional 1 mesin cuci dan 1 mesin pengering khusus untuk 1 pelanggan demi menjaga kebersihan higienis dan mencegah pakaian tertukar.',
      },
      {
        id: 'faq-3',
        question: 'Bagaimana cara kerja layanan antar-jemput 30 menit?',
        answer:
          'Setelah Anda mengisi kalkulator dan mengirim konfirmasi pesanan ke WhatsApp admin, kurir outlet terdekat akan menuju lokasi penjemputan dalam estimasi waktu maksimal 30 menit pada jam operasional.',
      },
      {
        id: 'faq-4',
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer:
          'Anda dapat membayar secara cashless melalui QRIS (GoPay, OVO, DANA, ShopeePay, BCA, Mandiri, dan seluruh aplikasi perbankan), transfer bank, maupun tunai saat penjemputan atau pengantaran.',
      },
    ],

    // ------------------------------------------------------------------------
    // 14. KEMITRAAN BISNIS & FOOTER
    // ------------------------------------------------------------------------
    partnershipTitle: 'Kemitraan & Kontrak Perusahaan',
    partnershipDesc:
      'Melayani kebutuhan laundry kiloan rutin untuk kantor, klinik, hotel, asrama, dan institusi pendidikan dengan tarif kontrak khusus.',
    footerDesc:
      'Layanan laundry kiloan dan satuan express yang mengutamakan kebersihan higienis, kerapian setrika uap, dan ketepatan waktu antar-jemput.',
    footerClosingNote: 'Gamsahamnida · Terima kasih telah mempercayai kami',
    adminPin: '123456',
  };

  /* Firebase Configuration (dari pengguna: web-wedding-4d4ce) */
  var FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDmLSvUrOw0U_aLNkctFMKKo5AavJCHYc4',
    authDomain: 'web-wedding-4d4ce.firebaseapp.com',
    projectId: 'web-wedding-4d4ce',
    storageBucket: 'web-wedding-4d4ce.firebasestorage.app',
    messagingSenderId: '904409888717',
    appId: '1:904409888717:web:bc5ec2d626e82be4067684',
    measurementId: 'G-XNFMW594BJ',
  };

  /* Expose configuration globally so external scripts or tests can inspect it */
  root.LAUNDRY_CONFIG = LAUNDRY_CONFIG;
  root.FIREBASE_CONFIG = FIREBASE_CONFIG;

  /* ========================================================================
     Pure Helper & Calculation Functions (Framework-Free & Unit-Tested)
     ======================================================================== */

  function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function slugify(text, fallbackPrefix, index) {
    var str = String(text || '').trim().toLowerCase();
    var clean = str.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return clean || (fallbackPrefix + '-' + ((index || 0) + 1));
  }

  function normalizeWhatsAppNumber(phone) {
    var digits = String(phone || '').replace(/\D/g, '');
    if (!digits) return LAUNDRY_CONFIG.whatsappNumber;
    if (digits.indexOf('0') === 0) return '62' + digits.slice(1);
    if (digits.indexOf('8') === 0) return '62' + digits;
    return digits;
  }

  function formatDisplayPhone(phone) {
    var norm = normalizeWhatsAppNumber(phone);
    if (norm.indexOf('62') === 0) {
      var local = '0' + norm.slice(2);
      return local.replace(/(\d{4})(\d{4})(\d+)/, '$1-$2-$3');
    }
    return norm;
  }

  function formatRupiah(amount) {
    var num = Math.round(Number(amount) || 0);
    var formatted = Math.abs(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (num < 0 ? '-Rp ' : 'Rp ') + formatted;
  }

  function mergeConfigWithDefaults(raw) {
    var base = cloneDeep(LAUNDRY_CONFIG);
    if (!raw || typeof raw !== 'object') return base;

    var stringKeys = [
      'brandName',
      'whatsappNumber',
      'operationalHours',
      'copyrightYear',
      'copyrightBrand',
      'adminPin',
      'heroEyebrow',
      'heroTitle',
      'heroSubtitle',
      'heroCtaText',
      'heroCaptionTitle',
      'heroCaptionSub',
      'featuresKicker',
      'featuresTitle',
      'featuresLead',
      'pricingTitle',
      'calcTitle',
      'promoText',
      'promoCode',
      'promoCardTitle',
      'promoCardDesc',
      'processKicker',
      'processTitle',
      'processLead',
      'facilityCaptionTitle',
      'facilityCaptionSub',
      'outletsKicker',
      'outletsTitle',
      'partnershipTitle',
      'partnershipDesc',
      'testimonialsKicker',
      'testimonialsTitle',
      'faqKicker',
      'faqTitle',
      'footerDesc',
      'footerClosingNote',
    ];

    stringKeys.forEach(function (key) {
      if (typeof raw[key] === 'string' && raw[key].trim() !== '') {
        base[key] = raw[key].trim();
      }
    });

    base.whatsappNumber = normalizeWhatsAppNumber(base.whatsappNumber);

    if (typeof raw.promoEnabled === 'boolean') {
      base.promoEnabled = raw.promoEnabled;
    }

    if (typeof raw.promoDiscountPercent === 'number' && !isNaN(raw.promoDiscountPercent)) {
      base.promoDiscountPercent = Math.max(0, Math.min(90, raw.promoDiscountPercent));
    }

    if (typeof raw.pickupFee === 'number' && !isNaN(raw.pickupFee)) {
      base.pickupFee = Math.max(0, raw.pickupFee);
    }

    if (Array.isArray(raw.heroMetrics) && raw.heroMetrics.length > 0) {
      base.heroMetrics = raw.heroMetrics
        .filter(Boolean)
        .map(function (m, idx) {
          return {
            value: typeof m.value === 'string' && m.value.trim() ? m.value.trim() : '0' + (idx + 1),
            label: typeof m.label === 'string' && m.label.trim() ? m.label.trim() : 'Layanan Unggulan',
          };
        });
    }

    if (Array.isArray(raw.marqueeItems) && raw.marqueeItems.length > 0) {
      var cleanMarquee = raw.marqueeItems
        .map(function (t) {
          return String(t || '').trim();
        })
        .filter(Boolean);
      if (cleanMarquee.length > 0) base.marqueeItems = cleanMarquee;
    }

    if (Array.isArray(raw.features) && raw.features.length > 0) {
      var cleanFeatures = raw.features
        .filter(function (f) {
          return f && typeof f.title === 'string' && f.title.trim() !== '';
        })
        .map(function (f, idx) {
          return {
            id: f.id || 'fitur-' + (idx + 1),
            title: f.title.trim(),
            description:
              typeof f.description === 'string' && f.description.trim()
                ? f.description.trim()
                : 'Layanan laundry higienis standar Chingu Laundry.',
          };
        });
      if (cleanFeatures.length > 0) base.features = cleanFeatures;
    }

    if (Array.isArray(raw.fragrances) && raw.fragrances.length > 0) {
      var cleanFragrances = raw.fragrances
        .map(function (f) {
          return String(f || '').trim();
        })
        .filter(Boolean);
      if (cleanFragrances.length > 0) base.fragrances = cleanFragrances;
    }

    if (Array.isArray(raw.services) && raw.services.length > 0) {
      var cleanServices = raw.services
        .filter(function (s) {
          return s && typeof s.name === 'string' && s.name.trim() !== '';
        })
        .map(function (s, idx) {
          var name = String(s.name).trim();
          return {
            id: s.id || slugify(name, 'layanan', idx),
            name: name,
            description:
              typeof s.description === 'string' && s.description.trim() !== ''
                ? s.description.trim()
                : 'Layanan cuci higienis 1 mesin 1 pelanggan.',
            pricePerKg: Math.max(1000, Number(s.pricePerKg) || 7000),
            minKg: Math.max(1, Number(s.minKg) || 1),
          };
        });
      if (cleanServices.length > 0) base.services = cleanServices;
    }

    if (Array.isArray(raw.speeds) && raw.speeds.length > 0) {
      base.speeds = raw.speeds.map(function (sp, idx) {
        var name = sp && sp.name ? String(sp.name).trim() : 'Kecepatan ' + (idx + 1);
        return {
          id: (sp && sp.id) || slugify(name, 'speed', idx),
          name: name,
          eta: sp && sp.eta ? String(sp.eta).trim() : 'Tepat Waktu',
          extraPerKg: Math.max(0, Number(sp && sp.extraPerKg) || 0),
        };
      });
    }

    if (Array.isArray(raw.processSteps) && raw.processSteps.length > 0) {
      var cleanSteps = raw.processSteps
        .filter(function (st) {
          return st && typeof st.title === 'string' && st.title.trim() !== '';
        })
        .map(function (st) {
          return {
            title: st.title.trim(),
            description:
              typeof st.description === 'string' && st.description.trim()
                ? st.description.trim()
                : 'Proses cuci dan pengantaran tepat waktu.',
          };
        });
      if (cleanSteps.length > 0) base.processSteps = cleanSteps;
    }

    if (Array.isArray(raw.outlets) && raw.outlets.length > 0) {
      var cleanOutlets = raw.outlets
        .filter(function (o) {
          return o && typeof o.name === 'string' && o.name.trim() !== '';
        })
        .map(function (o, idx) {
          return {
            id: o.id || 'outlet-' + (idx + 1),
            city: typeof o.city === 'string' && o.city.trim() ? o.city.trim() : 'Bandung',
            name: o.name.trim(),
            address:
              typeof o.address === 'string' && o.address.trim()
                ? o.address.trim()
                : 'Alamat cabang resmi Chingu Laundry',
          };
        });
      if (cleanOutlets.length > 0) base.outlets = cleanOutlets;
    }

    if (Array.isArray(raw.testimonials) && raw.testimonials.length > 0) {
      var cleanTestimonials = raw.testimonials
        .filter(function (t) {
          return (
            t &&
            typeof t.name === 'string' &&
            t.name.trim() !== '' &&
            typeof t.quote === 'string' &&
            t.quote.trim() !== ''
          );
        })
        .map(function (t, idx) {
          var parsedRating = parseInt(t.rating, 10);
          var rating = isNaN(parsedRating) ? 5 : Math.max(1, Math.min(5, parsedRating));
          return {
            id: t.id || 'testi-' + (idx + 1),
            name: t.name.trim(),
            role: typeof t.role === 'string' && t.role.trim() ? t.role.trim() : 'Pelanggan Setia',
            rating: rating,
            quote: t.quote.trim(),
          };
        });
      if (cleanTestimonials.length > 0) base.testimonials = cleanTestimonials;
    }

    if (Array.isArray(raw.faqs) && raw.faqs.length > 0) {
      var cleanFaqs = raw.faqs
        .filter(function (q) {
          return q && typeof q.question === 'string' && q.question.trim() !== '';
        })
        .map(function (q, idx) {
          return {
            id: q.id || 'faq-' + (idx + 1),
            question: q.question.trim(),
            answer:
              typeof q.answer === 'string' && q.answer.trim()
                ? q.answer.trim()
                : 'Hubungi admin WhatsApp kami untuk informasi lengkap.',
          };
        });
      if (cleanFaqs.length > 0) base.faqs = cleanFaqs;
    }

    if (raw.images && typeof raw.images === 'object') {
      ['hero', 'promo', 'facility', 'outlet'].forEach(function (slot) {
        if (typeof raw.images[slot] === 'string' && raw.images[slot].trim() !== '') {
          base.images[slot] = raw.images[slot];
        }
      });
    }

    return base;
  }

  function calculateOrderEstimate(params) {
    var config = params.config || LAUNDRY_CONFIG;
    var service =
      config.services.find(function (s) {
        return s.id === params.serviceId;
      }) || config.services[0];

    var speed =
      config.speeds.find(function (sp) {
        return sp.id === params.speedId;
      }) || config.speeds[0];

    var rawWeight = Number(params.weight);
    var validWeight = !isNaN(rawWeight) && rawWeight > 0 ? rawWeight : service.minKg;
    var billableWeight = Math.max(service.minKg, validWeight);

    var ratePerKg = service.pricePerKg + speed.extraPerKg;
    var laundrySubtotal = Math.round(billableWeight * ratePerKg);
    var pickupCost = params.pickupMethod === 'courier' ? config.pickupFee : 0;

    var enteredCode = String(params.promoCode || '')
      .trim()
      .toUpperCase();
    var activeCode = String(config.promoCode || '')
      .trim()
      .toUpperCase();
    var promoApplied =
      Boolean(config.promoEnabled) &&
      activeCode !== '' &&
      enteredCode !== '' &&
      enteredCode === activeCode &&
      config.promoDiscountPercent > 0;

    var discountAmount = promoApplied
      ? Math.round((laundrySubtotal * config.promoDiscountPercent) / 100)
      : 0;

    var totalAmount = Math.max(0, laundrySubtotal + pickupCost - discountAmount);

    return {
      service: service,
      speed: speed,
      rawWeight: validWeight,
      billableWeight: billableWeight,
      minApplied: validWeight < service.minKg,
      ratePerKg: ratePerKg,
      laundrySubtotal: laundrySubtotal,
      pickupCost: pickupCost,
      promoApplied: promoApplied,
      discountPercent: promoApplied ? config.promoDiscountPercent : 0,
      discountAmount: discountAmount,
      totalAmount: totalAmount,
    };
  }

  function validateOrderInput(input) {
    var errors = [];
    var name = String(input.customerName || '').trim();
    var phoneDigits = String(input.customerPhone || '').replace(/\D/g, '');
    var outlet = String(input.outlet || '').trim();
    var address = String(input.address || '').trim();
    var weight = Number(input.weight);

    if (name.length < 2) {
      errors.push({ field: 'cust-name', message: 'Nama lengkap wajib diisi (minimal 2 karakter).' });
    }
    if (phoneDigits.length < 9) {
      errors.push({
        field: 'cust-phone',
        message: 'Nomor WhatsApp aktif wajib diisi dengan benar (minimal 9 digit).',
      });
    }
    if (!outlet) {
      errors.push({ field: 'cust-outlet', message: 'Silakan pilih outlet terdekat terlebih dahulu.' });
    }
    if (address.length < 6) {
      errors.push({
        field: 'cust-address',
        message: 'Alamat lengkap penjemputan wajib diisi agar kurir mudah menemukan lokasi.',
      });
    }
    if (isNaN(weight) || weight < 1) {
      errors.push({ field: 'calc-weight', message: 'Berat cucian minimal 1 kg.' });
    }

    return {
      valid: errors.length === 0,
      errors: errors,
    };
  }

  function buildWhatsAppMessage(orderData, estimate, config) {
    var brand = (config && config.brandName) || LAUNDRY_CONFIG.brandName;
    var customerName = String(orderData.customerName || '').trim() || '[Nama Pelanggan]';
    var customerPhone = String(orderData.customerPhone || '').trim() || '[Nomor WhatsApp]';
    var outletName = String(orderData.outlet || '').trim() || '[Pilih Outlet]';
    var address = String(orderData.address || '').trim() || '[Alamat Penjemputan]';
    var pickupLabel =
      orderData.pickupMethod === 'self' ? 'Antar & Ambil Sendiri ke Outlet' : 'Antar-Jemput Kurir';
    var fragrance = orderData.fragrance || 'Sakura Bloom';
    var notes = String(orderData.notes || '').trim();

    var lines = [
      '*KONFIRMASI PESANAN - ' + brand.toUpperCase() + '*',
      '----------------------------------------',
      '*Nama Pelanggan:* ' + customerName,
      '*No. WhatsApp:* ' + customerPhone,
      '*Outlet Tujuan:* ' + outletName,
      '*Alamat Penjemputan:* ' + address,
      '----------------------------------------',
      '*Jenis Layanan:* ' + estimate.service.name,
      '*Kecepatan:* ' + estimate.speed.name + ' (' + estimate.speed.eta + ')',
      '*Total Berat:* ' + estimate.billableWeight + ' kg',
      '*Tarif per Kg:* ' + formatRupiah(estimate.ratePerKg) + '/kg',
      '*Metode Pengambilan:* ' + pickupLabel,
      '*Aroma Parfum:* ' + fragrance,
    ];

    if (estimate.promoApplied) {
      lines.push(
        '*Kode Promo:* ' +
          config.promoCode.toUpperCase() +
          ' (-' +
          formatRupiah(estimate.discountAmount) +
          ')'
      );
    }

    if (notes) {
      lines.push('*Catatan Khusus:* ' + notes);
    }

    lines.push('----------------------------------------');
    lines.push('*ESTIMASI TOTAL HARGA:* ' + formatRupiah(estimate.totalAmount));
    lines.push('');
    lines.push('Mohon konfirmasi jadwal penjemputan cucian saya. Terima kasih.');

    return lines.join('\n');
  }

  function buildWhatsAppUrl(adminPhone, message) {
    var normalized = normalizeWhatsAppNumber(adminPhone);
    return 'https://wa.me/' + normalized + '?text=' + encodeURIComponent(message);
  }

  /* ========================================================================
     Browser Controller & Site Renderers (Pure Vanilla DOM)
     ======================================================================== */

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      var appConfig = (root && root.LAUNDRY_CONFIG) || LAUNDRY_CONFIG;

      var uiState = {
        catalogSpeedId: appConfig.speeds[0].id,
        calcServiceId: appConfig.services[0].id,
        calcSpeedId: appConfig.speeds[0].id,
        outletCityFilter: 'Semua',
        outletSearchQuery: '',
      };

      function byId(id) {
        return document.getElementById(id);
      }

      var FEATURE_ICONS = [
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"></rect><circle cx="12" cy="13" r="5"></circle><line x1="7" y1="6" x2="7.01" y2="6"></line></svg>',
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      ];

      var STAR_SVG =
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';

      var STAR_MUTED_SVG =
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';

      // Resilient image error fallback
      ['img-hero', 'img-promo', 'img-facility', 'img-outlet'].forEach(function (id) {
        var imgEl = byId(id);
        if (!imgEl) return;
        imgEl.addEventListener('error', function () {
          imgEl.style.opacity = '0';
        });
        imgEl.addEventListener('load', function () {
          imgEl.style.opacity = '1';
        });
      });

      /* --------------------------------------------------------------------
         Public Section Renderers
         -------------------------------------------------------------------- */

      function renderHeroAndMarquee() {
        document.title = appConfig.brandName + ' — Layanan Laundry Kiloan & Satuan Higienis';
        byId('brand-wordmark').textContent = appConfig.brandName;
        byId('hero-eyebrow').textContent = appConfig.heroEyebrow;
        byId('hero-title').textContent = appConfig.heroTitle;
        byId('hero-subtitle').textContent = appConfig.heroSubtitle;
        byId('hero-caption-title').textContent = appConfig.heroCaptionTitle;
        byId('hero-caption-sub').textContent = appConfig.heroCaptionSub;

        var ctaSpan = byId('hero-cta-btn').querySelector('span');
        if (ctaSpan) ctaSpan.textContent = appConfig.heroCtaText;

        var metricsContainer = byId('hero-metrics');
        if (metricsContainer) {
          metricsContainer.innerHTML = '';
          appConfig.heroMetrics.forEach(function (m, idx) {
            if (idx > 0) {
              var div = document.createElement('div');
              div.className = 'hero-metric-divider';
              div.setAttribute('aria-hidden', 'true');
              metricsContainer.appendChild(div);
            }
            var item = document.createElement('div');
            item.className = 'hero-metric-item';

            var strong = document.createElement('strong');
            strong.className = 'metric-value';
            strong.textContent = m.value;

            var span = document.createElement('span');
            span.className = 'metric-label';
            span.textContent = m.label;

            item.appendChild(strong);
            item.appendChild(span);
            metricsContainer.appendChild(item);
          });
        }


        // Marquee ticker (duplicated 2x for continuous smooth animation loop)
        var track = byId('marquee-track');
        track.innerHTML = '';
        var repeated = appConfig.marqueeItems.concat(appConfig.marqueeItems);
        repeated.forEach(function (text) {
          var span = document.createElement('span');
          span.className = 'marquee-item';
          span.innerHTML =
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
          span.appendChild(document.createTextNode(' ' + text));
          track.appendChild(span);
        });

        // Promo banner bar & showcase card
        byId('promo-banner-bar').hidden = !appConfig.promoEnabled;
        byId('promo-banner-text').textContent = appConfig.promoText;
        byId('promo-code-label').textContent = appConfig.promoCode;
        byId('promo-card-heading').textContent = appConfig.promoCardTitle;
        byId('promo-card-desc').textContent = appConfig.promoCardDesc;

        // Images
        byId('img-hero').src = appConfig.images.hero;
        byId('img-promo').src = appConfig.images.promo;
        byId('img-facility').src = appConfig.images.facility;
        byId('img-outlet').src = appConfig.images.outlet;

        // Operational hours & Footer
        byId('display-operational-hours').textContent = appConfig.operationalHours;
        byId('footer-brand-name').textContent = appConfig.brandName;
        byId('footer-desc').textContent = appConfig.footerDesc;
        byId('footer-closing-note').textContent = appConfig.footerClosingNote;
        byId('copyright-brand').textContent = appConfig.copyrightBrand || (appConfig.brandName + ' Express');
        byId('footer-hours').textContent = 'Buka ' + appConfig.operationalHours;

        var normWa = normalizeWhatsAppNumber(appConfig.whatsappNumber);
        var displayWa = formatDisplayPhone(normWa);
        byId('footer-wa-number').textContent = displayWa;
        byId('footer-wa-link').href = 'https://wa.me/' + normWa;
        byId('wa-target-display').textContent = 'WA: ' + displayWa;
        byId('floating-wa-btn').href =
          'https://wa.me/' +
          normWa +
          '?text=' +
          encodeURIComponent(
            'Halo ' + appConfig.brandName + ', saya ingin bertanya tentang layanan laundry.'
          );
      }

      function renderFeaturesAndProcess() {
        byId('features-kicker').textContent = appConfig.featuresKicker;
        byId('features-title').textContent = appConfig.featuresTitle;
        byId('features-lead').textContent = appConfig.featuresLead;

        var fGrid = byId('features-grid');
        fGrid.innerHTML = '';
        appConfig.features.forEach(function (feat, idx) {
          var card = document.createElement('article');
          card.className = 'feature-card';

          var top = document.createElement('div');
          top.className = 'feature-top';

          var num = document.createElement('span');
          num.className = 'feature-num';
          num.textContent = idx + 1 < 10 ? '0' + (idx + 1) : String(idx + 1);

          var iconBox = document.createElement('span');
          iconBox.className = 'feature-icon-box';
          iconBox.setAttribute('aria-hidden', 'true');
          iconBox.innerHTML = FEATURE_ICONS[idx % FEATURE_ICONS.length];

          top.appendChild(num);
          top.appendChild(iconBox);

          var h3 = document.createElement('h3');
          h3.className = 'feature-title';
          h3.textContent = feat.title;

          var p = document.createElement('p');
          p.className = 'feature-desc';
          p.textContent = feat.description;

          card.appendChild(top);
          card.appendChild(h3);
          card.appendChild(p);
          fGrid.appendChild(card);
        });

        // Process section & partnership card
        byId('process-kicker').textContent = appConfig.processKicker;
        byId('process-title').textContent = appConfig.processTitle;
        byId('process-lead').textContent = appConfig.processLead;

        var pList = byId('process-list');
        pList.innerHTML = '';
        appConfig.processSteps.forEach(function (step, idx) {
          var li = document.createElement('li');
          li.className = 'process-step';

          var badge = document.createElement('span');
          badge.className = 'step-badge mono-num';
          badge.textContent = idx + 1 < 10 ? '0' + (idx + 1) : String(idx + 1);

          var body = document.createElement('div');
          var h3 = document.createElement('h3');
          h3.className = 'step-title';
          h3.textContent = step.title;

          var p = document.createElement('p');
          p.className = 'step-desc';
          p.textContent = step.description;

          body.appendChild(h3);
          body.appendChild(p);
          li.appendChild(badge);
          li.appendChild(body);
          pList.appendChild(li);
        });

        byId('facility-caption-title').textContent = appConfig.facilityCaptionTitle;
        byId('facility-caption-sub').textContent = appConfig.facilityCaptionSub;
        byId('partnership-title').textContent = appConfig.partnershipTitle;
        byId('partnership-desc').textContent = appConfig.partnershipDesc;
      }

      function renderCatalogSection() {
        byId('pricing-title').textContent = appConfig.pricingTitle;
        byId('calc-title').textContent = appConfig.calcTitle;

        var elSpeedTabs = byId('catalog-speed-tabs');
        elSpeedTabs.innerHTML = '';
        appConfig.speeds.forEach(function (sp) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'seg-btn' + (sp.id === uiState.catalogSpeedId ? ' is-active' : '');
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-selected', sp.id === uiState.catalogSpeedId ? 'true' : 'false');
          btn.textContent = sp.name + ' · ' + sp.eta;
          btn.addEventListener('click', function () {
            uiState.catalogSpeedId = sp.id;
            uiState.calcSpeedId = sp.id;
            renderCatalogSection();
            renderCalculatorSpeedButtons();
            updateCalculationAndPreview();
          });
          elSpeedTabs.appendChild(btn);
        });

        var activeSpeed =
          appConfig.speeds.find(function (s) {
            return s.id === uiState.catalogSpeedId;
          }) || appConfig.speeds[0];

        var elList = byId('catalog-services-list');
        elList.innerHTML = '';
        appConfig.services.forEach(function (srv) {
          var isSelected = srv.id === uiState.calcServiceId;
          var effectiveRate = srv.pricePerKg + activeSpeed.extraPerKg;

          var card = document.createElement('article');
          card.className = 'rate-card' + (isSelected ? ' is-selected' : '');

          var head = document.createElement('div');
          head.className = 'rate-card-head';

          var title = document.createElement('h3');
          title.className = 'rate-card-title';
          title.textContent = srv.name;

          var price = document.createElement('span');
          price.className = 'rate-card-price';
          price.textContent = formatRupiah(effectiveRate) + '/kg';

          head.appendChild(title);
          head.appendChild(price);

          var desc = document.createElement('p');
          desc.className = 'rate-card-desc';
          desc.textContent = srv.description;

          var footer = document.createElement('div');
          footer.className = 'rate-card-footer';

          var minNote = document.createElement('span');
          minNote.className = 'rate-min-note';
          minNote.textContent = 'Minimal ' + srv.minKg + ' kg · ' + activeSpeed.eta;

          var chooseBtn = document.createElement('button');
          chooseBtn.type = 'button';
          chooseBtn.className = isSelected ? 'btn btn-primary btn-sm' : 'btn btn-outline-dark btn-sm';
          chooseBtn.textContent = isSelected ? 'Dipilih di Kalkulator' : 'Pilih Layanan';
          chooseBtn.addEventListener('click', function () {
            uiState.calcServiceId = srv.id;
            uiState.calcSpeedId = activeSpeed.id;
            byId('calc-service').value = srv.id;
            renderCatalogSection();
            renderCalculatorSpeedButtons();
            updateCalculationAndPreview();
            var calcSection = byId('kalkulator-pesan');
            if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          footer.appendChild(minNote);
          footer.appendChild(chooseBtn);

          card.appendChild(head);
          card.appendChild(desc);
          card.appendChild(footer);
          elList.appendChild(card);
        });
      }

      function renderCalculatorSelectors() {
        var elCalcService = byId('calc-service');
        var prevService = uiState.calcServiceId;
        elCalcService.innerHTML = '';
        appConfig.services.forEach(function (srv) {
          var opt = document.createElement('option');
          opt.value = srv.id;
          opt.textContent = srv.name + ' (' + formatRupiah(srv.pricePerKg) + '/kg)';
          elCalcService.appendChild(opt);
        });

        var exists = appConfig.services.some(function (s) {
          return s.id === prevService;
        });
        uiState.calcServiceId = exists ? prevService : appConfig.services[0].id;
        elCalcService.value = uiState.calcServiceId;

        // Populate Fragrance select dynamically
        var elFragrance = byId('calc-fragrance');
        var prevFrag = elFragrance.value;
        elFragrance.innerHTML = '';
        appConfig.fragrances.forEach(function (frag) {
          var opt = document.createElement('option');
          opt.value = frag;
          opt.textContent = frag;
          elFragrance.appendChild(opt);
        });
        if (prevFrag && appConfig.fragrances.indexOf(prevFrag) !== -1) {
          elFragrance.value = prevFrag;
        }

        // Populate Outlet select dynamically
        var elCustOutlet = byId('cust-outlet');
        var prevOutlet = elCustOutlet.value;
        elCustOutlet.innerHTML = '<option value="">-- Pilih Outlet Terdekat --</option>';
        appConfig.outlets.forEach(function (out) {
          var opt = document.createElement('option');
          opt.value = out.name + ' (' + out.city + ')';
          opt.textContent = out.name + ' — ' + out.city;
          elCustOutlet.appendChild(opt);
        });
        if (prevOutlet) {
          elCustOutlet.value = prevOutlet;
        }

        renderCalculatorSpeedButtons();
      }

      function renderCalculatorSpeedButtons() {
        var elContainer = byId('calc-speed-options');
        elContainer.innerHTML = '';
        appConfig.speeds.forEach(function (sp) {
          var isSelected = sp.id === uiState.calcSpeedId;
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'speed-option-btn' + (isSelected ? ' is-selected' : '');
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');

          var nameSpan = document.createElement('span');
          nameSpan.className = 'speed-opt-name';
          nameSpan.textContent = sp.name;

          var etaSpan = document.createElement('span');
          etaSpan.className = 'speed-opt-eta';
          etaSpan.textContent = 'Selesai ' + sp.eta;

          var extraSpan = document.createElement('span');
          extraSpan.className = 'speed-opt-extra';
          extraSpan.textContent =
            sp.extraPerKg > 0 ? '+' + formatRupiah(sp.extraPerKg) + '/kg' : 'Tarif Dasar';

          btn.appendChild(nameSpan);
          btn.appendChild(etaSpan);
          btn.appendChild(extraSpan);

          btn.addEventListener('click', function () {
            uiState.calcSpeedId = sp.id;
            uiState.catalogSpeedId = sp.id;
            renderCalculatorSpeedButtons();
            renderCatalogSection();
            updateCalculationAndPreview();
          });

          elContainer.appendChild(btn);
        });
      }

      function updateCalculationAndPreview() {
        var elWeight = byId('calc-weight');
        var weightVal = parseFloat(elWeight.value);
        if (isNaN(weightVal) || weightVal < 1) weightVal = 1;

        document.querySelectorAll('.preset-btn').forEach(function (pBtn) {
          var targetW = parseFloat(pBtn.getAttribute('data-weight'));
          pBtn.classList.toggle('is-active', targetW === weightVal);
        });

        var estimate = calculateOrderEstimate({
          config: appConfig,
          serviceId: uiState.calcServiceId,
          speedId: uiState.calcSpeedId,
          weight: weightVal,
          pickupMethod: byId('calc-pickup').value,
          promoCode: byId('calc-promo-code').value,
        });

        byId('sum-service-name').textContent = estimate.service.name;
        byId('sum-speed-name').textContent = estimate.speed.name + ' (' + estimate.speed.eta + ')';
        byId('sum-rate-per-kg').textContent = formatRupiah(estimate.ratePerKg) + '/kg';
        byId('sum-weight').textContent =
          estimate.billableWeight +
          ' kg' +
          (estimate.minApplied ? ' (Min. ' + estimate.service.minKg + ' kg)' : '');
        byId('sum-subtotal').textContent = formatRupiah(estimate.laundrySubtotal);
        byId('sum-pickup-fee').textContent =
          estimate.pickupCost > 0 ? formatRupiah(estimate.pickupCost) : 'Gratis';

        var discountRow = byId('sum-discount-row');
        if (estimate.promoApplied) {
          discountRow.hidden = false;
          byId('sum-discount-label').textContent = estimate.discountPercent + '%';
          byId('sum-discount-amount').textContent = '-' + formatRupiah(estimate.discountAmount);
        } else {
          discountRow.hidden = true;
        }

        byId('calc-total-price').textContent = formatRupiah(estimate.totalAmount);

        var orderData = {
          customerName: byId('cust-name').value,
          customerPhone: byId('cust-phone').value,
          outlet: byId('cust-outlet').value,
          address: byId('cust-address').value,
          pickupMethod: byId('calc-pickup').value,
          fragrance: byId('calc-fragrance').value,
          notes: byId('cust-notes').value,
        };

        var msg = buildWhatsAppMessage(orderData, estimate, appConfig);
        byId('wa-message-preview').textContent = msg;

        return { estimate: estimate, message: msg, orderData: orderData };
      }

      function renderOutletsSection() {
        byId('outlets-kicker').textContent = appConfig.outletsKicker;
        byId('outlets-title').textContent = appConfig.outletsTitle;

        // Build unique cities list dynamically
        var cities = ['Semua'];
        appConfig.outlets.forEach(function (out) {
          if (out.city && cities.indexOf(out.city) === -1) {
            cities.push(out.city);
          }
        });
        if (cities.indexOf(uiState.outletCityFilter) === -1) {
          uiState.outletCityFilter = 'Semua';
        }

        var filterBar = byId('outlet-city-filters');
        filterBar.innerHTML = '';
        cities.forEach(function (cityName) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'seg-btn' + (uiState.outletCityFilter === cityName ? ' is-active' : '');
          btn.setAttribute('data-city', cityName);
          btn.textContent = cityName;
          btn.addEventListener('click', function () {
            uiState.outletCityFilter = cityName;
            renderOutletsSection();
          });
          filterBar.appendChild(btn);
        });

        var city = uiState.outletCityFilter;
        var q = uiState.outletSearchQuery.trim().toLowerCase();
        var filtered = appConfig.outlets.filter(function (out) {
          var matchCity = city === 'Semua' || out.city === city;
          var matchQuery =
            q === '' ||
            out.name.toLowerCase().indexOf(q) !== -1 ||
            out.address.toLowerCase().indexOf(q) !== -1 ||
            out.city.toLowerCase().indexOf(q) !== -1;
          return matchCity && matchQuery;
        });

        var elList = byId('outlets-list');
        elList.innerHTML = '';
        if (filtered.length === 0) {
          var empty = document.createElement('div');
          empty.className = 'outlet-empty-state';
          empty.textContent = 'Tidak ditemukan outlet yang sesuai dengan pencarian Anda.';
          elList.appendChild(empty);
          return;
        }

        filtered.forEach(function (out) {
          var card = document.createElement('article');
          card.className = 'outlet-card';

          var top = document.createElement('div');
          var cityEl = document.createElement('span');
          cityEl.className = 'outlet-city-label';
          cityEl.textContent = out.city;

          var nameEl = document.createElement('h3');
          nameEl.className = 'outlet-name';
          nameEl.textContent = out.name;

          var addrEl = document.createElement('p');
          addrEl.className = 'outlet-address';
          addrEl.textContent = out.address;

          top.appendChild(cityEl);
          top.appendChild(nameEl);
          top.appendChild(addrEl);

          var selectBtn = document.createElement('button');
          selectBtn.type = 'button';
          selectBtn.className = 'btn btn-outline-dark btn-sm';
          selectBtn.textContent = 'Pesan di Outlet Ini';
          selectBtn.addEventListener('click', function () {
            byId('cust-outlet').value = out.name + ' (' + out.city + ')';
            updateCalculationAndPreview();
            var calcSection = byId('kalkulator-pesan');
            if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          card.appendChild(top);
          card.appendChild(selectBtn);
          elList.appendChild(card);
        });
      }

      function renderTestimonialsAndFaqs() {
        byId('testimonials-kicker').textContent = appConfig.testimonialsKicker;
        byId('testimonials-title').textContent = appConfig.testimonialsTitle;

        var tGrid = byId('testimonials-grid');
        tGrid.innerHTML = '';
        appConfig.testimonials.forEach(function (item) {
          var figure = document.createElement('figure');
          figure.className = 'testimonial-card';

          var stars = document.createElement('div');
          stars.className = 'star-row';
          stars.setAttribute('aria-label', 'Rating ' + item.rating + ' dari 5');
          var starsHtml = '';
          for (var i = 1; i <= 5; i++) {
            starsHtml += i <= item.rating ? STAR_SVG : STAR_MUTED_SVG;
          }
          stars.innerHTML = starsHtml;

          var quote = document.createElement('blockquote');
          quote.className = 'testimonial-quote';
          quote.textContent = item.quote;

          var caption = document.createElement('figcaption');
          caption.className = 'testimonial-author';
          var strong = document.createElement('strong');
          strong.textContent = item.name;
          var span = document.createElement('span');
          span.textContent = item.role;
          caption.appendChild(strong);
          caption.appendChild(span);

          figure.appendChild(stars);
          figure.appendChild(quote);
          figure.appendChild(caption);
          tGrid.appendChild(figure);
        });

        byId('faq-kicker').textContent = appConfig.faqKicker;
        byId('faq-title').textContent = appConfig.faqTitle;

        var fList = byId('faq-list');
        fList.innerHTML = '';
        appConfig.faqs.forEach(function (faq, idx) {
          var details = document.createElement('details');
          details.className = 'faq-item';
          if (idx === 0) details.setAttribute('open', '');

          var summary = document.createElement('summary');
          summary.className = 'faq-question';
          var qSpan = document.createElement('span');
          qSpan.textContent = faq.question;
          summary.appendChild(qSpan);
          summary.insertAdjacentHTML(
            'beforeend',
            '<svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'
          );

          var ansDiv = document.createElement('div');
          ansDiv.className = 'faq-answer';
          var ansP = document.createElement('p');
          ansP.textContent = faq.answer;
          ansDiv.appendChild(ansP);

          details.appendChild(summary);
          details.appendChild(ansDiv);
          fList.appendChild(details);
        });
      }

      function renderEntireSite() {
        renderHeroAndMarquee();
        renderFeaturesAndProcess();
        renderCatalogSection();
        renderCalculatorSelectors();
        renderOutletsSection();
        renderTestimonialsAndFaqs();
        updateCalculationAndPreview();
      }

      /* --------------------------------------------------------------------
         Calculator & Order Form Event Handlers
         -------------------------------------------------------------------- */

      byId('calc-service').addEventListener('change', function () {
        uiState.calcServiceId = byId('calc-service').value;
        renderCatalogSection();
        updateCalculationAndPreview();
      });

      byId('weight-decrease-btn').addEventListener('click', function () {
        var current = parseFloat(byId('calc-weight').value) || 3;
        byId('calc-weight').value = Math.max(1, Math.round((current - 0.5) * 10) / 10);
        updateCalculationAndPreview();
      });

      byId('weight-increase-btn').addEventListener('click', function () {
        var current = parseFloat(byId('calc-weight').value) || 3;
        byId('calc-weight').value = Math.min(200, Math.round((current + 0.5) * 10) / 10);
        updateCalculationAndPreview();
      });

      document.querySelectorAll('.preset-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          byId('calc-weight').value = btn.getAttribute('data-weight');
          updateCalculationAndPreview();
        });
      });

      function applyPromoCodeHandler(codeOverride) {
        var input = byId('calc-promo-code');
        var feedback = byId('promo-feedback-msg');
        if (typeof codeOverride === 'string') {
          input.value = codeOverride;
        }
        var entered = input.value.trim().toUpperCase();
        var active = String(appConfig.promoCode || '')
          .trim()
          .toUpperCase();

        feedback.classList.remove('is-success', 'is-error');
        if (!entered) {
          feedback.textContent = '';
          updateCalculationAndPreview();
          return;
        }

        if (appConfig.promoEnabled && active && entered === active) {
          feedback.textContent =
            'Kode ' + active + ' diterapkan (Diskon ' + appConfig.promoDiscountPercent + '%).';
          feedback.classList.add('is-success');
        } else {
          feedback.textContent = 'Kode promo tidak ditemukan atau sedang tidak aktif.';
          feedback.classList.add('is-error');
        }
        updateCalculationAndPreview();
      }

      byId('apply-promo-btn').addEventListener('click', function () {
        applyPromoCodeHandler();
      });

      [byId('promo-code-chip'), byId('apply-featured-promo-btn')].forEach(function (btn) {
        if (!btn) return;
        btn.addEventListener('click', function () {
          applyPromoCodeHandler(appConfig.promoCode);
          var calcSection = byId('kalkulator-pesan');
          if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      [
        'calc-weight',
        'calc-pickup',
        'calc-fragrance',
        'calc-promo-code',
        'cust-name',
        'cust-phone',
        'cust-outlet',
        'cust-address',
        'cust-notes',
      ].forEach(function (id) {
        var el = byId(id);
        if (!el) return;
        el.addEventListener('input', function () {
          el.classList.remove('is-invalid');
          updateCalculationAndPreview();
        });
        el.addEventListener('change', function () {
          el.classList.remove('is-invalid');
          updateCalculationAndPreview();
        });
      });

      byId('laundry-order-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var errBanner = byId('order-error-banner');
        var confCard = byId('order-confirmation-card');

        var validation = validateOrderInput({
          customerName: byId('cust-name').value,
          customerPhone: byId('cust-phone').value,
          outlet: byId('cust-outlet').value,
          address: byId('cust-address').value,
          weight: byId('calc-weight').value,
        });

        ['cust-name', 'cust-phone', 'cust-outlet', 'cust-address', 'calc-weight'].forEach(
          function (id) {
            var el = byId(id);
            if (el) el.classList.remove('is-invalid');
          }
        );

        if (!validation.valid) {
          confCard.hidden = true;
          errBanner.hidden = false;
          errBanner.textContent = validation.errors[0].message;

          validation.errors.forEach(function (err) {
            var target = byId(err.field);
            if (target) target.classList.add('is-invalid');
          });

          var firstField = byId(validation.errors[0].field);
          if (firstField) firstField.focus();
          return;
        }

        errBanner.hidden = true;
        var result = updateCalculationAndPreview();
        var waUrl = buildWhatsAppUrl(appConfig.whatsappNumber, result.message);

        byId('confirmed-order-code').textContent = 'Ref: #CL-' + String(Date.now()).slice(-5);
        byId('confirmed-order-summary').textContent =
          result.orderData.customerName.trim() +
          ' · ' +
          result.estimate.service.name +
          ' (' +
          result.estimate.speed.name +
          ', ' +
          result.estimate.billableWeight +
          ' kg) — Total ' +
          formatRupiah(result.estimate.totalAmount);

        var waLink = byId('direct-wa-link');
        waLink.href = waUrl;
        confCard.setAttribute('data-wa-url', waUrl);
        confCard.hidden = false;

        if (typeof navigator !== 'undefined' && !navigator.webdriver) {
          waLink.click();
        }
      });

      byId('copy-order-btn').addEventListener('click', function () {
        var copyBtn = byId('copy-order-btn');
        var text = byId('wa-message-preview').textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () {
              copyBtn.textContent = 'Teks Pesanan Tersalin';
              setTimeout(function () {
                copyBtn.textContent = 'Salin Teks Pesanan';
              }, 2200);
            },
            function () {
              copyBtn.textContent = 'Gunakan Tombol WhatsApp di Atas';
            }
          );
        } else {
          copyBtn.textContent = 'Gunakan Tombol WhatsApp di Atas';
        }
      });

      byId('outlet-search-input').addEventListener('input', function () {
        uiState.outletSearchQuery = byId('outlet-search-input').value;
        renderOutletsSection();
      });

      var mobileToggle = byId('mobile-menu-toggle');
      var mobileDrawer = byId('mobile-nav-drawer');
      if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', function () {
          var isHidden = mobileDrawer.hidden;
          mobileDrawer.hidden = !isHidden;
          mobileToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });

        mobileDrawer.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', function () {
            mobileDrawer.hidden = true;
            mobileToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }

      /* ====================================================================
         FIREBASE REAL-TIME CLOUD SYNCHRONIZATION (web-wedding-4d4ce)
         ==================================================================== */
      var firestoreDb = null;

      function updateAdminBadge(status, text) {
        var badge = byId('firebase-sync-badge');
        if (!badge) return;
        badge.className = 'sync-badge ' + (status === 'online' ? 'sync-online' : 'sync-saving');
        badge.textContent = text;
      }

      function initFirebaseCloudSync() {
        if (typeof firebase === 'undefined' || !firebase.initializeApp) {
          updateAdminBadge('offline', 'Firebase: Offline (Mode Lokal)');
          return;
        }

        try {
          if (!firebase.apps || !firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
          }
          firestoreDb = firebase.firestore();

          // Realtime listener multi-perangkat via onSnapshot
          firestoreDb
            .collection('dex_laundry_cms')
            .doc('active_config')
            .onSnapshot(
              function (docSnap) {
                if (docSnap.exists) {
                  var remoteData = docSnap.data();
                  if (remoteData && typeof remoteData === 'object') {
                    appConfig = mergeConfigWithDefaults(remoteData);
                    renderEntireSite();
                    updateAdminBadge('online', 'Firebase Cloud: Terhubung & Realtime');
                  }
                } else {
                  // Dokumen awal belum ada di Firebase, simpan konfigurasi dasar sebagai master
                  firestoreDb
                    .collection('dex_laundry_cms')
                    .doc('active_config')
                    .set(cloneDeep(appConfig), { merge: true })
                    .catch(function (e) {
                      console.warn('Firestore initial write notice:', e);
                    });
                }
              },
              function (err) {
                console.warn('Firestore realtime sync notice:', err);
                updateAdminBadge('offline', 'Firebase: Mode Lokal');
              }
            );
        } catch (err) {
          console.warn('Firebase init error:', err);
          updateAdminBadge('offline', 'Firebase: Mode Lokal');
        }
      }

      /* ====================================================================
         SECRET ADMIN CONTROLLER (Tersembunyi dari Publik & Dilindungi PIN)
         ==================================================================== */
      var secretPinModal = byId('secret-pin-modal');
      var secretAdminModal = byId('secret-admin-modal');

      function openPinModal() {
        if (!secretPinModal) return;
        var pinInput = byId('admin-pin-input');
        var errEl = byId('pin-error-msg');
        if (pinInput) pinInput.value = '';
        if (errEl) errEl.textContent = '';
        secretPinModal.hidden = false;
        setTimeout(function () {
          if (pinInput) pinInput.focus();
        }, 100);
      }

      function closePinModal() {
        if (!secretPinModal) return;
        secretPinModal.hidden = true;
      }

      function closeAdminModal() {
        if (!secretAdminModal) return;
        secretAdminModal.hidden = true;
      }

      // 1. Shortcut Keyboard: Ctrl + Shift + A (atau Cmd + Shift + A)
      window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
          e.preventDefault();
          if (secretAdminModal && !secretAdminModal.hidden) {
            closeAdminModal();
          } else if (secretPinModal && !secretPinModal.hidden) {
            closePinModal();
          } else {
            openPinModal();
          }
        }
      });

      // 2. Secret Triple Click Trigger pada teks copyright footer (Mobile / Touch Friendly)
      var triggerEl = document.querySelector('.secret-admin-trigger');
      var clickCount = 0;
      var clickTimeout = null;
      if (triggerEl) {
        triggerEl.addEventListener('click', function () {
          clickCount++;
          clearTimeout(clickTimeout);
          if (clickCount >= 3) {
            clickCount = 0;
            openPinModal();
          } else {
            clickTimeout = setTimeout(function () {
              clickCount = 0;
            }, 800);
          }
        });
      }

      // 3. Form Login PIN
      var pinForm = byId('pin-auth-form');
      if (pinForm) {
        pinForm.addEventListener('submit', function (e) {
          e.preventDefault();
          var enteredPin = (byId('admin-pin-input').value || '').trim();
          var correctPin = String(appConfig.adminPin || '123456').trim();

          if (enteredPin === correctPin) {
            closePinModal();
            openAdminModal();
          } else {
            var errEl = byId('pin-error-msg');
            if (errEl) errEl.textContent = 'PIN keamanan salah, silakan coba lagi.';
            byId('admin-pin-input').value = '';
            byId('admin-pin-input').focus();
          }
        });
      }

      if (byId('pin-cancel-btn')) {
        byId('pin-cancel-btn').addEventListener('click', closePinModal);
      }
      if (byId('admin-close-x-btn')) {
        byId('admin-close-x-btn').addEventListener('click', closeAdminModal);
      }
      if (byId('admin-discard-btn')) {
        byId('admin-discard-btn').addEventListener('click', closeAdminModal);
      }

      // 4. Tab Navigation inside Admin Panel
      document.querySelectorAll('.admin-tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetTabId = btn.getAttribute('data-tab');
          document.querySelectorAll('.admin-tab-btn').forEach(function (b) {
            b.classList.remove('is-active');
          });
          document.querySelectorAll('.admin-tab-pane').forEach(function (pane) {
            pane.classList.remove('is-active');
          });

          btn.classList.add('is-active');
          var targetPane = byId(targetTabId);
          if (targetPane) targetPane.classList.add('is-active');
        });
      });

      // 5. Image Compression & Local Upload Handler (Offscreen Canvas ke Base64)
      function handleImageUpload(file, inputTargetId, previewImgId) {
        if (!file || !file.type.match(/^image\//)) return;
        var reader = new FileReader();
        reader.onload = function (event) {
          var img = new Image();
          img.onload = function () {
            var canvas = document.createElement('canvas');
            var maxDim = 1200;
            var w = img.width;
            var h = img.height;
            if (w > maxDim || h > maxDim) {
              if (w > h) {
                h = Math.round((h * maxDim) / w);
                w = maxDim;
              } else {
                w = Math.round((w * maxDim) / h);
                h = maxDim;
              }
            }
            canvas.width = w;
            canvas.height = h;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            var dataUrl = canvas.toDataURL('image/jpeg', 0.85);

            var inp = byId(inputTargetId);
            var prev = byId(previewImgId);
            if (inp) inp.value = dataUrl;
            if (prev) prev.src = dataUrl;
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }

      ['hero', 'promo', 'facility', 'outlet'].forEach(function (slot) {
        var fileInp = byId('adm-file-' + slot);
        if (fileInp) {
          fileInp.addEventListener('change', function (e) {
            if (e.target.files && e.target.files[0]) {
              handleImageUpload(e.target.files[0], 'adm-img-' + slot, 'preview-img-' + slot);
            }
          });
        }
        var textInp = byId('adm-img-' + slot);
        if (textInp) {
          textInp.addEventListener('input', function () {
            var prev = byId('preview-img-' + slot);
            if (prev) prev.src = textInp.value;
          });
        }
      });

      // 6. Dynamic Card List Editors (Services, Outlets, Testimonials, FAQs)
      var workingServices = [];
      var workingOutlets = [];
      var workingTestimonials = [];
      var workingFaqs = [];

      function renderAdminServicesList() {
        var listEl = byId('adm-services-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        workingServices.forEach(function (srv, idx) {
          var card = document.createElement('div');
          card.className = 'admin-item-card';

          var header = document.createElement('div');
          header.className = 'admin-item-card-header';
          header.innerHTML =
            '<span class="admin-item-card-title">Layanan #' +
            (idx + 1) +
            '</span>' +
            '<button type="button" class="admin-btn-delete" data-idx="' +
            idx +
            '">Hapus Layanan</button>';

          var body = document.createElement('div');
          body.className = 'admin-form-grid';
          body.innerHTML =
            '<div>' +
            '<label class="admin-field-label">Nama Layanan</label>' +
            '<input type="text" class="admin-input adm-srv-name" value="' +
            (srv.name || '') +
            '" />' +
            '</div>' +
            '<div>' +
            '<label class="admin-field-label">Tarif per Kg (Rp)</label>' +
            '<input type="number" class="admin-input adm-srv-price" value="' +
            (srv.pricePerKg || 8000) +
            '" min="1000" step="500" />' +
            '</div>' +
            '<div>' +
            '<label class="admin-field-label">Minimal Order (Kg)</label>' +
            '<input type="number" class="admin-input adm-srv-minkg" value="' +
            (srv.minKg || 1) +
            '" min="1" max="50" />' +
            '</div>' +
            '<div class="admin-field-full">' +
            '<label class="admin-field-label">Deskripsi Layanan</label>' +
            '<textarea class="admin-textarea adm-srv-desc" rows="2">' +
            (srv.description || '') +
            '</textarea>' +
            '</div>';

          header.querySelector('.admin-btn-delete').addEventListener('click', function () {
            if (workingServices.length <= 1) {
              alert('Minimal harus ada 1 layanan kiloan.');
              return;
            }
            workingServices.splice(idx, 1);
            renderAdminServicesList();
          });

          card.appendChild(header);
          card.appendChild(body);
          listEl.appendChild(card);
        });
      }

      function renderAdminOutletsList() {
        var listEl = byId('adm-outlets-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        workingOutlets.forEach(function (out, idx) {
          var card = document.createElement('div');
          card.className = 'admin-item-card';

          var header = document.createElement('div');
          header.className = 'admin-item-card-header';
          header.innerHTML =
            '<span class="admin-item-card-title">Cabang #' +
            (idx + 1) +
            '</span>' +
            '<button type="button" class="admin-btn-delete" data-idx="' +
            idx +
            '">Hapus Cabang</button>';

          var body = document.createElement('div');
          body.className = 'admin-form-grid';
          body.innerHTML =
            '<div>' +
            '<label class="admin-field-label">Nama Kota / Wilayah</label>' +
            '<input type="text" class="admin-input adm-out-city" value="' +
            (out.city || '') +
            '" placeholder="Bandung / Jakarta / dll" />' +
            '</div>' +
            '<div>' +
            '<label class="admin-field-label">Nama Outlet</label>' +
            '<input type="text" class="admin-input adm-out-name" value="' +
            (out.name || '') +
            '" placeholder="dex Laundry Dago" />' +
            '</div>' +
            '<div class="admin-field-full">' +
            '<label class="admin-field-label">Alamat Lengkap</label>' +
            '<input type="text" class="admin-input adm-out-address" value="' +
            (out.address || '') +
            '" placeholder="Jl. Raya No. 12" />' +
            '</div>';

          header.querySelector('.admin-btn-delete').addEventListener('click', function () {
            if (workingOutlets.length <= 1) {
              alert('Minimal harus ada 1 cabang outlet.');
              return;
            }
            workingOutlets.splice(idx, 1);
            renderAdminOutletsList();
          });

          card.appendChild(header);
          card.appendChild(body);
          listEl.appendChild(card);
        });
      }

      function renderAdminTestimonialsList() {
        var listEl = byId('adm-testimonials-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        workingTestimonials.forEach(function (t, idx) {
          var card = document.createElement('div');
          card.className = 'admin-item-card';

          var header = document.createElement('div');
          header.className = 'admin-item-card-header';
          header.innerHTML =
            '<span class="admin-item-card-title">Ulasan #' +
            (idx + 1) +
            '</span>' +
            '<button type="button" class="admin-btn-delete" data-idx="' +
            idx +
            '">Hapus Ulasan</button>';

          var body = document.createElement('div');
          body.className = 'admin-form-grid';
          body.innerHTML =
            '<div>' +
            '<label class="admin-field-label">Nama Pelanggan</label>' +
            '<input type="text" class="admin-input adm-testi-name" value="' +
            (t.name || '') +
            '" />' +
            '</div>' +
            '<div>' +
            '<label class="admin-field-label">Profesi / Domisili</label>' +
            '<input type="text" class="admin-input adm-testi-role" value="' +
            (t.role || '') +
            '" />' +
            '</div>' +
            '<div>' +
            '<label class="admin-field-label">Rating Bintang</label>' +
            '<select class="admin-select adm-testi-rating">' +
            '<option value="5"' +
            (t.rating === 5 ? ' selected' : '') +
            '>⭐⭐⭐⭐⭐ (5 Bintang)</option>' +
            '<option value="4"' +
            (t.rating === 4 ? ' selected' : '') +
            '>⭐⭐⭐⭐ (4 Bintang)</option>' +
            '<option value="3"' +
            (t.rating === 3 ? ' selected' : '') +
            '>⭐⭐⭐ (3 Bintang)</option>' +
            '</select>' +
            '</div>' +
            '<div class="admin-field-full">' +
            '<label class="admin-field-label">Isi Kutipan Ulasan</label>' +
            '<textarea class="admin-textarea adm-testi-quote" rows="2">' +
            (t.quote || '') +
            '</textarea>' +
            '</div>';

          header.querySelector('.admin-btn-delete').addEventListener('click', function () {
            if (workingTestimonials.length <= 1) {
              alert('Minimal harus ada 1 testimoni.');
              return;
            }
            workingTestimonials.splice(idx, 1);
            renderAdminTestimonialsList();
          });

          card.appendChild(header);
          card.appendChild(body);
          listEl.appendChild(card);
        });
      }

      function renderAdminFaqsList() {
        var listEl = byId('adm-faqs-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        workingFaqs.forEach(function (faq, idx) {
          var card = document.createElement('div');
          card.className = 'admin-item-card';

          var header = document.createElement('div');
          header.className = 'admin-item-card-header';
          header.innerHTML =
            '<span class="admin-item-card-title">Tanya Jawab #' +
            (idx + 1) +
            '</span>' +
            '<button type="button" class="admin-btn-delete" data-idx="' +
            idx +
            '">Hapus FAQ</button>';

          var body = document.createElement('div');
          body.className = 'admin-form-grid';
          body.innerHTML =
            '<div class="admin-field-full">' +
            '<label class="admin-field-label">Pertanyaan</label>' +
            '<input type="text" class="admin-input adm-faq-question" value="' +
            (faq.question || '') +
            '" />' +
            '</div>' +
            '<div class="admin-field-full">' +
            '<label class="admin-field-label">Jawaban</label>' +
            '<textarea class="admin-textarea adm-faq-answer" rows="2">' +
            (faq.answer || '') +
            '</textarea>' +
            '</div>';

          header.querySelector('.admin-btn-delete').addEventListener('click', function () {
            if (workingFaqs.length <= 1) {
              alert('Minimal harus ada 1 pertanyaan FAQ.');
              return;
            }
            workingFaqs.splice(idx, 1);
            renderAdminFaqsList();
          });

          card.appendChild(header);
          card.appendChild(body);
          listEl.appendChild(card);
        });
      }

      // Add item triggers
      if (byId('adm-add-service-btn')) {
        byId('adm-add-service-btn').addEventListener('click', function () {
          workingServices.push({
            id: 'layanan-' + Date.now(),
            name: 'Layanan Tambahan',
            description: 'Cuci bersih, higienis 1 mesin 1 pelanggan.',
            pricePerKg: 8500,
            minKg: 1,
          });
          renderAdminServicesList();
        });
      }

      if (byId('adm-add-outlet-btn')) {
        byId('adm-add-outlet-btn').addEventListener('click', function () {
          workingOutlets.push({
            id: 'outlet-' + Date.now(),
            city: 'Bandung',
            name: 'Cabang Baru',
            address: 'Jl. Utama Baru No. 10',
          });
          renderAdminOutletsList();
        });
      }

      if (byId('adm-add-testimonial-btn')) {
        byId('adm-add-testimonial-btn').addEventListener('click', function () {
          workingTestimonials.push({
            id: 'testi-' + Date.now(),
            name: 'Pelanggan Puas',
            role: 'Pelanggan Setia',
            rating: 5,
            quote: 'Cucian selalu bersih, tepat waktu, dan wanginya segar.',
          });
          renderAdminTestimonialsList();
        });
      }

      if (byId('adm-add-faq-btn')) {
        byId('adm-add-faq-btn').addEventListener('click', function () {
          workingFaqs.push({
            id: 'faq-' + Date.now(),
            question: 'Pertanyaan baru mengenai layanan?',
            answer: 'Jawaban detail mengenai prosedur dan keunggulan layanan laundry kami.',
          });
          renderAdminFaqsList();
        });
      }

      // 7. Render Features & Process Editor Lists
      function renderAdminFeaturesAndProcess() {
        var fList = byId('adm-features-list');
        if (fList && appConfig.features) {
          fList.innerHTML = '';
          appConfig.features.forEach(function (feat, idx) {
            var card = document.createElement('div');
            card.className = 'admin-item-card';
            card.innerHTML =
              '<div class="admin-item-card-header"><span class="admin-item-card-title">Pilar Keunggulan #' +
              (idx + 1) +
              '</span></div>' +
              '<div class="admin-form-grid">' +
              '<div><label class="admin-field-label">Judul Keunggulan</label><input type="text" class="admin-input adm-feat-title" value="' +
              (feat.title || '') +
              '" /></div>' +
              '<div class="admin-field-full"><label class="admin-field-label">Deskripsi</label><textarea class="admin-textarea adm-feat-desc" rows="2">' +
              (feat.description || '') +
              '</textarea></div>' +
              '</div>';
            fList.appendChild(card);
          });
        }

        var pList = byId('adm-process-list');
        if (pList && appConfig.processSteps) {
          pList.innerHTML = '';
          appConfig.processSteps.forEach(function (step, idx) {
            var card = document.createElement('div');
            card.className = 'admin-item-card';
            card.innerHTML =
              '<div class="admin-item-card-header"><span class="admin-item-card-title">Langkah #' +
              (idx + 1) +
              '</span></div>' +
              '<div class="admin-form-grid">' +
              '<div><label class="admin-field-label">Judul Langkah</label><input type="text" class="admin-input adm-step-title" value="' +
              (step.title || '') +
              '" /></div>' +
              '<div class="admin-field-full"><label class="admin-field-label">Deskripsi</label><textarea class="admin-textarea adm-step-desc" rows="2">' +
              (step.description || '') +
              '</textarea></div>' +
              '</div>';
            pList.appendChild(card);
          });
        }

        var spList = byId('adm-speeds-list');
        if (spList && appConfig.speeds) {
          spList.innerHTML = '';
          appConfig.speeds.forEach(function (sp, idx) {
            var card = document.createElement('div');
            card.className = 'admin-item-card';
            card.innerHTML =
              '<div class="admin-item-card-header"><span class="admin-item-card-title">Paket: ' +
              (sp.name || 'Kecepatan') +
              '</span></div>' +
              '<div class="admin-form-grid">' +
              '<div><label class="admin-field-label">Nama Kecepatan</label><input type="text" class="admin-input adm-sp-name" value="' +
              (sp.name || '') +
              '" /></div>' +
              '<div><label class="admin-field-label">Durasi Selesai (ETA)</label><input type="text" class="admin-input adm-sp-eta" value="' +
              (sp.eta || '') +
              '" placeholder="3 Hari / 24 Jam / 6 Jam" /></div>' +
              '<div><label class="admin-field-label">Biaya Tambahan per Kg (Rp)</label><input type="number" class="admin-input adm-sp-extra" value="' +
              (sp.extraPerKg || 0) +
              '" min="0" step="500" /></div>' +
              '</div>';
            spList.appendChild(card);
          });
        }
      }

      // 8. Open Admin Modal & Populate Data
      function openAdminModal() {
        if (!secretAdminModal) return;
        secretAdminModal.hidden = false;

        // Reset to first tab
        var firstTab = document.querySelector('.admin-tab-btn[data-tab="tab-brand"]');
        if (firstTab) firstTab.click();

        // 1. Brand
        if (byId('adm-brand-name')) byId('adm-brand-name').value = appConfig.brandName;
        if (byId('adm-wa-number')) byId('adm-wa-number').value = appConfig.whatsappNumber;
        if (byId('adm-operational-hours')) byId('adm-operational-hours').value = appConfig.operationalHours;
        if (byId('adm-copyright-brand'))
          byId('adm-copyright-brand').value = appConfig.copyrightBrand || appConfig.brandName + ' Express';
        if (byId('adm-footer-desc')) byId('adm-footer-desc').value = appConfig.footerDesc || '';

        // 2. Hero
        if (byId('adm-hero-eyebrow')) byId('adm-hero-eyebrow').value = appConfig.heroEyebrow || '';
        if (byId('adm-hero-title')) byId('adm-hero-title').value = appConfig.heroTitle || '';
        if (byId('adm-hero-subtitle')) byId('adm-hero-subtitle').value = appConfig.heroSubtitle || '';
        if (byId('adm-hero-cta')) byId('adm-hero-cta').value = appConfig.heroCtaText || '';
        if (byId('adm-hero-caption-title'))
          byId('adm-hero-caption-title').value = appConfig.heroCaptionTitle || '';

        [0, 1, 2].forEach(function (idx) {
          var m = (appConfig.heroMetrics && appConfig.heroMetrics[idx]) || {};
          if (byId('adm-metric-val-' + idx)) byId('adm-metric-val-' + idx).value = m.value || '';
          if (byId('adm-metric-lbl-' + idx)) byId('adm-metric-lbl-' + idx).value = m.label || '';
        });

        // 3. Promo
        if (byId('adm-promo-enabled'))
          byId('adm-promo-enabled').value = appConfig.promoEnabled ? 'true' : 'false';
        if (byId('adm-promo-code')) byId('adm-promo-code').value = appConfig.promoCode || '';
        if (byId('adm-promo-discount'))
          byId('adm-promo-discount').value = appConfig.promoDiscountPercent || 10;
        if (byId('adm-promo-card-title'))
          byId('adm-promo-card-title').value = appConfig.promoCardTitle || '';
        if (byId('adm-promo-text')) byId('adm-promo-text').value = appConfig.promoText || '';
        if (byId('adm-promo-card-desc'))
          byId('adm-promo-card-desc').value = appConfig.promoCardDesc || '';

        // 4. Features & Process
        if (byId('adm-features-kicker')) byId('adm-features-kicker').value = appConfig.featuresKicker || '';
        if (byId('adm-features-title')) byId('adm-features-title').value = appConfig.featuresTitle || '';
        if (byId('adm-features-lead')) byId('adm-features-lead').value = appConfig.featuresLead || '';

        if (byId('adm-process-kicker')) byId('adm-process-kicker').value = appConfig.processKicker || '';
        if (byId('adm-process-title')) byId('adm-process-title').value = appConfig.processTitle || '';
        if (byId('adm-process-lead')) byId('adm-process-lead').value = appConfig.processLead || '';

        renderAdminFeaturesAndProcess();

        // 5. Fragrances
        if (byId('adm-fragrances-text')) {
          byId('adm-fragrances-text').value = appConfig.fragrances
            ? appConfig.fragrances.join(', ')
            : 'Sakura Bloom, Fresh Cotton, Ocean Breeze, Tanpa Parfum';
        }

        // 6. Testimonials kicker & title
        if (byId('adm-testi-kicker'))
          byId('adm-testi-kicker').value = appConfig.testimonialsKicker || 'Kepercayaan Pelanggan';
        if (byId('adm-testi-title'))
          byId('adm-testi-title').value = appConfig.testimonialsTitle || 'Pengalaman Pelanggan Setia Kami';

        // 7. FAQs kicker & title
        if (byId('adm-faq-kicker')) byId('adm-faq-kicker').value = appConfig.faqKicker || 'Informasi Umum';
        if (byId('adm-faq-title'))
          byId('adm-faq-title').value = appConfig.faqTitle || 'Pertanyaan yang Sering Diajukan';

        // 8. Dynamic list clones
        workingServices = cloneDeep(appConfig.services || []);
        workingOutlets = cloneDeep(appConfig.outlets || []);
        workingTestimonials = cloneDeep(appConfig.testimonials || []);
        workingFaqs = cloneDeep(appConfig.faqs || []);

        renderAdminServicesList();
        renderAdminOutletsList();
        renderAdminTestimonialsList();
        renderAdminFaqsList();

        // 9. Images
        ['hero', 'promo', 'facility', 'outlet'].forEach(function (slot) {
          var val = (appConfig.images && appConfig.images[slot]) || '';
          if (byId('adm-img-' + slot)) byId('adm-img-' + slot).value = val;
          if (byId('preview-img-' + slot)) byId('preview-img-' + slot).src = val;
        });

        // 10. Security PIN
        if (byId('adm-security-pin'))
          byId('adm-security-pin').value = appConfig.adminPin || '123456';
      }

      // 9. Save All Changes to Cloud Firestore
      if (byId('admin-save-cloud-btn')) {
        byId('admin-save-cloud-btn').addEventListener('click', function () {
          var saveBtn = byId('admin-save-cloud-btn');
          var statusText = byId('admin-save-status');
          saveBtn.disabled = true;
          updateAdminBadge('saving', 'Menyimpan...');
          if (statusText) statusText.textContent = 'Menyimpan perubahan ke Firebase Cloud...';

          // Kumpulkan data brand
          var newConfig = cloneDeep(appConfig);
          newConfig.brandName = byId('adm-brand-name').value.trim() || 'dex Laundry';
          newConfig.whatsappNumber = byId('adm-wa-number').value.trim() || '6282276328839';
          newConfig.operationalHours = byId('adm-operational-hours').value.trim();
          newConfig.copyrightBrand = byId('adm-copyright-brand').value.trim();
          newConfig.footerDesc = byId('adm-footer-desc').value.trim();

          // Hero
          newConfig.heroEyebrow = byId('adm-hero-eyebrow').value.trim();
          newConfig.heroTitle = byId('adm-hero-title').value.trim();
          newConfig.heroSubtitle = byId('adm-hero-subtitle').value.trim();
          newConfig.heroCtaText = byId('adm-hero-cta').value.trim();
          newConfig.heroCaptionTitle = byId('adm-hero-caption-title').value.trim();

          newConfig.heroMetrics = [0, 1, 2].map(function (idx) {
            return {
              value: (byId('adm-metric-val-' + idx).value || '').trim(),
              label: (byId('adm-metric-lbl-' + idx).value || '').trim(),
            };
          });

          // Promo
          newConfig.promoEnabled = byId('adm-promo-enabled').value === 'true';
          newConfig.promoCode = byId('adm-promo-code').value.trim().toUpperCase();
          newConfig.promoDiscountPercent = parseInt(byId('adm-promo-discount').value, 10) || 10;
          newConfig.promoCardTitle = byId('adm-promo-card-title').value.trim();
          newConfig.promoText = byId('adm-promo-text').value.trim();
          newConfig.promoCardDesc = byId('adm-promo-card-desc').value.trim();

          // Features
          newConfig.featuresKicker = byId('adm-features-kicker').value.trim();
          newConfig.featuresTitle = byId('adm-features-title').value.trim();
          newConfig.featuresLead = byId('adm-features-lead').value.trim();
          var featCards = document.querySelectorAll('#adm-features-list .admin-item-card');
          newConfig.features = Array.prototype.map.call(featCards, function (card, idx) {
            return {
              id: 'fitur-' + (idx + 1),
              title: (card.querySelector('.adm-feat-title').value || '').trim(),
              description: (card.querySelector('.adm-feat-desc').value || '').trim(),
            };
          });

          // Process
          newConfig.processKicker = byId('adm-process-kicker').value.trim();
          newConfig.processTitle = byId('adm-process-title').value.trim();
          newConfig.processLead = byId('adm-process-lead').value.trim();
          var procCards = document.querySelectorAll('#adm-process-list .admin-item-card');
          newConfig.processSteps = Array.prototype.map.call(procCards, function (card) {
            return {
              title: (card.querySelector('.adm-step-title').value || '').trim(),
              description: (card.querySelector('.adm-step-desc').value || '').trim(),
            };
          });

          // Speeds
          var spCards = document.querySelectorAll('#adm-speeds-list .admin-item-card');
          if (spCards.length > 0) {
            newConfig.speeds = Array.prototype.map.call(spCards, function (card, idx) {
              var oldSp = appConfig.speeds[idx] || {};
              return {
                id: oldSp.id || 'speed-' + (idx + 1),
                name: (card.querySelector('.adm-sp-name').value || '').trim(),
                eta: (card.querySelector('.adm-sp-eta').value || '').trim(),
                extraPerKg: parseInt(card.querySelector('.adm-sp-extra').value, 10) || 0,
              };
            });
          }

          // Fragrances
          var fragRaw = byId('adm-fragrances-text').value;
          newConfig.fragrances = fragRaw
            .split(',')
            .map(function (f) {
              return f.trim();
            })
            .filter(Boolean);

          // Services
          var srvCards = document.querySelectorAll('#adm-services-list .admin-item-card');
          newConfig.services = Array.prototype.map.call(srvCards, function (card, idx) {
            var name = (card.querySelector('.adm-srv-name').value || '').trim();
            return {
              id: slugify(name, 'srv', idx),
              name: name,
              pricePerKg: parseInt(card.querySelector('.adm-srv-price').value, 10) || 8000,
              minKg: parseInt(card.querySelector('.adm-srv-minkg').value, 10) || 1,
              description: (card.querySelector('.adm-srv-desc').value || '').trim(),
            };
          });

          // Outlets
          var outCards = document.querySelectorAll('#adm-outlets-list .admin-item-card');
          newConfig.outlets = Array.prototype.map.call(outCards, function (card, idx) {
            var name = (card.querySelector('.adm-out-name').value || '').trim();
            return {
              id: slugify(name, 'out', idx),
              city: (card.querySelector('.adm-out-city').value || '').trim(),
              name: name,
              address: (card.querySelector('.adm-out-address').value || '').trim(),
            };
          });

          // Testimonials
          newConfig.testimonialsKicker = byId('adm-testi-kicker').value.trim();
          newConfig.testimonialsTitle = byId('adm-testi-title').value.trim();
          var testiCards = document.querySelectorAll('#adm-testimonials-list .admin-item-card');
          newConfig.testimonials = Array.prototype.map.call(testiCards, function (card, idx) {
            return {
              id: 'testi-' + (idx + 1),
              name: (card.querySelector('.adm-testi-name').value || '').trim(),
              role: (card.querySelector('.adm-testi-role').value || '').trim(),
              rating: parseInt(card.querySelector('.adm-testi-rating').value, 10) || 5,
              quote: (card.querySelector('.adm-testi-quote').value || '').trim(),
            };
          });

          // FAQs
          newConfig.faqKicker = byId('adm-faq-kicker').value.trim();
          newConfig.faqTitle = byId('adm-faq-title').value.trim();
          var faqCards = document.querySelectorAll('#adm-faqs-list .admin-item-card');
          newConfig.faqs = Array.prototype.map.call(faqCards, function (card, idx) {
            return {
              id: 'faq-' + (idx + 1),
              question: (card.querySelector('.adm-faq-question').value || '').trim(),
              answer: (card.querySelector('.adm-faq-answer').value || '').trim(),
            };
          });

          // Images
          newConfig.images = {
            hero: byId('adm-img-hero').value.trim() || appConfig.images.hero,
            promo: byId('adm-img-promo').value.trim() || appConfig.images.promo,
            facility: byId('adm-img-facility').value.trim() || appConfig.images.facility,
            outlet: byId('adm-img-outlet').value.trim() || appConfig.images.outlet,
          };

          // Security PIN
          var newPin = byId('adm-security-pin').value.trim();
          if (newPin) newConfig.adminPin = newPin;

          // Merge & Validasi
          var merged = mergeConfigWithDefaults(newConfig);
          appConfig = merged;
          renderEntireSite();

          // Simpan ke Cloud Firestore jika terhubung
          if (firestoreDb) {
            firestoreDb
              .collection('dex_laundry_cms')
              .doc('active_config')
              .set(cloneDeep(merged), { merge: true })
              .then(function () {
                saveBtn.disabled = false;
                updateAdminBadge('online', 'Firebase Cloud: Tersimpan!');
                if (statusText) {
                  statusText.textContent =
                    'Perubahan berhasil disimpan ke Cloud Firebase! Semua perangkat yang membuka website langsung tersinkronisasi.';
                }
                setTimeout(function () {
                  closeAdminModal();
                }, 1200);
              })
              .catch(function (err) {
                console.warn('Gagal menyimpan ke Firestore:', err);
                saveBtn.disabled = false;
                updateAdminBadge('offline', 'Gagal Simpan ke Cloud');
                if (statusText) {
                  statusText.textContent =
                    'Perubahan tersimpan lokal. Periksa koneksi internet atau izin Firestore: ' + err.message;
                }
              });
          } else {
            saveBtn.disabled = false;
            updateAdminBadge('offline', 'Tersimpan Lokal');
            if (statusText) {
              statusText.textContent =
                'Perubahan tersimpan di memori browser. (Firebase SDK belum dimuat).';
            }
            setTimeout(function () {
              closeAdminModal();
            }, 1200);
          }
        });
      }

      // 10. Reset to Default
      if (byId('admin-reset-default-btn')) {
        byId('admin-reset-default-btn').addEventListener('click', function () {
          if (confirm('Apakah Anda yakin ingin mengembalikan seluruh isi website ke konfigurasi awal?')) {
            appConfig = cloneDeep(LAUNDRY_CONFIG);
            renderEntireSite();
            if (firestoreDb) {
              firestoreDb
                .collection('dex_laundry_cms')
                .doc('active_config')
                .set(cloneDeep(LAUNDRY_CONFIG))
                .then(function () {
                  alert('Website berhasil dikembalikan ke pengaturan awal dan disinkronkan ke Firebase.');
                  openAdminModal();
                });
            } else {
              openAdminModal();
            }
          }
        });
      }

      // Inisialisasi Sinkronisasi Realtime Cloud Firebase
      initFirebaseCloudSync();

      /* --------------------------------------------------------------------
         Initial Page Render & Lucide Enhancement
         -------------------------------------------------------------------- */
      renderEntireSite();

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });
  }

  var exportedApi = {
    CONFIG: LAUNDRY_CONFIG,
    DEFAULT_CONFIG: LAUNDRY_CONFIG,
    mergeConfigWithDefaults: mergeConfigWithDefaults,
    sanitizeConfig: mergeConfigWithDefaults,
    formatRupiah: formatRupiah,
    normalizeWhatsAppNumber: normalizeWhatsAppNumber,
    formatDisplayPhone: formatDisplayPhone,
    calculateOrderEstimate: calculateOrderEstimate,
    validateOrderInput: validateOrderInput,
    buildWhatsAppMessage: buildWhatsAppMessage,
    buildWhatsAppUrl: buildWhatsAppUrl,
  };

  root.ChinguLaundry = exportedApi;

  /* ========================================================================
     CommonJS Export for Automated Unit Testing (Ignored in Browser)
     ======================================================================== */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportedApi;
  }
})(typeof window !== 'undefined' ? window : globalThis);
