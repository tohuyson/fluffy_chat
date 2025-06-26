'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_283.part.js": "59d82ca543956f5ae8c450d581c5644c",
"main.dart.js_293.part.js": "93364120d95b3a1b4749bb930bafb06d",
"flutter_bootstrap.js": "01f0eeec1c1b1f7859b8aac80698740c",
"main.dart.js_277.part.js": "547726f5d80704bbde62bc8ee7a30c27",
"main.dart.js_205.part.js": "a78da8e43f11dcb441c3db17d371a3f1",
"version.json": "82d9ef62d5152ebfe6925ecf47aa688f",
"main.dart.js_241.part.js": "4656c4529bb2ac62cdd8e2b1517a07ed",
"splash/img/light-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/light-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/dark-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/light-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/dark-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/img/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/style.css": "740c493f9c5dfc859ca07663691b24fb",
"main.dart.js_232.part.js": "e499532767342f3d798bec0f4196a952",
"main.dart.js_222.part.js": "45fd859ed495c78586b2f33beafa4e90",
"index.html": "b886863d344b95c47068bfd6c8371f1c",
"/": "b886863d344b95c47068bfd6c8371f1c",
"main.dart.js_250.part.js": "3722f22f3a8443af20d042995e17f7cc",
"main.dart.js_249.part.js": "9ea285b33bb53fdbeffecf5caf0e9d8a",
"main.dart.js_292.part.js": "3201b5a00153dd92ad7f43473e716c11",
"main.dart.js_282.part.js": "22a6a61576d9a3062b8437a026ddcaca",
"main.dart.js_276.part.js": "9cfab6df18998cece622ec208e64c602",
"auth.html": "88530dca48290678d3ce28a34fc66cbd",
"main.dart.js_214.part.js": "9361b7b83259762b356e333c0aaaee13",
"main.dart.js_204.part.js": "eebddfa4c5540414e743f41d7b841e3d",
"main.dart.js_220.part.js": "039b3032aa282bc308d3d1d5b5418038",
"main.dart.js_230.part.js": "cd34b72f667cc474e6ed4e0637efd349",
"main.dart.js_299.part.js": "ff8acb5a36e98a336a13b590653ca51b",
"main.dart.js_289.part.js": "b3b0372d2e644e3aa0b85187334cf875",
"main.dart.js": "a0a6836f66290f2208458bb0cd1cd184",
"main.dart.js_239.part.js": "e2306a561ccfc4c3220f474e0b9b3279",
"main.dart.js_290.part.js": "1bff9ad67a9353464d3ee7aad5a31ffc",
"main.dart.js_274.part.js": "d626da2c9c8d339da0108deac0e36e04",
"main.dart.js_281.part.js": "9fbbe33400872ebfc72601c38d67c554",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_275.part.js": "fac1c027ffa0ac29f7325981a1169ba2",
"main.dart.js_265.part.js": "59ef1be7f001de502dfe083115485582",
"main.dart.js_243.part.js": "97bd42c2d099a40a3d189860de74913b",
"main.dart.js_288.part.js": "c1395281817d3d78f71c035414a129ea",
"main.dart.js_298.part.js": "006a62f79f5c769a20c78837206352f0",
"main.dart.js_231.part.js": "27ed433b04f45777ca7a050d084843d5",
"main.dart.js_279.part.js": "4e6cdc0312ecc30fd131289ab80ac7bc",
"main.dart.js_246.part.js": "4b549fb1937aaec8b86a349043ffe328",
"main.dart.js_256.part.js": "cdbcb07ed72e43ee96e40e4717e17ab5",
"main.dart.js_234.part.js": "76a9df2e86f6eae27f096c4cccf09312",
"favicon.png": "a409751f0ecf6dee76fb350d7402f9be",
"main.dart.js_270.part.js": "fa08fed9b96fad984f97cd8a3fee863b",
"main.dart.js_284.part.js": "f39ad2b2a6443e42626e1ecf542a9ce7",
"main.dart.js_294.part.js": "7a4a9aff093c35b8df6a0be297c5c8f8",
"main.dart.js_190.part.js": "2ef52348b3258f017a6f4fa7cb5374bb",
"main.dart.js_203.part.js": "2741b4913743a6463a2dde180492bf89",
"main.dart.js_295.part.js": "723f555a0c9da4435e4608bddb75db04",
"icons/Icon-192.png": "97f7226b0a52c22cfe1557cecce6763e",
"icons/Icon-512.png": "391892c6f6720429a9d4f93ec1ce5f4e",
"manifest.json": "cc4b6aa791018840b65fd0b0e325b201",
"main.dart.js_278.part.js": "22cb5a840dea519ac0a3466d526b4da7",
"main.dart.js_1.part.js": "7d577e2af3c657f4e70cc4cc9995e4c7",
"main.dart.js_263.part.js": "ec7cf6275fedc11b9d376a0389222a80",
"main.dart.js_297.part.js": "9238b00b3d361e380fbc9ab730c32956",
"main.dart.js_245.part.js": "b23b9d09aaadc28f78e7fb7c8ac86ca9",
"main.dart.js_16.part.js": "a2d063ab07210522c46c695f5797c02b",
"main.dart.js_255.part.js": "404301f700098b2c16a58b6b64ba9b6e",
"assets/AssetManifest.json": "b500fe8bd244396f3e4e307790b3adc7",
"assets/NOTICES": "5941472ba25d82e5b67324f5a15344c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0dcfc18eecbd439a18e85b990a04b1c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5c124396503231de315ac975bb8653d8",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/handy_window/assets/handy-window-dark.css": "45fb3160206a5f74c0a9f1763c00c372",
"assets/packages/handy_window/assets/handy-window.css": "0434ee701235cf1c72458fd4ce022a64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "601267118f96709e8431398bdac08a73",
"assets/fonts/MaterialIcons-Regular.otf": "ec4701eae3a98b81d0e83dedc090f26c",
"assets/assets/logo_transparent.png": "f00cda39300c9885a7c9ae52a65babbf",
"assets/assets/sas-emoji.json": "b9d99fc6dda6a3250af57af969b4a02d",
"assets/assets/banner.png": "4a005db27a8787aea061537223dabb7d",
"assets/assets/vodozemac/vodozemac_bindings_dart.js": "21e0477223d4076eca23fe0ab07b9158",
"assets/assets/vodozemac/vodozemac_bindings_dart_bg.wasm": "6cf8b07f024a4db10d9287955e478947",
"assets/assets/info-logo.png": "9d1d72596564e6639fd984fea2dfd048",
"assets/assets/banner_transparent.png": "364e2030f739bf0c7ed1c061c4cb5901",
"assets/assets/sounds/notification.ogg": "d928d619828e6dbccf6e9e40f1c99d83",
"assets/assets/sounds/phone.ogg": "5c8fb947eb92ca55229cb6bbf533c40f",
"assets/assets/sounds/call.ogg": "7e8c646f83fba83bfb9084dc1bfec31e",
"assets/assets/favicon.png": "3ea6cdc2aeab08defd0659bad734a69b",
"assets/assets/logo.png": "d329be9cd7af685717f68e03561f96c0",
"assets/assets/logo.svg": "d042b70cf11a41f2764028e85b07a00a",
"main.dart.js_2.part.js": "5fa5b5c2b69898d78a1a10302df742e0",
"main.dart.js_254.part.js": "d3a41f9aa68470e50bb2d1c1380546b3",
"main.dart.js_244.part.js": "8a770a1831ef0f053f32e9124077bcbb",
"main.dart.js_272.part.js": "e5c898c855611d988c7062edbe5b09e1",
"main.dart.js_262.part.js": "aba56e39d446026de05509dc45bf43db",
"main.dart.js_192.part.js": "29ec7b685b2b25e2e32dd2fecfec3a8c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js_296.part.js": "4bfb01ea25d0c820027750b0f6289250"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
