<script>
import Navigation from "./components/Navigation.vue";
import Banner from "./components/Banner.vue";
import { RouterView, useRoute } from "vue-router";

export default {
  components: {
    Navigation,
    Banner,
    RouterView,
  },
  data() {
    return {
      color: "",
      flat: null,
      fab: null,
      page: "home",
    };
  },
  computed: {
    bannerVariant() {
      const route = this.$route;
      if (route.name === "download") return "download";
      return "home";
    },
  },
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<template>
  <VApp v-scroll="onScroll">
    <Navigation
      :color="color"
      :flat="flat"
      @changePage="
        (e) => {
          page = e;
          console.log(page);
        }
      "
    />
    <Banner :variant="bannerVariant" />
    <VMain class="pt-0">
      <RouterView :page="page" />
    </VMain>
    <!-- <div class="vignette"></div> -->
  </VApp>
</template>
<style scoped>
.v-application {
  background-color: rgba(84, 58, 183, 1);
  color: rgb(187, 174, 240);
  padding-bottom: 10vh;
}
</style>
