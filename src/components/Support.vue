<template>
  <section id="links">
    <main>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <h1 class="text-center text-md-h2 text-h3 mb-2">
              Support ChonkyStation3
            </h1>
            <p
              class="text-caption ff-body font-italic text-center mb-3 supportText"
            >
              Help us continue developing ChonkyStation3 by supporting the
              project
            </p>
          </v-col>
          <v-col cols="12" md="5" class="animated fadeInUp banner" order-md="2">
            <div>
              <v-tooltip
                text="Support ChonkyStation3's development"
                location="top"
              >
                <template v-slot:activator="{ props }">
                  <v-img
                    v-bind="props"
                    :src="supportImg"
                    alt="Banner"
                    height="300px"
                    width="300px"
                    style="
                      filter: drop-shadow(0 0 2px #00ccff) brightness(0)
                        saturate(50%) invert(1) sepia(1) hue-rotate(180deg);
                    "
                  />
                </template>
              </v-tooltip>
            </div>
            <div class="support-links mt-4">
              <v-row>
                <v-col cols="12" lg="6" class="text-center">
                  <v-btn
                    href="https://patreon.com/ChonkyStation3"
                    target="_blank"
                    color="orange"
                    size="large"
                    prepend-icon="mdi-patreon"
                    class="ma-2"
                    block
                  >
                    Support on Patreon
                  </v-btn>
                </v-col>
                <v-col cols="12" lg="6" class="text-center">
                  <v-btn
                    href="https://ko-fi.com/ChonkyStation3"
                    target="_blank"
                    color="blue"
                    size="large"
                    prepend-icon="mdi-coffee"
                    class="ma-2"
                    block
                  >
                    Buy us a Coffee
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="7"
            class="animated fadeInUp supportText"
            order-md="1"
          >
            <p class="text-justify">
              ChonkyStation3 is an open-source project that relies on community
              support to continue development. <br />Your contributions help us
              dedicate more time to improving compatibility, performance, and
              adding new features. <br />
              Every contribution, no matter how small, makes a difference and
              helps us keep this project alive. Thank you for your support!
            </p>

            <p class="mt-4">
              ChonkyStation3 is and forever will be free and open-source,
              meaning that no release will ever be hidden behind a paywall.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </section>
</template>
<script setup>
import supportImg from "@/assets/img/support.png";
</script>
<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.supportText {
  color: rgb(255, 255, 255);
}

.support-links {
  margin: 2rem 0;
}
</style>
