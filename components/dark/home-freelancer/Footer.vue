<template>
  <footer class="min-footer sub-bg pt-30 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 md-mb15">
          <div class="logo icon-img-100">
            <img src="/dark/assets/imgs/logo-wardayadev.png" alt="Wardaya DEV Logo" />
          </div>
        </div>
        <div class="col-lg-4 order-md-3">
          <div class="text-center">
            <p class="fz-14">
              &copy; {{ currentYear }} Wardaya DEV is Proudly Powered by
              <span class="underline main-color">
                <a
                  href="https://www.instagram.com/fwzmwrdy?igsh=MWx5dW9uMXhycWJtbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Myself
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 order-md-2 md-mb15">
          <div class="links d-flex justify-content-end">
            <ul class="rest d-flex align-items-center">
              <li class="ml-30">
                <a href="javascript:void(0)" @click="scrollToContact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

function scrollToContact() {
  const section = document.getElementById('section-6');
  if (section) {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  }
}
</script>
