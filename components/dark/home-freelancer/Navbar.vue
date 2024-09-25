<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a
        class="logo icon-img-100"
        href="javascript:void(0)"
        @click="scrollToSection(0)"
      >
        <img src="/dark/assets/imgs/logo-fwzdev.png" alt="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
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
              <span class="rolling-text">Portfolio</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(4)"
            >
              <span class="rolling-text">Clients</span>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              @click="scrollToSection(5)"
            >
              <span class="rolling-text">Blog</span>
            </a>
          </li> -->
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
import { onMounted, onUnmounted, ref } from "vue";

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

// Hamenu toggle logic
const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector(".hamenu");
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = "-100%")
      : (hamenu.style.left = "0");
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector(".hamenu");

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = "-100%";
  }, 300);
}

// Dropdown menu handling
function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.remove("show");
}

function handleMouseEnter(event) {
  document.querySelectorAll("ul.main-menu li").forEach((item) => {
    item.classList.add("hoverd");
  });
  event.currentTarget.classList.remove("hoverd");
}

function handleMouseLeave() {
  document
    .querySelectorAll("ul.main-menu li")
    .forEach((item) => item.classList.remove("hoverd"));
}

function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector(".sub-menu");
  const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
  if (subMenu) {
    if (subMenu.classList.contains("sub-open") && SubMenu2 == null) {
      document.querySelectorAll(".sub-menu").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      subMenu.classList.remove("sub-open");
      subMenu.style.maxHeight = "0";
      subMenu.previousElementSibling.children[0].classList.remove("dopen");
    } else if (!subMenu.classList.contains("sub-open")) {
      if (SubMenu2 == null) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });

        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "450px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      } else {
        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "450px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }
}

function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
  if (SubMenu2) {
    if (SubMenu2.classList.contains("sub-open")) {
      event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      SubMenu2.classList.remove("sub-open");
      SubMenu2.style.maxHeight = "0";
      SubMenu2.previousElementSibling.children[0].classList.remove("dopen");
    } else if (!SubMenu2.classList.contains("sub-open")) {
      event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      SubMenu2.classList.add("sub-open");
      SubMenu2.style.maxHeight = "450px";
      SubMenu2.previousElementSibling.children[0].classList.add("dopen");
    }
  }
}
</script>

<style scoped>
/* Add your styles here for navigation, menu, etc. */
</style>
