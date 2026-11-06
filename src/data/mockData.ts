export interface AuctionItem {
  id: string;
  title: string;
  game: string;
  edition: string;
  platform: "PS5" | "PS4" | "PC" | "Xbox" | "Multiplatform" | "Nintendo Switch";
  condition: string;
  currentBid: number;
  startingBid: number;
  totalBids: number;
  highBidder: string;
  reserveMet: boolean;
  featured: boolean;
  badge: string;
  badgeColor: "purple" | "emerald" | "amber" | "cyan" | "rose";
  thumbnail: string;
  initialHoursLeft: number;
  description: string;
  includes: string[];
  seller: {
    name: string;
    rating: string;
    verified: boolean;
  };
  category: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  tag: string;
  genre: string;
}

// Top 5 Featured Auctions using the 5 uploaded game images
export const FEATURED_AUCTIONS: AuctionItem[] = [
  {
    id: "lot-gow-ragnarok",
    title: "God of War Ragnarök - Jötnar Collector's Edition (PS5)",
    game: "God of War Ragnarök",
    edition: "Jötnar Collector's Edition",
    platform: "PS5",
    condition: "Factory Sealed (Wata 9.8 A+)",
    currentBid: 245.0,
    startingBid: 99.0,
    totalBids: 38,
    highBidder: "Kratos_Blade99",
    reserveMet: true,
    featured: true,
    badge: "🔥 HOT AUCTION",
    badgeColor: "rose",
    thumbnail: "/images/god-of-war-ragnarok.jpg",
    initialHoursLeft: 2.24,
    description:
      "Extremely rare Jötnar Collector's Edition for PlayStation 5. Contains the 16-inch Mjölnir Hammer replica, 7-inch Vinyl Record with music by Bear McCreary, Vanir Twin Carvings, Falcon, Bear & Wolf Pin Set, and Yggdrasil Cloth Map. Unopened factory seal with flawless grade.",
    includes: [
      "16-inch Mjölnir Hammer Replica",
      "7-inch Vinyl Record (Bear McCreary)",
      "Yggdrasil Cloth Map & Steelbook",
      "Vanir Twins Carvings & Pin Set",
    ],
    seller: {
      name: "NordicVault_USA",
      rating: "99.8%",
      verified: true,
    },
    category: "playstation",
  },
  {
    id: "lot-rdr-2",
    title: "Red Dead Redemption 2 - Outlaw Collector's Box (Steelbook Edition)",
    game: "Red Dead Redemption 2",
    edition: "Outlaw Collector's Box & Vintage Map",
    platform: "PS4",
    condition: "Mint Condition CIB (Rockstar Verified)",
    currentBid: 310.0,
    startingBid: 120.0,
    totalBids: 54,
    highBidder: "Arthur_Morgan_Van",
    reserveMet: true,
    featured: true,
    badge: "⚡ ENDING SOON",
    badgeColor: "amber",
    thumbnail: "/images/red-dead-redemption-2.jpg",
    initialHoursLeft: 0.71,
    description:
      "Authentic Rockstar Games Outlaw Collector's Box featuring heavy metal lockbox with key, collectible challenge coin, double-sided 100-piece wooden puzzle, six-shooter bandana, treasure map, playing cards, and Wheeler, Rawson and Co. Catalogue.",
    includes: [
      "Heavy Metal Lock Box with Key",
      "Engraved Collectible Challenge Coin",
      "Double-Sided 100-Piece Jigsaw Puzzle",
      "Authentic Frontier Red Bandana",
    ],
    seller: {
      name: "FrontierCollectibles",
      rating: "100%",
      verified: true,
    },
    category: "open-world",
  },
  {
    id: "lot-gta-v",
    title: "Grand Theft Auto V - Collector's Launch Edition Box (PS4)",
    game: "Grand Theft Auto V",
    edition: "Launch Collector's Edition with Blueprint",
    platform: "PS4",
    condition: "Brand New Sealed (Grade 9.6)",
    currentBid: 185.0,
    startingBid: 60.0,
    totalBids: 29,
    highBidder: "Trevor_Phils_88",
    reserveMet: true,
    featured: true,
    badge: "💎 COLLECTOR GEM",
    badgeColor: "purple",
    thumbnail: "/images/gta-v.jpg",
    initialHoursLeft: 5.46,
    description:
      "Original Launch Collector's Edition for PlayStation 4. Includes the authentic Los Santos Blueprint Map with hidden UV secrets, Security Deposit Bag with Laser-Cut Logo Key, New Era 9FIFTY Snapback Cap, and custom SteelBook artwork.",
    includes: [
      "21.5x26.75 inch Los Santos Blueprint Map",
      "Security Deposit Cash Bag with Key",
      "Official Grand Theft Auto V Snapback Cap",
      "Embossed SteelBook Case with Exclusive Artwork",
    ],
    seller: {
      name: "LosSantos_Vault",
      rating: "99.4%",
      verified: true,
    },
    category: "action",
  },
  {
    id: "lot-cod-mw3",
    title: "Call of Duty: Modern Warfare III - Vault Edition Physical Steelbook",
    game: "Call of Duty: Modern Warfare III",
    edition: "Vault Edition Military Steelbook",
    platform: "Multiplatform",
    condition: "Factory Sealed Foil (Mint)",
    currentBid: 195.0,
    startingBid: 80.0,
    totalBids: 31,
    highBidder: "Ghost_Operator_7",
    reserveMet: true,
    featured: true,
    badge: "🎯 TACTICAL DROP",
    badgeColor: "cyan",
    thumbnail: "/images/cod-mw3.jpg",
    initialHoursLeft: 3.83,
    description:
      "Exclusive Vault Edition bundle with physical matte-finish steelbook, Task Force 141 embroidered emblem patch, Soap Operator commemorative challenge coin, and sealed voucher codes for the Nemesis Operator Pack and Weapon Vaults.",
    includes: [
      "Heavy Armor Matte Steelbook Case",
      "Task Force 141 Tactical Velcro Patch",
      "Soap MacTavish Commemorative Coin",
      "Collector Art Cards Set (4 Pieces)",
    ],
    seller: {
      name: "TacticalLoot_Supply",
      rating: "99.7%",
      verified: true,
    },
    category: "fps",
  },
  {
    id: "lot-minecraft",
    title: "Minecraft - 10th Anniversary Boxed Physical Edition (PC / Switch)",
    game: "Minecraft",
    edition: "10th Anniversary Special Physical Release",
    platform: "Nintendo Switch",
    condition: "Brand New Factory Sealed",
    currentBid: 140.0,
    startingBid: 45.0,
    totalBids: 42,
    highBidder: "BlockBuilder_Pro",
    reserveMet: true,
    featured: true,
    badge: "🌟 10TH ANNIVERSARY",
    badgeColor: "emerald",
    thumbnail: "/images/minecraft.jpg",
    initialHoursLeft: 1.09,
    description:
      "Commemorative physical 10th Anniversary Minecraft collector package. Features embossed 3D block slipcover, Creeper metallic commemorative coin, Steve & Alex diorama booklet, and unopened physical token voucher with bonus creator skin pack.",
    includes: [
      "Embossed 3D Grass Block Collector Box",
      "Metallic Creeper Commemorative Token",
      "Overworld Art Guide & Diorama Booklet",
      "Unopened 10th Anniversary Creator Token",
    ],
    seller: {
      name: "PixelRetroPresents",
      rating: "99.9%",
      verified: true,
    },
    category: "sandbox",
  },
];

