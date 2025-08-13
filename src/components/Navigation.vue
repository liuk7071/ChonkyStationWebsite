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
        <RouterLink :to="{ name: 'support' }">
          <VBtn text>
            <span class="mr-2 button">Support</span>
          </VBtn>
        </RouterLink>
      </div>
      <VSpacer v-if="!isMobile" />
      <div v-if="!isMobile" class="social-icons">
        <VBtn icon href="https://youtube.com/@ChonkyStation3" target="_blank">
          <i class="fab fa-youtube fa-lg"></i>
        </VBtn>
        <VBtn icon href="https://discord.gg/YU2yjP5jvS" target="_blank">
          <i class="fab fa-discord fa-lg"></i>
        </VBtn>
        <VBtn
          icon
          href="https://github.com/liuk7071/ChonkyStation3"
          target="_blank"
        >
          <i class="fab fa-github fa-lg"></i>
        </VBtn>
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
        <VListItem>
          <RouterLink :to="{ name: 'support' }" @click="drawer = false">
            <VListItemTitle>Support</VListItemTitle>
          </RouterLink>
        </VListItem>
      </VList>
      <!-- Social icons at bottom of mobile drawer -->
      <div class="mobile-social-icons">
        <VBtn
          icon
          href="https://youtube.com/@ChonkyStation3"
          target="_blank"
          size="large"
        >
          <i class="fab fa-youtube fa-2x" style="color: #ff0000"></i>
        </VBtn>
        <VBtn
          icon
          href="https://discord.gg/YU2yjP5jvS"
          target="_blank"
          size="large"
        >
          <i class="fab fa-discord fa-2x" style="color: #5865f2"></i>
        </VBtn>
        <VBtn
          icon
          href="https://github.com/liuk7071/ChonkyStation3"
          target="_blank"
          size="large"
        >
          <i class="fab fa-github fa-2x" style="color: #000000"></i>
        </VBtn>
      </div>
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

.social-icons {
  display: flex;
  gap: 8px;
}

.social-icons .v-btn {
  color: white !important;
}

.mobile-social-icons {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  justify-content: center;
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
