<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <!-- <Blog /> -->
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from "@/components/dark/common/Lines";
import ProgressScroll from "@/components/dark/common/ProgressScroll";
import Cursor from "@/components/dark/common/cusor";
import LoadingScreen from "@/components/dark/common/loader";
import About from "@/components/dark/home-freelancer/About";
import Blog from "@/components/dark/home-freelancer/Blog";
import Contact from "@/components/dark/home-freelancer/Contact";
import Footer from "@/components/dark/home-freelancer/Footer";
import Header from "@/components/dark/home-freelancer/Header";
import Navbar from "@/components/dark/home-freelancer/Navbar";
import Portfolio from "@/components/dark/home-freelancer/Portfolio";
import Services from "@/components/dark/home-freelancer/Services";
import Skills from "@/components/dark/home-freelancer/Skills";
import Testimonials from "@/components/dark/home-freelancer/Testimonials";
import { onMounted } from "vue";

useHead({
  link: [
    { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/dark/assets/css/style.css" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Wardaya DEV Developer",
        url: "https://dev.wardaya.my.id",
        image: "https://dev.wardaya.my.id/og-image.jpg",
        sameAs: [
          "https://github.com/fawwazmw",
          "https://linkedin.com/in/fawwazmw",
        ],
        jobTitle: "Frontend Developer & Web Designer",
        worksFor: {
          "@type": "Organization",
          name: "Wardaya DEV",
        },
        description:
          "Professional Frontend Developer specializing in Vue.js, Nuxt.js, and modern web technologies",
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Wardaya DEV Portfolio",
        url: "https://dev.wardaya.my.id",
        description: "Professional Frontend Developer & Web Designer Portfolio",
        inLanguage: "en-US",
      }),
    },
  ],
});

useSeoMeta({
  title: "Wardaya DEV | Frontend Developer & Web Designer Portfolio",
  ogTitle: "Wardaya DEV | Frontend Developer & Web Designer Portfolio",
  description:
    "Professional Frontend Developer & Web Designer Portfolio. Specialized in Vue.js, Nuxt.js, and modern web technologies. Creating responsive, SEO-friendly, and high-performance web applications.",
  ogDescription:
    "Professional Frontend Developer & Web Designer Portfolio. Specialized in Vue.js, Nuxt.js, and modern web technologies.",
  ogImage: "https://dev.wardaya.my.id/og-image.jpg",
  twitterCard: "summary_large_image",
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