// All auction items catalog for catalog page
export const ALL_AUCTIONS: AuctionItem[] = [
  ...FEATURED_AUCTIONS,
  {
    id: "lot-gow-ragnarok-ps4",
    title: "God of War Ragnarök - Jotunheim Steelbook Launch Edition (PS4/PS5)",
    game: "God of War Ragnarök",
    edition: "Launch Edition with Kratos & Atreus Steelbook",
    platform: "PS4",
    condition: "Sealed Mint Grade 9.4",
    currentBid: 115.0,
    startingBid: 40.0,
    totalBids: 19,
    highBidder: "Midgardian_99",
    reserveMet: true,
    featured: false,
    badge: "🔥 POPULAR",
    badgeColor: "rose",
    thumbnail: "/images/god-of-war-ragnarok.jpg",
    initialHoursLeft: 6.12,
    description:
      "Launch edition steelbook featuring high relief embossing of Kratos and Atreus in the Fimbulwinter snow. Includes original soundtrack code and downloadable armor set.",
    includes: ["Embossed Jotunheim Steelbook", "Soundtrack Voucher", "Art Prints"],
    seller: { name: "NordicVault_USA", rating: "99.8%", verified: true },
    category: "playstation",
  },
  {
    id: "lot-rdr-2-ultimate",
    title: "Red Dead Redemption 2 - Ultimate Edition Steelbook (Rockstar Authenticated)",
    game: "Red Dead Redemption 2",
    edition: "Ultimate Edition Physical Steelbook & World Map",
    platform: "Xbox",
    condition: "Near Mint (Unscratched Disc)",
    currentBid: 165.0,
    startingBid: 55.0,
    totalBids: 24,
    highBidder: "BlackwaterRanger",
    reserveMet: true,
    featured: false,
    badge: "⚡ NO RESERVE",
    badgeColor: "amber",
    thumbnail: "/images/red-dead-redemption-2.jpg",
    initialHoursLeft: 4.35,
    description:
      "Special Ultimate Edition steelbook with full fold-out map of New Hanover and West Elizabeth. Disc in pristine condition.",
    includes: ["Special Edition Steelbook", "Exclusive World Map", "Outlaw Survival Kit"],
    seller: { name: "FrontierCollectibles", rating: "100%", verified: true },
    category: "open-world",
  },
  {
    id: "lot-gta-v-steelbook",
    title: "Grand Theft Auto V - Premium Steelbook & Franklin Art Edition",
    game: "Grand Theft Auto V",
    edition: "Limited Steelbook with Special Map",
    platform: "PS4",
    condition: "Factory Sealed",
    currentBid: 95.0,
    startingBid: 35.0,
    totalBids: 15,
    highBidder: "Vinewood_Star",
    reserveMet: false,
    featured: false,
    badge: "💎 LOW START",
    badgeColor: "purple",
    thumbnail: "/images/gta-v.jpg",
    initialHoursLeft: 8.75,
    description:
      "Original PlayStation 4 steelbook with gloss finish, featuring Michael, Franklin, and Trevor artwork.",
    includes: ["Limited Edition Steelbook", "Los Santos City Guide Map"],
    seller: { name: "LosSantos_Vault", rating: "99.4%", verified: true },
    category: "action",
  },
];

