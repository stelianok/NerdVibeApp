const recentlyAdded: IProduct[] = [
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91d6AcW-krL._SX385_.jpg',
      },
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81XmbJHYW-L._SX522_.jpg',
      },
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81CvOd4ZglL._SX522_.jpg',
      },
    ],
    name: 'Elden Ring Collector Edition (PS4)',
    price: 449.99,
    isOnSale: false,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,
    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61B8Lq5NXmL._AC_SY450_.jpg',
      },
    ],
    name: 'SAMSUNG T350 Series 22-Inch FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync (LF22T350FHNXZA)',
    price: 129.99,
    isOnSale: false,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,
    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Rb2dru4eL._AC_SY355_.jpg',
      },
    ],
    name: 'RESPAWN 110 Ergonomic Gaming Chair with Footrest Recliner - Racing Style High Back PC Computer Desk Office Chair - 360 Swivel, Adjustable Lumbar Support, Headrest Pillow, Padded Armrests - 2019 Green',
    price: 135.54,
    isOnSale: true,
    discount: 0.64,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61mpMH5TzkL._AC_SY450_.jpg',
      },
    ],
    name: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac',
    price: 39.99,
    isOnSale: false,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
];

const popularRightNow: IProduct[] = [
  {
    imageArray: [
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/threefaces_finalvendetta_blackt-shirt_pl_1_720x720.jpg?v=1657776237',
      },
    ],
    name: 'Official Final Vendetta Trio Unisex T-Shirts',
    price: 17,
    isOnSale: true,
    discount: 0.9,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,
    hasSizeOptions: true,
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    imageArray: [
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_1_1024x1024.jpg?v=1657837433',
      },
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_5_1024x1024.jpg?v=1657670568',
      },
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_2_1024x1024.jpg?v=1657837436',
      },
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_3_1024x1024.jpg?v=1657670565',
      },
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/jetsetradio_hoodie_4_1024x1024.jpg?v=1657837439',
      },
    ],
    name: 'Official Jet Set Radio Unisex Pullover Hoodies',
    price: 50.99,
    isOnSale: false,
    discount: 0.8,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,
    hasSizeOptions: true,
    availableSizes: ['S', 'M', 'L', 'XL'],
  },
  {
    imageArray: [
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/ns563678stw_1_720x720.jpg?v=1657866244',
      },
    ],
    name: 'Official Star Wars Novelty Socks (1 Pair)',
    price: 8,
    isOnSale: false,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,
    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/hd162783spn1_720x720.jpg?v=1657844625',
      },
    ],
    name: 'Official Marvel Spider-Man Kids Double Sleeved Hoodies',
    price: 38.0,
    isOnSale: true,
    discount: 0.85,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://cdn.shopify.com/s/files/1/1375/9903/products/ts223330sky_600x.jpg?v=1657862996',
      },
    ],
    name: 'Skyrim T-Shirt',
    price: 60,
    isOnSale: true,
    discount: 0.5,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
];

const onSale: IProduct[] = [
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/615XerCP0JL._AC_UX385_.jpg',
      },
    ],
    name: 'Demon Slayer Hoodies for Men Long Sleeve Black Kimetsu no Yaiba Sweatshirt Zenitsu Hoodie Men Unisex Adult Tanjiro Sweater',
    price: 26.99,
    isOnSale: true,
    discount: 0.9,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71M5l+O4OFL._AC_SY355_.jpg',
      },
    ],
    name: 'HyperX Cloud II Gaming Headset com 7.1 Surround Sound',
    price: 300.67,
    isOnSale: true,
    discount: 0.8,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/I/71Xcl-j5ipL._AC_SY450_.jpg',
      },
    ],
    name: 'SteelSeries Arctis 3 Console – Fone de ouvido estéreo com fio para jogos PlayStation 5/4, Xbox Series X|S, Nintendo Switch, VR, Android e iOS – Branco',
    price: 250,
    isOnSale: true,
    discount: 0.7,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/I/61zAbNEgqrL._AC_SX522_.jpg',
      },
    ],
    name: 'Elden Ring - Standard - Xbox Series X',
    price: 60,
    isOnSale: true,
    discount: 0.9,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
  {
    imageArray: [
      {
        imageURL:
          'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61mko8+Uf6L._AC_UY218_.jpg',
      },
    ],
    name: 'Black Shark RGB Mechanical Gaming Keyboard LED Backlit Wired Keyboard with Blue Switches, Fully Programmable, Anti-Ghosting 104 Keys for Desktop PC, Sixgill K2',
    price: 100,
    isOnSale: true,
    discount: 0.7,
    rating: '4.8',
    description: 'XD',
    hasColorOptions: false,

    hasSizeOptions: false,
  },
];

export { popularRightNow, onSale, recentlyAdded };
