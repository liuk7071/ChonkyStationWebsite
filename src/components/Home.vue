<template>
  <section id="about">
    <main>
      <v-row class="mb-2">
        <!-- Left Column -->
        <v-col cols="12" sm="6" class="animated fadeInLeft banner">
          <div>
            <a
              href="https://github.com/liuk7071/ChonkyStation3"
              target="_blank"
            >
              <img
                src="/src/assets/img/logo_chonk3.png"
                alt="Banner"
                class="img-zoom"
              />
            </a>
          </div>
        </v-col>
        <!-- Right Column -->
        <v-col cols="12" sm="6" class="animated fadeInRight aboutText">
          <h2>About the project</h2>
          <p class="mb-2">
            <a
              href="https://github.com/liuk7071/ChonkyStation3"
              target="_blank"
            >
              ChonkyStation3
            </a>
            is a new work-in-progress emulator for the PlayStation 3.<br />
            This is a hobby project I'm developing for fun and to learn.<br />
            <b>You should not use this to actually play games. </b>
            <span class="text-caption ff-body">At least not for now.</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="aboutText">
        <v-col cols="12">
          <h3 class="text-center">
            Join the Discord to stay updated on the latest progress reports!
          </h3>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <a class="img-zoom" href="https://discord.gg/YU2yjP5jvS">
              <img
                src="https://discord.com/api/guilds/1351277918726262954/widget.png?style=banner2"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </main>
  </section>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
}

.banner img {
  box-shadow: 0 0 10px rgba(0, 204, 255, 0.842);
  width: 125%;
}

.aboutText {
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 900px) {
  .banner img {
    width: 100%;
  }
}
</style>
