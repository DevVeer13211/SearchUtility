const products = [
  {
    id: 1,
    name: "Colgate Strong Teeth Toothpaste",
    price: 89,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    desc: "Cavity protection toothpaste with active fluoride for stronger teeth and fresh breath. 200g pack.",
  },
  {
    id: 2,
    name: "Dove Soap Bar",
    price: 55,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400",
    desc: "Moisturizing cream beauty bar with 1/4 moisturizing cream. Gentle on skin, suitable for daily use. 100g.",
  },
  {
    id: 3,
    name: "Tata Salt",
    price: 24,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",

    desc: "Vacuum evaporated iodized salt. Free-flowing, pure, and hygienic. 1kg pack for daily cooking needs.",
  },
  {
    id: 4,
    name: "Aashirvaad Whole Wheat Atta",
    price: 299,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    desc: "100% whole wheat flour made from the finest quality wheat. Rich in fiber and nutrients. 5kg bag.",
  },
  {
    id: 5,
    name: "Amul Butter",
    price: 55,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
    desc: "Fresh pasteurized butter made from cow's milk. Perfect for spreading, cooking, and baking. 100g pack.",
  },
  {
    id: 6,
    name: "Head & Shoulders Shampoo",
    price: 199,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",

    desc: "Anti-dandruff shampoo with zinc pyrithione. Removes dandruff and keeps scalp clean and fresh. 340ml.",
  },
  {
    id: 7,
    name: "Fortune Sunflower Oil",
    price: 175,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
    desc: "Refined sunflower oil rich in Vitamin E. Light on the stomach and ideal for everyday cooking. 1L bottle.",
  },
  {
    id: 8,
    name: "Lipton Green Tea",
    price: 149,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    desc: "Natural green tea bags with antioxidants. Refreshing and healthy beverage for morning and evening. 25 bags.",
  },
  {
    id: 9,
    name: "Gillette Mach3 Razor",
    price: 249,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400",
    desc: "3-blade razor for a close, comfortable shave. Includes lubricating strip and ergonomic handle.",
  },
  {
    id: 10,
    name: "Comfort Fabric Softener",
    price: 129,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400",
    desc: "Fabric conditioner that leaves clothes soft, fresh, and static-free. Long-lasting fragrance. 800ml.",
  },
  {
    id: 11,
    name: "Brooke Bond Red Label Tea",
    price: 260,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    desc: "Premium blend of Assam and Darjeeling tea leaves. Rich, strong, and aromatic cup every time. 500g.",
  },
  {
    id: 12,
    name: "Dettol Handwash",
    price: 99,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400",
    desc: "Antibacterial liquid handwash that kills 99.9% germs. Gentle moisturizers keep hands soft. 200ml pump.",
  },
  {
    id: 13,
    name: "Parle-G Biscuits",
    price: 30,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
    desc: "Classic glucose biscuits made with wheat and milk. A wholesome snack loved by all ages. 500g family pack.",
  },
  {
    id: 14,
    name: "Vim Dishwash Bar",
    price: 45,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400",
    desc: "Powerful dishwash bar with lemon extracts. Removes tough grease and leaves utensils sparkling clean. 300g.",
  },
  {
    id: 15,
    name: "Himalaya Face Wash",
    price: 130,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    desc: "Purifying neem face wash that removes impurities and controls excess oil. Suitable for oily skin. 150ml.",
  },

  {
    id: 16,
    name: "Samsung Galaxy Buds2 Pro",
    price: 12999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    desc: "True wireless earbuds with Active Noise Cancellation, 360° audio, and up to 8 hours battery life. IPX7 water resistant.",
  },
  {
    id: 17,
    name: "Logitech MX Master 3 Mouse",
    price: 8999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    desc: "Advanced wireless mouse with MagSpeed scroll wheel, 7 buttons, ergonomic design, and up to 70 days battery. Works on any surface.",
  },
  {
    id: 18,
    name: "Apple iPad 10th Gen",
    price: 44900,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    desc: "10.9-inch Liquid Retina display, A14 Bionic chip, 64GB storage, USB-C connector, and 12MP front camera for video calls.",
  },
  {
    id: 19,
    name: "Sony WH-1000XM5 Headphones",
    price: 24990,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    desc: "Industry-leading noise cancellation headphones with 30-hour battery, and crystal-clear call quality.",
  },
  {
    id: 20,
    name: "Anker 65W GaN Charger",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?w=400",
    desc: "Compact 3-port GaN charger with 2 USB-C and 1 USB-A port. Charges laptop, phone, and tablet simultaneously. Foldable plug.",
  },
  {
    id: 21,
    name: "Mi Smart Band 8",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",

    desc: "Fitness tracker with 1.62-inch AMOLED display, SpO2 monitor, heart rate tracking, 16-day battery, and 150+ workout modes.",
  },
  {
    id: 22,
    name: "TP-Link WiFi 6 Router",
    price: 5499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    desc: "AX1800 dual-band WiFi 6 router with speeds up to 1800 Mbps, covers up to 1500 sq ft, and supports 40+ connected devices.",
  },
  {
    id: 23,
    name: "Portronics 10000mAh Power Bank",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",

    desc: "Slim 10000mAh power bank with 22.5W fast charging, dual USB-A output, and USB-C input/output. LED battery indicator.",
  },
  {
    id: 24,
    name: "LG 24-inch FHD Monitor",
    price: 11999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    desc: "Full HD IPS monitor with 75Hz refresh rate, AMD FreeSync, HDMI + VGA ports, and eye-care mode to reduce blue light.",
  },
  {
    id: 25,
    name: "Zebronics Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
    desc: "TKL mechanical keyboard with blue switches, RGB backlight, anti-ghosting, braided USB cable, and aluminum top panel.",
  },
  {
    id: 26,
    name: "Canon PIXMA Ink Printer",
    price: 6999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400",
    desc: "All-in-one inkjet printer with print, scan, and copy. WiFi enabled, prints up to 8 pages/min, compatible with iOS and Android.",
  },
  {
    id: 27,
    name: "boAt Aavante Bluetooth Speaker",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    desc: "10W portable Bluetooth speaker with 360° surround sound, 8-hour playback, IPX5 water resistance, and built-in mic.",
  },
  {
    id: 28,
    name: "Crucial 8GB DDR4 RAM",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    desc: "8GB DDR4 2666MHz desktop RAM with plug-and-play compatibility. Boosts multitasking performance on any DDR4 motherboard.",
  },
  {
    id: 29,
    name: "SanDisk 1TB SSD",
    price: 7499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    desc: "Portable 1TB SSD with read speeds up to 520MB/s. USB 3.2 Gen 2 interface, shock-resistant, and compact pocket-sized design.",
  },
  {
    id: 30,
    name: "Havells 5-Port USB Hub",
    price: 899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    desc: "Compact USB 3.0 hub with 5 ports and data transfer speed up to 5Gbps. Supports Windows, Mac, and Linux. LED indicator included.",
  },
];

