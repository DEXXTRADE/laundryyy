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
    featuresKicker: 'Standar Pelayanan Kami',
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
  };

  /* Expose configuration globally so external scripts or tests can inspect it */
  root.LAUNDRY_CONFIG = LAUNDRY_CONFIG;

  /* ========================================================================
     Pure Helper & Calculation Functions (Framework-Free & Unit-Tested)
     ======================================================================== */

  function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
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
      base.heroMetrics = [0, 1, 2].map(function (idx) {
        var m = raw.heroMetrics[idx] || {};
        var fb = LAUNDRY_CONFIG.heroMetrics[idx];
        return {
          value: typeof m.value === 'string' && m.value.trim() ? m.value.trim() : fb.value,
          label: typeof m.label === 'string' && m.label.trim() ? m.label.trim() : fb.label,
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
          return {
            id: s.id || 'layanan-' + (idx + 1),
            name: String(s.name).trim(),
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
        var fallback = LAUNDRY_CONFIG.speeds[idx] || LAUNDRY_CONFIG.speeds[0];
        return {
          id: sp.id || fallback.id,
          name: sp.name || fallback.name,
          eta: sp.eta || fallback.eta,
          extraPerKg: Math.max(0, Number(sp.extraPerKg) || 0),
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

        appConfig.heroMetrics.forEach(function (m, idx) {
          var vEl = byId('metric-val-' + idx);
          var lEl = byId('metric-lbl-' + idx);
          if (vEl) vEl.textContent = m.value;
          if (lEl) lEl.textContent = m.label;
        });

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
