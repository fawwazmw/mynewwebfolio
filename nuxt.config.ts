import { fileURLToPath } from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  typescript: {
    shim: false,
  },

  nitro: {},

  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },

  app: {
    head: {
      title: "Wardaya DEV | Full Stack Developer & Web Designer Portfolio",
      titleTemplate: "%s - Wardaya DEV",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "keywords",
          content:
            "full stack developer, web developer, web designer, vue developer, nuxt developer, javascript developer, frontend developer, backend developer, UI UX designer, portfolio website, web development services, wardayadev.my.id, wardaya dev developer, indonesia web developer",
        },
        {
          name: "description",
          content:
            "Professional Full Stack Developer & Web Designer Portfolio. Specialized in Vue.js, Nuxt.js, and modern web technologies. Creating responsive, SEO-friendly, and high-performance web applications.",
        },
        {
          name: "author",
          content: "Wardaya DEV",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://dev.wardaya.my.id/",
        },
        {
          property: "og:title",
          content:
            "Wardaya DEV | Full Stack Developer & Web Designer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Professional Full Stack Developer & Web Designer Portfolio. Specialized in Vue.js, Nuxt.js, and modern web technologies.",
        },
        {
          property: "og:image",
          content: "https://dev.wardaya.my.id/og-image.jpg",
        },
        {
          property: "og:site_name",
          content: "Wardaya DEV",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://dev.wardaya.my.id/",
        },
        {
          name: "twitter:title",
          content:
            "Wardaya DEV | Full Stack Developer & Web Designer Portfolio",
        },
        {
          name: "twitter:description",
          content:
            "Professional Full Stack Developer & Web Designer Portfolio. Specialized in Vue.js, Nuxt.js, and modern web technologies.",
        },
        {
          name: "twitter:image",
          content: "https://dev.wardaya.my.id/og-image.jpg",
        },
        // Additional SEO
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "msapplication-TileColor",
          content: "#000000",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/dark/assets/imgs/logo-tab-wardayadev.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/dark/assets/imgs/logo-tab-wardayadev.png",
        },
        { rel: "canonical", href: "https://dev.wardaya.my.id/" },
        { rel: "manifest", href: "/manifest.json" },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
        },
      ],
      script: [
        { src: "/dark/assets/js/plugins.js" },
        { src: "/dark/assets/js/TweenMax.min.js" },
        { src: "/dark/assets/js/charming.min.js" },
        { src: "/dark/assets/js/countdown.js" },
        { src: "/dark/assets/js/ScrollTrigger.min.js" },
        { src: "/dark/assets/js/gsap.min.js" },
        { src: "/dark/assets/js/splitting.min.js" },
        { src: "/dark/assets/js/isotope.pkgd.min.js" },
        { src: "/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js" },
        { src: "/dark/assets/js/ScrollSmoother.min.js" },
        // { src: '/showcase/dark/assets/js/anime.min.js' },
        { src: "/dark/assets/js/scripts.js", defer: true },
      ],
    },
  },

  css: ["swiper/css/bundle", "@/styles/globals.css"],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },

  compatibilityDate: "2024-09-23",
});