const cardsShow = document.querySelector(".cards");
const input = document.querySelector("input");
const groc = document.querySelector("#groc");
const elec = document.querySelector("#elec");

// ─── Render ───────────────────────────────────────────────
const createCard = ({ image, name, price, desc, category }) => `
  <div class="card h-68 w-84 bg-zinc-700 rounded-md overflow-hidden relative">
    <img src="${image}" alt="${name}" class="h-full w-full object-cover opacity-80" />
    <div class="blur-box h-fit w-full p-3 flex flex-col gap-2">
      <div class="itemMain flex items-center justify-between">
        <div class="name font-Helv w-[60%] leading-none font-medium tracking-tight text-lg text-zinc-100">
          ${name}
        </div>
        <div class="price font-Helv w-[40%] text-right leading-none font-semibold tracking-tight text-2xl">
          ₹${price}
        </div>
      </div>
      <p class="itemdesc font-Helv font-normal leading-none text-zinc-50 text-sm w-[90%]">${desc}</p>
      <div class="font-Helv py-1 text-sm bg-amber-200 text-neutral-950 font-bold w-[40%] text-center rounded-full capitalize">
        ${category}
      </div>
    </div>
  </div>`;

const showCards = (items) => {
  cardsShow.innerHTML = items.length
    ? items.map(createCard).join("")
    : `<h1 class="mt-8 text-zinc-300 font-Helv uppercase font-black text-2xl">no search results ...... still refilling ☺️☺️☺️</h1>`;
};

// ─── Filter Logic ─────────────────────────────────────────
const getFilteredByCategory = () => {
  const showGroc = groc.checked;
  const showElec = elec.checked;

  if (showGroc && showElec) return products;
  if (showGroc) return products.filter((p) => p.category === "Groceries");
  if (showElec) return products.filter((p) => p.category === "Electronics");
  return products;
};

const getSearchQuery = () => input.value.toLowerCase().trim();

const applyFilters = () => {
  const query = getSearchQuery();
  const categoryFiltered = getFilteredByCategory();

  const result = query
    ? categoryFiltered.filter((p) => p.name.toLowerCase().includes(query))
    : categoryFiltered;

  showCards(result);
};

// ─── Event Listeners ──────────────────────────────────────
input.addEventListener("input", applyFilters);
groc.addEventListener("change", applyFilters);
elec.addEventListener("change", applyFilters);

// ─── Init ─────────────────────────────────────────────────
applyFilters();