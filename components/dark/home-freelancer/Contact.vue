<template>
  <section
    class="contact-crev section-padding bord-thin-bottom bord-thin-top"
    id="section-6"
    data-scroll-index="6"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head md-mb80">
            <h6 class="sub-title main-color mb-15 wow fadeInUp">
              Get In Touch
            </h6>
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text">
                Let's make your brand
                <span class="fw-200">brilliant!</span>
              </span>
            </h2>
            <p class="mt-10">
              If you would like to work with me or just want to get in touch,
              I’d love to hear from you!
            </p>
            <div class="phone fz-30 fw-600 mt-80 underline main-color">
              <a href="https://wa.me/+6289527374152">+62 895 2737 4152</a>
            </div>
            <ul class="rest social-text d-flex mt-40">
              <li class="mr-30">
                <a
                  href="https://www.facebook.com/FawwazMufidW"
                  class="hover-this"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="hover-anim">Facebook</span>
                </a>
              </li>
              <li class="mr-30">
                <a
                  href="https://x.com/didegamers123?t=SiOrLUh-lgE3gHE2w96StA&s=08"
                  class="hover-this"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="hover-anim">X</span>
                </a>
              </li>
              <li class="mr-30">
                <a
                  href="https://www.linkedin.com/in/fawwaz-mufid-wardaya/"
                  class="hover-this"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fwzmwrdy?igsh=MWx5dW9uMXhycWJtbw=="
                  class="hover-this"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <form id="contact-form" @submit.prevent="sendMessageToWhatsApp">
              <div class="messages"></div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label for="contact-name" class="visually-hidden">Name</label>
                    <input
                      id="contact-name"
                      v-model="formData.name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-label="Your name"
                      required
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label for="contact-email" class="visually-hidden">Email</label>
                    <input
                      id="contact-email"
                      v-model="formData.email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      aria-label="Your email"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <label for="contact-subject" class="visually-hidden">Subject</label>
                    <input
                      id="contact-subject"
                      v-model="formData.subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      aria-label="Subject"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="contact-message" class="visually-hidden">Message</label>
                    <textarea
                      id="contact-message"
                      v-model="formData.message"
                      name="message"
                      placeholder="Message"
                      aria-label="Your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Let's Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function sendMessageToWhatsApp() {
  const { name, email, subject, message } = formData;

  const whatsappMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${
    subject || "No Subject"
  }\nMessage: ${message}`;

  const whatsappURL = `https://wa.me/+6289527374152?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}
</script>
