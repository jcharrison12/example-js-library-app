<template>
  <div class="home">
    <div>
      <img src="/src/assets/cat1.png" />
      <img src="/src/assets/cat2.jpeg" />
    </div>
  </div>
</template>

<style></style>

<script>
import slick from "slick-carousel";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      sliderOptions: {
        dots: true,
        arrows: false,
        mobileFirst: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 3,
            },
          },
        ],
      },
    };
  },
  created: function () {
    this.initSlider();
  },
  methods: {
    initSlider() {
      slick(this.$(".home"), this.sliderOptions);
    },
  },
  updated() {
    this.$(".home").slick({
      autoplay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  },
  mounted() {},
};
</script>