// Gaming Categories
export const AUCTION_CATEGORIES: CategoryItem[] = [
  {
    id: "cat-playstation",
    title: "PlayStation Exclusives",
    subtitle: "PS5 & PS4 Editions",
    thumbnail: "/images/god-of-war-ragnarok.jpg",
    tag: "PS5 / PS4",
    genre: "playstation",
  },
  {
    id: "cat-open-world",
    title: "Open World Epics",
    subtitle: "Westerns & Universes",
    thumbnail: "/images/red-dead-redemption-2.jpg",
    tag: "Adventure",
    genre: "open-world",
  },
  {
    id: "cat-action-crime",
    title: "Action & Blockbusters",
    subtitle: "High-octane Classics",
    thumbnail: "/images/gta-v.jpg",
    tag: "Action",
    genre: "action",
  },
  {
    id: "cat-sandbox-survival",
    title: "Sandbox & Crafting",
    subtitle: "Limited Boxes & Figures",
    thumbnail: "/images/minecraft.jpg",
    tag: "Sandbox",
    genre: "sandbox",
  },
  {
    id: "cat-fps-shooters",
    title: "FPS & Tactical Shooters",
    subtitle: "Call of Duty & Warfare",
    thumbnail: "/images/cod-mw3.jpg",
    tag: "Multiplayer",
    genre: "fps",
  },
  {
    id: "cat-steelbooks",
    title: "Collector Steelbooks",
    subtitle: "Embossed Metal Covers",
    thumbnail: "/images/god-of-war-ragnarok.jpg",
    tag: "Hardware / Cases",
    genre: "steelbooks",
  },
];

// Compatibility aliases for previous imports
export const FEATURED_VIDEOS = FEATURED_AUCTIONS.map((a) => ({
  id: a.id,
  title: a.title,
  duration: `${a.totalBids} Bids`,
  views: `$${a.currentBid.toFixed(2)}`,
  timestamp: a.badge,
  thumbnail: a.thumbnail,
}));

export const CATEGORIES = AUCTION_CATEGORIES.map((c) => ({
  id: c.id,
  title: c.title,
  thumbnail: c.thumbnail,
}));

export const ALL_VIDEOS = ALL_AUCTIONS.map((a) => ({
  id: a.id,
  title: a.title,
  duration: `${a.totalBids} Bids`,
  views: `$${a.currentBid.toFixed(2)}`,
  thumbnail: a.thumbnail,
}));

export const ALL_CATEGORIES = AUCTION_CATEGORIES.map((c) => ({
  id: c.id,
  title: c.title,
  thumbnail: c.thumbnail,
}));

export const NAV_LINKS = [
  { label: "Home", href: "/offer/2026" },
  { label: "Live Auctions", href: "/videos" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
];
