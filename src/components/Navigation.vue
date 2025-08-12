<template>
  <div>
    <VAppBar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <VAppBarNavIcon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="false"
      />
      <div>
        <RouterLink :to="{ name: 'home' }">
          <VBtn text>
            <span class="mr-2 button">Home</span>
          </VBtn>
        </RouterLink>
        <RouterLink :to="{ name: 'get-started' }">
          <VBtn text>
            <span class="mr-2 button">Get Started</span>
          </VBtn>
        </RouterLink>
        <RouterLink :to="{ name: 'download' }">
          <VBtn text>
            <span class="mr-2 button">Download</span>
          </VBtn>
        </RouterLink>
      </div>
    </VAppBar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
  color: white !important;
}

.button {
  text-decoration: none;
  color: white;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}

.logo {
  max-width: 100%;
}

.bg-secondary {
  background-color: #3367bb !important;
}
</style>
<style>
.v-toolbar .v-toolbar__content {
  justify-content: left;
}
</style>
<script>
export default {
  inject: ["vuetify"],
  data: () => ({
    drawer: null,
    isXs: false,
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
