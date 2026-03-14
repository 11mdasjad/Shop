/* ── TRADES — script.js ─────────────────────────── */

// ── PRODUCTS DATA ──────────────────────────────────
const PRODUCTS = [
  // Electrical Items
  {
    id: 1, category: 'electrical-items',
    name: 'Havells 2.5 sq mm Wire (90m)',
    price: '₹2,450',
    desc: 'FR PVC insulated copper wire, suitable for home wiring and industrial use. ISI marked.',
    icon: 'wire',
  },
  {
    id: 2, category: 'electrical-items',
    name: 'Schneider MCB 32A',
    price: '₹380',
    desc: 'Single pole miniature circuit breaker, 6kA breaking capacity, C-curve protection.',
    icon: 'mcb',
  },
  {
    id: 3, category: 'electrical-items',
    name: 'Anchor Roma Switch 6A',
    price: '₹85',
    desc: 'Premium one-way switch with shock-proof body. Suitable for all modular plates.',
    icon: 'switch',
  },
  {
    id: 4, category: 'electrical-items',
    name: 'Havells Distribution Board (8-way)',
    price: '₹1,850',
    desc: 'Surface mount DB box with double door, powder-coated, pre-wired for 8 MCBs.',
    icon: 'board',
  },
  {
    id: 5, category: 'electrical-items',
    name: 'LED Batten 20W (4 ft)',
    price: '₹320',
    desc: 'Energy-saving LED tube light with driver. 6500K cool white, 2000 lumens output.',
    icon: 'bulb',
  },
  {
    id: 6, category: 'electrical-items',
    name: 'Legrand 3-Pin Socket 16A',
    price: '₹220',
    desc: 'Heavy-duty modular socket with shutter protection. Fire-resistant polycarbonate body.',
    icon: 'socket',
  },

  // Hardware Tools
  {
    id: 7, category: 'hardware-tools',
    name: 'Bosch 13mm Drill Machine',
    price: '₹3,200',
    desc: '500W corded drill, 2600 RPM, variable speed with forward/reverse function.',
    icon: 'drill',
  },
  {
    id: 8, category: 'hardware-tools',
    name: 'Stanley Screwdriver Set (6 pc)',
    price: '₹480',
    desc: 'Includes 3 flat and 3 Phillips screwdrivers. Chrome vanadium tips, cushion grip.',
    icon: 'screw',
  },
  {
    id: 9, category: 'hardware-tools',
    name: 'Taparia Combination Plier 8"',
    price: '₹280',
    desc: 'Drop-forged alloy steel, nickel-chrome plated. Multi-purpose cutting and gripping.',
    icon: 'plier',
  },
  {
    id: 10, category: 'hardware-tools',
    name: 'Stanley Measuring Tape 5m',
    price: '₹195',
    desc: 'Blade lock, blade grip, and nylon coated blade. Magnetic tip for solo measuring.',
    icon: 'tape',
  },
  {
    id: 11, category: 'hardware-tools',
    name: 'Adjustable Wrench 12"',
    price: '₹350',
    desc: 'Drop-forged chrome vanadium steel. Wide jaw opening for multiple bolt sizes.',
    icon: 'wrench',
  },
  {
    id: 12, category: 'hardware-tools',
    name: 'Lineman Knife / Electrician Knife',
    price: '₹120',
    desc: 'Fold-back blade, insulated handle, wire stripper notch. Essential for every electrician.',
    icon: 'knife',
  },

  // Electrical Accessories
  {
    id: 13, category: 'electrical-accessories',
    name: 'PVC Conduit Pipe 25mm (3m)',
    price: '₹95',
    desc: 'Rigid PVC electrical conduit, UV stabilised, ISI marked, 3-metre standard length.',
    icon: 'conduit',
  },
  {
    id: 14, category: 'electrical-accessories',
    name: 'Cable Tie Pack (100 pcs)',
    price: '₹80',
    desc: 'Nylon 66 self-locking zip ties, 200mm × 3.6mm, UV resistant black.',
    icon: 'tie',
  },
  {
    id: 15, category: 'electrical-accessories',
    name: 'Insulation Tape (10m roll)',
    price: '₹35',
    desc: 'PVC self-adhesive tape, flame retardant, 3kV dielectric strength. 3 rolls per pack.',
    icon: 'tape2',
  },
  {
    id: 16, category: 'electrical-accessories',
    name: 'Junction Box (4-way)',
    price: '₹65',
    desc: 'ABS plastic junction box with knockout entries, IP44 rated, suitable for concealed wiring.',
    icon: 'box',
  },
  {
    id: 17, category: 'electrical-accessories',
    name: 'Wire Connector / Choc Block',
    price: '₹45',
    desc: 'Screw terminal connector block, 12-way, rated 10A 250V. Pack of 2 strips.',
    icon: 'connector',
  },
  {
    id: 18, category: 'electrical-accessories',
    name: 'RCCB 40A / 30mA',
    price: '₹1,100',
    desc: 'Residual current circuit breaker. Provides protection against earth fault and leakage current.',
    icon: 'rccb',
  },
];

