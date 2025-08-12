<template>
  <section id="builds">
    <main>
      <div class="d-flex flex-column justify-end align-center">
        <h1
          class="text-h2 animated"
          style="transform: translate3d(0, -15vh, 0); margin-bottom: 10vh"
        >
          Latest development builds
        </h1>
        <p style="transform: translate3d(0, -20vh, 0)">
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
