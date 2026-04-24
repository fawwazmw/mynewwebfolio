<template>
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Error />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from "@/components/dark/modern-agency/Footer";
import Lines from "@/components/dark/common/Lines";
import ProgressScroll from "@/components/dark/common/ProgressScroll";
import Cursor from "@/components/dark/common/cusor";
import Navbar from "@/components/dark/creative-agency/Navbar";
import Error from "@/components/dark/error404/Error";
import { onMounted } from "vue";

useHead({
  link: [
    { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/dark/assets/css/style.css" },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  // Header entrance animation (replaces loader reveal)
  gsap.from('header', { y: 200, duration: 0.8, ease: 'power2.out' });
  gsap.from('header .container', { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' });
});
</script>
