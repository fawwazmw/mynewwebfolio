<template>
  <section class="portfolio-carousel section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">My Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Our featured <span class="fw-200">projects</span>
          </h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="work-swiper-auto">
        <Swiper
            id="content-carousel-container-unq-work"
            class="swiper-container"
            :modules="[Navigation]"
            :slides-per-view="3"
            :space-between="30"
            :speed="500"
            :loop="false"
            :navigation="{
            nextEl: '.swiper-arrow-control .swiper-button-next',
            prevEl: '.swiper-arrow-control .swiper-button-prev',
          }"
        >
          <SwiperSlide v-for="item in portfolioData" :key="item.id"> <!-- Use id as unique key -->
            <div class="item">
              <div class="img">
                <img :src="item.img" :alt="item.title" />
              </div>
              <div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import data from '@/data/portfolios/works1.json';

// Use ref to define reactive portfolioData
const portfolioData = ref([]);

// Ensure data is assigned once in mounted hook
onMounted(() => {
  portfolioData.value = data;
});

// Swiper options without loop for debugging order
const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 500,
  loop: false,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
};
</script>

<style scoped>
/* Ensure Swiper arrows are visible and aligned properly */
.swiper-arrow-control .swiper-button-prev,
.swiper-arrow-control .swiper-button-next {
  cursor: pointer;
}
</style>
