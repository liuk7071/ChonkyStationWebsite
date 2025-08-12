<template>
  <div>
    <VAppBar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-md-15"
      :class="{ expand: flat }"
    >
      <VAppBarNavIcon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isMobile"
      />
      <div v-if="!isMobile">
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
    <VNavigationDrawer
      v-model="drawer"
      app
      temporary
      :width="220"
      class="mobile-drawer"
      v-if="isMobile"
    >
      <VList>
        <VListItem>
          <RouterLink :to="{ name: 'home' }" @click="drawer = false">
            <VListItemTitle>Home</VListItemTitle>
          </RouterLink>
        </VListItem>
        <VListItem>
          <RouterLink :to="{ name: 'get-started' }" @click="drawer = false">
            <VListItemTitle>Get Started</VListItemTitle>
          </RouterLink>
        </VListItem>
        <VListItem>
          <RouterLink :to="{ name: 'download' }" @click="drawer = false">
            <VListItemTitle>Download</VListItemTitle>
          </RouterLink>
        </VListItem>
      </VList>
    </VNavigationDrawer>
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

.mobile-drawer :deep(a .v-list-item-title) {
  font-size: 18px;
}

.mobile-drawer {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(18px) !important;
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08) !important;
  border-radius: 0px 12px 12px 0px !important;
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
    drawer: false,
    isMobile: window.innerWidth < 850,
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 850;
      if (!this.isMobile && this.drawer) {
        this.drawer = false;
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
