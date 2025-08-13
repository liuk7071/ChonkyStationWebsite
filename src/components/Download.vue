<template>
  <section id="builds">
    <main>
      <div
        class="d-flex flex-column justify-center align-center animated-section-header"
      >
        <h1
          class="text-h2 animated slideInUp"
          style="animation-delay: 0.2s; margin-bottom: 2vh"
        >
          Latest development builds
        </h1>
        <p class="animated slideInUp" style="animation-delay: 0.4s">
          No stable releases are available at the moment.
        </p>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card
              title="Windows"
              prepend-icon="mdi-microsoft-windows"
              text=""
              variant="tonal"
            >
              <v-card-actions>
                <v-btn
                  href="https://nightly.link/liuk7071/ChonkyStation3/workflows/windows/master/ChonkyStation3.zip"
                  >Download</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card
              title="macOS"
              prepend-icon="mdi-apple"
              text=""
              variant="tonal"
            >
              <v-card-actions>
                <v-btn
                  href="https://nightly.link/liuk7071/ChonkyStation3/workflows/macos/master/ChonkyStation3.zip"
                  >Download</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card
              title="Linux"
              prepend-icon="mdi-linux"
              text=""
              variant="tonal"
            >
              <v-card-actions>
                <v-btn
                  href="https://nightly.link/liuk7071/ChonkyStation3/workflows/linux/master/ChonkyStation3.zip"
                  >Download</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </section>
</template>
