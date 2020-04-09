'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "9f5fa43f8037c712e397f48269c228b4",
"/main.dart.js": "3cfc88db957538a83389c7284c857dd6",
"/icons/favicon-16x16.png": "9cdb41b8f9b731da4f83bb0d0e84992c",
"/icons/favicon.ico": "3c0b06e426f3a5f2c9afcc1cf580d8d4",
"/icons/apple-icon.png": "cd326132486b0bff49f1e0227e7ce69c",
"/icons/apple-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/android-icon-192x192.png": "dd753a63a27f45bed45e1bae823f2f51",
"/icons/apple-icon-precomposed.png": "cd326132486b0bff49f1e0227e7ce69c",
"/icons/apple-icon-114x114.png": "701cac581175059238a414f6d19447db",
"/icons/ms-icon-310x310.png": "abe43d3cd618943c6f3be4fd07ff5068",
"/icons/ms-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/apple-icon-57x57.png": "b44cdaec2a501c911c039a4496394ad3",
"/icons/apple-icon-152x152.png": "c0374cd9bd6848c227818012a8aa419e",
"/icons/ms-icon-150x150.png": "e317aad0085615877abbf677e1be40d2",
"/icons/android-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"/icons/android-icon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"/icons/android-icon-36x36.png": "96a3e622b59f0aba5c9cf10d1911abef",
"/icons/apple-icon-180x180.png": "e48a9935b340d147f3ec87fbd0b94005",
"/icons/favicon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"/icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/icons/android-icon-48x48.png": "b1306559376a5f20e6fb55e15125d019",
"/icons/apple-icon-76x76.png": "4e36958e440b044aac5b31c1e883371f",
"/icons/apple-icon-60x60.png": "0e76dbea8d4509dc8c103b4ebe1628ba",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/android-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/apple-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"/icons/apple-icon-120x120.png": "448b9431e2c58f8c931436032964e995",
"/icons/favicon-32x32.png": "b789218430188e48576b4aa67313a7f7",
"/icons/ms-icon-70x70.png": "15285b7e35c9cf31244b3ac626c9ec0d",
"/assets/LICENSE": "9f39ed880705dc88c91f7341cc8e348d",
"/assets/AssetManifest.json": "61ef20d5ae12ec1cf6d6a01cb35bdf6e",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/config/config_archive.json": "16cf4b014268c6e6955044b5d38072b0",
"/assets/assets/config/config_recently.json": "8d942f1457b1283fae0a47fdc6884385",
"/assets/assets/img/cover/home_pay_cover.jpg": "1515ec0cf8b5e1e0f9a9507847c509a4",
"/assets/assets/img/cover/rexun_website_cover.jpg": "d725c728befa4cc5de0b9f0b37d27fce",
"/assets/assets/img/cover/data_cover.jpg": "c739f19aa7b55eb9aadcbf16a9b600f6",
"/assets/assets/img/cover/dongxiao_cover.jpg": "7bfdcf71ec5a4eb3f5c44c186c753eee",
"/assets/assets/img/cover/game_cover.jpg": "82dbacf2c990171f5c5160b212b41227",
"/assets/assets/img/cover/banner_cover.jpg": "10e28967542b8d7e5bf260b4a3ce2eb3",
"/assets/assets/img/cover/mijie_cover.jpg": "a9f97187a399517c028ea589908984c7",
"/assets/assets/img/cover/card_cover.jpg": "09b9885b14f1615a18b2fd5d1fed2c87",
"/assets/assets/img/cover/yunjoy_cover.jpg": "ffd6e0eeb1ef4fd25bd4966c5d0dbccc",
"/assets/assets/img/cover/vi_cover.jpg": "9da1b36b134380b60ff09e40a2bb79e4",
"/assets/assets/img/cover/other_cover.jpg": "156f754d6aa855370a7aebf3af9330fb",
"/assets/assets/img/cover/dsp_cover.jpg": "80d08d2ddd0fab06036423afb2299d2c",
"/assets/assets/img/cover/medicine_cover.jpg": "f067d519e0baf6f1f0c92b0a10da195b",
"/assets/assets/img/cover/auction_cover.jpg": "809e1ff5a5323af3fa92b637bc9ff0ae",
"/assets/assets/img/cover/treadmill_cover.jpg": "d11ff7387963f6c0ae41e7cb3fa5aae6",
"/assets/assets/img/cover/logo_cover.jpg": "50becae66e97f53b755a066e20be1308",
"/assets/assets/markdowns/auction/auction_1.png": "ac4c19260d3276c5f48affd52c417fa2",
"/assets/assets/markdowns/auction/auction.md": "80acb6bc23ea3f9a43998378eb36780c",
"/assets/assets/markdowns/card/card.md": "8ba921bef3be051118c50af1649e916c",
"/assets/assets/markdowns/card/card_1.png": "d48d7f540501d3fd5c24b4e4b9eacc2c",
"/assets/assets/markdowns/other/other_5.jpg": "b4f2e0dc6ecd20479b06db14179d3c68",
"/assets/assets/markdowns/other/other_4.jpg": "3dece3addb19240af15b7abbd3a7242a",
"/assets/assets/markdowns/other/other_6.jpg": "3f33736fb4ecf5ed4d0235e7e7ecc4fd",
"/assets/assets/markdowns/other/other_3.jpg": "697b1340bd9868d168bbecd0ff2c595c",
"/assets/assets/markdowns/other/other_2.jpg": "cf783de165c0b98ae4fae818a538a15a",
"/assets/assets/markdowns/other/other_1.jpg": "14552fb79508278c232509686b354475",
"/assets/assets/markdowns/other/other.md": "7f30afab98b79035bb549d1b80c2d861",
"/assets/assets/markdowns/treadmill/treadmill_2.png": "9ccf03d407e88a122726a0486933901a",
"/assets/assets/markdowns/treadmill/treadmill_3.png": "5a6b93b0d8780f575c724d0a70c4a0fe",
"/assets/assets/markdowns/treadmill/treadmill_1.png": "5941b3f0bd39cce52500dd9f8df382fa",
"/assets/assets/markdowns/treadmill/treadmill_4.png": "71c5d3e39a2625c233f9337b7e390eba",
"/assets/assets/markdowns/treadmill/treadmill_5.png": "4d7cb61c2997a8428e75459686fe5697",
"/assets/assets/markdowns/treadmill/treadmill_7.png": "d0cad30720a46bc70bdd5757c3b4ffbc",
"/assets/assets/markdowns/treadmill/treadmill_6.png": "4dc20d3e382366de732fc55dbd9446a0",
"/assets/assets/markdowns/treadmill/treadmill.md": "c7feba066331f101bce1ad817a7ee0bb",
"/assets/assets/markdowns/game/game_1.png": "d9fc9e9bb68da48724aa24a7f61c0874",
"/assets/assets/markdowns/game/game.md": "f5c166e0b0ff1b7a828695e98c5d5698",
"/assets/assets/markdowns/home_pay/home_pay_1.png": "196b952a6409af73c24376edb82c52d0",
"/assets/assets/markdowns/home_pay/home_pay.md": "e8b44b2032907399a2412c3e560126f9",
"/assets/assets/markdowns/logo/logo.md": "631fb69a1fa4eab5993efbdb2fdaf694",
"/assets/assets/markdowns/logo/logo_1.png": "3d51b6a3bcdf527e459d5b909a3a1a4b",
"/assets/assets/markdowns/logo/logo_3.png": "f7edb99387c12ef20d00df2e35272de7",
"/assets/assets/markdowns/logo/logo_2.png": "c17b30c29c9a4357bf8073224f31e875",
"/assets/assets/markdowns/data/data.md": "eacc642a7615b93c8eb3d149918de8ec",
"/assets/assets/markdowns/data/data_1.png": "b1e69e43ab2e5d9ec62a6687c5219f3a",
"/assets/assets/markdowns/dsp/dsp_4.png": "76b744feba02ed8db8615718161c82c0",
"/assets/assets/markdowns/dsp/dsp_5.png": "69d28f892d701cf25568a16b0183a6ca",
"/assets/assets/markdowns/dsp/dsp_6.png": "280dd09431b3b600b577cebd54f2fee2",
"/assets/assets/markdowns/dsp/dsp_2.png": "b5ebc3b77881065652474d4cddb5c61f",
"/assets/assets/markdowns/dsp/dsp_3.png": "4cf943cfe5c5560e9031b71ba024e582",
"/assets/assets/markdowns/dsp/dsp_1.jpg": "a4bdd81a55750eb10e5172a0ff6994ef",
"/assets/assets/markdowns/dsp/dsp.md": "caf2064eb33241280dfb89d8844260be",
"/assets/assets/markdowns/mijie/mijie.md": "8bb28fc85fc6215833bb6f1577fa81ff",
"/assets/assets/markdowns/mijie/mijie_1.jpg": "2bd3eab571b1af3e8cbf24c1b23d03d8",
"/assets/assets/markdowns/mijie/mijie_2.jpg": "c2240e8a81058bab5db95a4a65d1187a",
"/assets/assets/markdowns/banner/banner_1.png": "9ba798195dbf467e1cac06e359b212a0",
"/assets/assets/markdowns/banner/banner_2.png": "e8d97125c7edb5bfe65a0cd001c017d8",
"/assets/assets/markdowns/banner/banner_3.png": "78e523f1df59e054a94b8803a210dab4",
"/assets/assets/markdowns/banner/banner.md": "050cc2af1f016c5e7ca8d729bb56b6ca"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
