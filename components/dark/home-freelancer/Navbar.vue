<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a
        class="logo icon-img-100"
        href="javascript:void(0)"
        @click="scrollToSection(0)"
      >
        <img src="/dark/assets/imgs/logo-wardayadev.png" alt="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(0)"
            >
              <span class="rolling-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(1)"
            >
              <span class="rolling-text">Services</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(2)"
            >
              <span class="rolling-text">About</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(3)"
            >
              <span class="rolling-text">Skills</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(4)"
            >
              <span class="rolling-text">Portfolio</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(5)"
            >
              <span class="rolling-text">Testimonials</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(6)"
            >
              <span class="rolling-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

// Handle scroll event for navbar animation
function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

// Smooth scroll to specific section with an offset for the fixed navbar
function scrollToSection(id) {
  const section = document.getElementById(`section-${id}`);
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
  if (section) {
    const sectionTop = section.offsetTop - navbarHeight; // Subtract navbar height from section's top position
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

// Setup scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<style scoped>
/* Add your styles here for navigation, menu, etc. */
</style>