// ── SVG ICONS for product cards ───────────────────
function getIcon(type) {
  const icons = {
    wire: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 32 Q20 8 32 32 Q44 56 56 32"/><circle cx="8" cy="32" r="3" fill="currentColor" stroke="none"/><circle cx="56" cy="32" r="3" fill="currentColor" stroke="none"/></svg>`,
    mcb: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="20" y="10" width="24" height="44" rx="3"/><line x1="32" y1="10" x2="32" y2="20"/><circle cx="32" cy="38" r="6"/><line x1="32" y1="32" x2="32" y2="26"/></svg>`,
    switch: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="18" width="44" height="28" rx="4"/><circle cx="32" cy="32" r="7"/><line x1="32" y1="25" x2="32" y2="20"/></svg>`,
    board: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="8" width="48" height="48" rx="3"/><line x1="8" y1="24" x2="56" y2="24"/><rect x="16" y="30" width="10" height="14" rx="1"/><rect x="30" y="30" width="10" height="14" rx="1"/></svg>`,
    bulb: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M32 8a16 16 0 0 1 10 28l-2 8H24l-2-8A16 16 0 0 1 32 8z"/><line x1="26" y1="52" x2="38" y2="52"/><line x1="28" y1="56" x2="36" y2="56"/></svg>`,
    socket: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="10" width="44" height="44" rx="5"/><circle cx="32" cy="32" r="12"/><line x1="28" y1="26" x2="28" y2="30"/><line x1="36" y1="26" x2="36" y2="30"/><line x1="26" y1="36" x2="38" y2="36"/></svg>`,
    drill: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="24" width="28" height="16" rx="3"/><polygon points="36,28 56,32 36,36"/><rect x="14" y="40" width="12" height="8" rx="2"/><line x1="8" y1="32" x2="4" y2="32"/></svg>`,
    screw: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="32" y1="8" x2="32" y2="56"/><rect x="22" y="8" width="20" height="10" rx="2"/><line x1="28" y1="13" x2="36" y2="13"/></svg>`,
    plier: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 10 L30 30 L20 56"/><path d="M54 10 L34 30 L44 56"/><circle cx="32" cy="30" r="4"/></svg>`,
    tape: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="10"/><line x1="10" y1="32" x2="8" y2="32"/><path d="M32 10 L32 6 L38 6"/></svg>`,
    wrench: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M42 10 a10 10 0 0 1 0 14 L20 46 a6 6 0 1 1-8-8 L44 16 a10 10 0 0 1-2-6z"/></svg>`,
    knife: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="24" y="28" width="28" height="10" rx="2"/><polygon points="52,28 60,33 52,38"/><rect x="8" y="24" width="18" height="18" rx="3"/></svg>`,
    conduit: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="24" width="48" height="16" rx="8"/><line x1="16" y1="24" x2="16" y2="40"/><line x1="48" y1="24" x2="48" y2="40"/></svg>`,
    tie: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 32 Q32 10 54 32"/><rect x="48" y="28" width="10" height="8" rx="2"/><line x1="10" y1="32" x2="10" y2="46"/></svg>`,
    tape2: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="8"/><path d="M32 12 Q50 12 50 32"/></svg>`,
    box: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="10" width="44" height="44" rx="3"/><line x1="10" y1="28" x2="54" y2="28"/><line x1="32" y1="10" x2="32" y2="54"/></svg>`,
    connector: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="22" width="48" height="20" rx="3"/><line x1="20" y1="22" x2="20" y2="42"/><line x1="32" y1="22" x2="32" y2="42"/><line x1="44" y1="22" x2="44" y2="42"/><circle cx="20" cy="28" r="2" fill="currentColor" stroke="none"/><circle cx="32" cy="28" r="2" fill="currentColor" stroke="none"/><circle cx="44" cy="28" r="2" fill="currentColor" stroke="none"/></svg>`,
    rccb: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="16" y="8" width="32" height="48" rx="3"/><path d="M28 24 L36 32 L28 40"/><line x1="20" y1="16" x2="44" y2="16"/></svg>`,
  };
  return icons[type] || icons['bulb'];
}

// ── RENDER PRODUCTS ────────────────────────────────
function renderProducts(filterCat = 'all') {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  const filtered = filterCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filterCat);

  filtered.forEach((p, i) => {
    const catLabel = {
      'electrical-items':    'Electrical Items',
      'hardware-tools':      'Hardware Tools',
      'electrical-accessories': 'Accessories',
    }[p.category];

    const imgClass = {
      'electrical-items':    'img-electrical',
      'hardware-tools':      'img-hardware',
      'electrical-accessories': 'img-accessory',
    }[p.category];

    const waMsg = encodeURIComponent(
      `Hello sir, I am interested in *${p.name}* (${p.price}). I want to visit your shop or buy this product.`
    );

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="img-wrap ${imgClass}">
        ${getIcon(p.icon)}
        <span class="cat-badge">${catLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-price">${p.price}</div>
      </div>
      <div class="card-footer">
        <a href="https://wa.me/919431615053?text=${waMsg}" target="_blank" class="wa-btn">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.851L.057 23.03a.75.75 0 00.914.913l5.314-1.494A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.926 0-3.731-.497-5.3-1.367l-.38-.214-3.954 1.11 1.089-3.875-.226-.391A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Enquire on WhatsApp
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── FILTER ─────────────────────────────────────────
function filterProducts(cat) {
  renderProducts(cat);
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
}

// ── SCROLL TO PRODUCTS ─────────────────────────────
function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ── NAVBAR SCROLL ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('hidden', !menuOpen);
  const lines = menuBtn.querySelectorAll('.ham-line');
  if (menuOpen) {
    lines[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    lines[1].style.opacity   = '0';
    lines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    lines[0].style.transform = '';
    lines[1].style.opacity   = '';
    lines[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    const lines = menuBtn.querySelectorAll('.ham-line');
    lines[0].style.transform = '';
    lines[1].style.opacity   = '';
    lines[2].style.transform = '';
  });
});

// ── INIT ────────────────────────────────────────────
renderProducts('all');