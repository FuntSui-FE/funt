/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d9bb89950dc2afd13b25a1031b66d35"
  },
  {
    "url": "API/install.html",
    "revision": "58c02cfb82db314865c6a6b905aa45cb"
  },
  {
    "url": "API/loading.html",
    "revision": "6a812a3beedd4bd0d565f6c306d804ce"
  },
  {
    "url": "API/start.html",
    "revision": "ac6025482016632e984a0b295e9aa03a"
  },
  {
    "url": "assets/css/0.styles.48da3786.css",
    "revision": "7a17ffd4ecc668aff704e6075baa5594"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4d942548.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.bbe7c0ab.js",
    "revision": "66656713296096dcc9de72973febb001"
  },
  {
    "url": "assets/js/4.5f86d0a2.js",
    "revision": "64c27f1afe76db0cb7b72ab3ad46b27b"
  },
  {
    "url": "assets/js/5.73013188.js",
    "revision": "508fc258292b2f2602dc6f20e1389d5d"
  },
  {
    "url": "assets/js/6.022ff095.js",
    "revision": "58eb570732c293783b37400d8f5c72c1"
  },
  {
    "url": "assets/js/7.8d91baad.js",
    "revision": "bef5713b9c657f68bb7451ea8c5522f0"
  },
  {
    "url": "assets/js/8.dd9aa7ea.js",
    "revision": "34ac8bcb9db8d0a61c3d03a52f813c50"
  },
  {
    "url": "assets/js/9.943c71b8.js",
    "revision": "243df0dd9d2900e03a63271da61d9261"
  },
  {
    "url": "assets/js/app.0ed1ee47.js",
    "revision": "46bfe12990c9ac762d15f3f66027dda7"
  },
  {
    "url": "funt.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "03036ed7d669ce3c1b35ebb8af72b0f4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
