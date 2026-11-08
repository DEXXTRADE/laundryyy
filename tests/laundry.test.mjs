import test from 'node:test';
import assert from 'node:assert/strict';
import '../script.js';

const {
  CONFIG,
  DEFAULT_CONFIG,
  calculateOrderEstimate,
  formatRupiah,
  normalizeWhatsAppNumber,
  formatDisplayPhone,
  validateOrderInput,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  mergeConfigWithDefaults,
} = globalThis.ChinguLaundry;

test('CONFIG object contains all required configuration sections for client code-only editing', () => {
  const cfg = CONFIG || DEFAULT_CONFIG;
  assert.ok(cfg, 'CONFIG must exist');
  assert.equal(typeof cfg.brandName, 'string');
  assert.equal(typeof cfg.whatsappNumber, 'string');
  assert.ok(Array.isArray(cfg.services));
  assert.ok(cfg.services.length >= 3);
  assert.ok(Array.isArray(cfg.speeds));
  assert.ok(cfg.speeds.length >= 3);
  assert.ok(Array.isArray(cfg.outlets));
  assert.ok(cfg.outlets.length >= 4);
  assert.ok(Array.isArray(cfg.testimonials));
  assert.ok(cfg.testimonials.length >= 3);
  assert.ok(Array.isArray(cfg.faqs));
  assert.ok(cfg.faqs.length >= 3);
  assert.ok(cfg.images && typeof cfg.images.hero === 'string');
});

test('formatRupiah formats Indonesian currency cleanly', () => {
  assert.equal(formatRupiah(24000), 'Rp 24.000');
  assert.equal(formatRupiah(0), 'Rp 0');
  assert.equal(formatRupiah(125500), 'Rp 125.500');
});

test('normalizeWhatsAppNumber normalizes local 08xx and +62 numbers', () => {
  assert.equal(normalizeWhatsAppNumber('0812-3456-7890'), '6281234567890');
  assert.equal(normalizeWhatsAppNumber('+62 811 2008 1012'), '6281120081012');
  assert.equal(normalizeWhatsAppNumber('81399887766'), '6281399887766');
});

test('formatDisplayPhone formats phone for human readability', () => {
  assert.equal(formatDisplayPhone('6281120081012'), '0811-2008-1012');
});

test('calculateOrderEstimate computes kilogram totals, speed surcharges, and promo discounts accurately', () => {
  const regulerEstimate = calculateOrderEstimate({
    config: DEFAULT_CONFIG,
    serviceId: 'cuci-kering-gosok',
    speedId: 'reguler',
    weight: 5,
    pickupMethod: 'courier',
    promoCode: '',
  });
  assert.equal(regulerEstimate.ratePerKg, 8000);
  assert.equal(regulerEstimate.billableWeight, 5);
  assert.equal(regulerEstimate.totalAmount, 40000);

  const expressPromoEstimate = calculateOrderEstimate({
    config: DEFAULT_CONFIG,
    serviceId: 'cuci-kering-gosok',
    speedId: 'express',
    weight: 4,
    pickupMethod: 'courier',
    promoCode: 'chingu10',
  });
  assert.equal(expressPromoEstimate.ratePerKg, 12000);
  assert.equal(expressPromoEstimate.laundrySubtotal, 48000);
  assert.equal(expressPromoEstimate.promoApplied, true);
  assert.equal(expressPromoEstimate.discountAmount, 4800);
  assert.equal(expressPromoEstimate.totalAmount, 43200);
});

test('calculateOrderEstimate enforces minimum weight per service', () => {
  const bedCoverEstimate = calculateOrderEstimate({
    config: DEFAULT_CONFIG,
    serviceId: 'bedcover-sprei-kiloan',
    speedId: 'reguler',
    weight: 1,
    pickupMethod: 'self',
    promoCode: '',
  });
  assert.equal(bedCoverEstimate.minApplied, true);
  assert.equal(bedCoverEstimate.billableWeight, 2);
  assert.equal(bedCoverEstimate.totalAmount, 22000);
});

test('validateOrderInput catches missing required fields and accepts valid customer input', () => {
  const invalid = validateOrderInput({
    customerName: 'A',
    customerPhone: '123',
    outlet: '',
    address: 'Jl',
    weight: 3,
  });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.errors.length, 4);

  const valid = validateOrderInput({
    customerName: 'Nadia Pratama',
    customerPhone: '081234567890',
    outlet: 'Chingu Laundry Kosambi (Bandung)',
    address: 'Jl. Merdeka No. 15, Bandung',
    weight: 4,
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.length, 0);
});

test('buildWhatsAppMessage and buildWhatsAppUrl include customer details and total price', () => {
  const estimate = calculateOrderEstimate({
    config: DEFAULT_CONFIG,
    serviceId: 'cuci-kering-lipat',
    speedId: 'oneday',
    weight: 5,
    pickupMethod: 'courier',
    promoCode: '',
  });
  const msg = buildWhatsAppMessage(
    {
      customerName: 'Budi Santoso',
      customerPhone: '081298765432',
      outlet: 'Chingu Laundry Dago (Bandung)',
      address: 'Jl. Dipatiukur No. 40, Bandung',
      pickupMethod: 'courier',
      fragrance: 'Fresh Cotton',
      notes: 'Jangan pakai pelembut berlebih',
    },
    estimate,
    DEFAULT_CONFIG
  );

  assert.match(msg, /Budi Santoso/);
  assert.match(msg, /Jl\. Dipatiukur No\. 40, Bandung/);
  assert.match(msg, /Cuci Kering Lipat/);
  assert.match(msg, /5 kg/);
  assert.match(msg, /Rp 40\.000/);

  const url = buildWhatsAppUrl('081120081012', msg);
  assert.ok(url.startsWith('https://wa.me/6281120081012?text='));
});

