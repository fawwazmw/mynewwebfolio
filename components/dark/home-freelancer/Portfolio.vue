<template>
  <section class="portfolio-carsouel section-padding" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">My Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2>My featured <span class="fw-200">projects</span></h2>
        </div>
      </div>
      <div class="work-swiper-center">
        <Swiper 
          id="content-carousel-container-unq-work" 
          v-bind="swiperOptions"
          :navigation="{ 
            nextEl: '#portfolio-next-btn', 
            prevEl: '#portfolio-prev-btn' 
          }"
        >
          <SwiperSlide v-for="item in data" :key="item.id">
            <div class="item">
              <div class="img">
                <img :src="item.img" :alt="item.title" />
              </div>
              <div
                class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"
              >
                <div>
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.subTitle }}</p>
                </div>
                <div class="ml-auto">
                  <a :href="item.link" class="rmore" target="_blank">
                    <img
                      src="/dark/assets/imgs/arrow-right.png"
                      alt="Read more"
                      class="icon-img-20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        <!-- Floating Navigation Buttons -->
        <div class="floating-nav-buttons">
          <button id="portfolio-prev-btn" class="nav-btn prev-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button id="portfolio-next-btn" class="nav-btn next-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "@/data/portfolios/works1.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  speed: 1000,
  loop: false,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  navigation: true,
  breakpoints: {
    640: {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    1200: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 100,
      centeredSlides: true,
    },
  },
};
</script>

<style scoped>
.floating-nav-buttons {
  position: absolute;
  top: 40%;
  right: 20px;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  z-index: 10;
}

.nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.prev-btn {
  order: 1;
}

.next-btn {
  order: 2;
}

/* Ensure buttons don't interfere with swiper controls */
.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}

.work-swiper-center {
  position: relative;
}
</style>