test('mergeConfigWithDefaults preserves structure while applying client overrides', () => {
  const merged = mergeConfigWithDefaults({
    brandName: 'Chingu Fresh Bandung',
    whatsappNumber: '081900001111',
    testimonialsKicker: 'Kata Pelanggan',
    testimonialsTitle: 'Cerita Pelanggan Kami',
    testimonials: [
      {
        id: 'testi-1',
        name: 'Alya Putri',
        role: 'Desainer · Bandung',
        rating: 4,
        quote: 'Sangat cepat dan wangi.',
      },
      {
        id: 'testi-2',
        name: 'Rafi Pratama',
        role: 'Mahasiswa · Jakarta',
        rating: 99,
        quote: 'Setrika uap sangat rapi.',
      },
    ],
    outlets: [
      {
        id: 'yogyakarta-seturan',
        city: 'Yogyakarta',
        name: 'Chingu Laundry Seturan',
        address: 'Jl. Seturan Raya No. 88, Sleman',
      },
    ],
    faqs: [
      {
        id: 'faq-custom',
        question: 'Apakah buka hari Minggu?',
        answer: 'Ya, buka setiap hari pukul 07.00 - 20.00 WIB.',
      },
    ],
    images: {
      hero: 'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
    },
  });

  assert.equal(merged.brandName, 'Chingu Fresh Bandung');
  assert.equal(merged.whatsappNumber, '6281900001111');
  assert.equal(merged.testimonialsKicker, 'Kata Pelanggan');
  assert.equal(merged.testimonialsTitle, 'Cerita Pelanggan Kami');
  assert.equal(merged.testimonials.length, 2);
  assert.equal(merged.testimonials[0].name, 'Alya Putri');
  assert.equal(merged.testimonials[0].rating, 4);
  assert.equal(merged.testimonials[1].rating, 5);
  assert.equal(merged.outlets.length, 1);
  assert.equal(merged.outlets[0].city, 'Yogyakarta');
  assert.equal(merged.faqs.length, 1);
  assert.equal(merged.faqs[0].question, 'Apakah buka hari Minggu?');
  assert.equal(merged.images.hero, 'data:image/jpeg;base64,/9j/4AAQSkZJRg==');
  assert.equal(merged.images.promo, DEFAULT_CONFIG.images.promo);
  assert.equal(merged.services.length, DEFAULT_CONFIG.services.length);
});

test('sanitizeConfig handles user deleting items, omitting IDs, and custom names gracefully', () => {
  const { sanitizeConfig } = globalThis.ChinguLaundry;

  // Simulate user editing script.js without specifying IDs and deleting services down to 1
  const sanitized = sanitizeConfig({
    brandName: 'Laundry Kiloan Berkah',
    whatsappNumber: '0857-1122-3344',
    heroMetrics: [{ value: '500+', label: 'Pelanggan Aktif' }],
    services: [
      {
        name: 'Cuci Saja Murah',
        pricePerKg: 6000,
        // user forgot id and minKg
      },
    ],
    speeds: [
      {
        name: 'Super Kilat',
        eta: '2 Jam',
        extraPerKg: 5000,
      },
    ],
    outlets: [
      {
        name: 'Cabang Pasar Minggu',
        city: 'Jakarta Selatan',
      },
    ],
  });

  assert.equal(sanitized.brandName, 'Laundry Kiloan Berkah');
  assert.equal(sanitized.whatsappNumber, '6285711223344');
  assert.equal(sanitized.heroMetrics.length, 1);
  assert.equal(sanitized.heroMetrics[0].value, '500+');
  assert.equal(sanitized.services.length, 1);
  assert.equal(sanitized.services[0].name, 'Cuci Saja Murah');
  assert.ok(sanitized.services[0].id.includes('cuci-saja-murah'));
  assert.equal(sanitized.services[0].minKg, 1);
  assert.equal(sanitized.services[0].pricePerKg, 6000);
  assert.equal(sanitized.speeds.length, 1);
  assert.equal(sanitized.speeds[0].name, 'Super Kilat');
  assert.ok(sanitized.speeds[0].id.includes('super-kilat'));
  assert.equal(sanitized.outlets.length, 1);
  assert.equal(sanitized.outlets[0].name, 'Cabang Pasar Minggu');
});

test('calculateOrderEstimate succeeds even if selected service was deleted', () => {
  const { sanitizeConfig, calculateOrderEstimate } = globalThis.ChinguLaundry;

  const userCustomConfig = sanitizeConfig({
    services: [{ id: 'layanan-tunggal', name: 'Layanan Tunggal', pricePerKg: 10000, minKg: 2 }],
  });

  // User had old serviceId 'cuci-kering-gosok' stored in state
  const estimate = calculateOrderEstimate({
    config: userCustomConfig,
    serviceId: 'cuci-kering-gosok-non-existent',
    speedId: 'reguler',
    weight: 3,
  });

  assert.equal(estimate.service.id, 'layanan-tunggal');
  assert.equal(estimate.service.name, 'Layanan Tunggal');
  assert.equal(estimate.totalAmount, 30000);
});

