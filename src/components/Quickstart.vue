<template>
  <section id="guide">
    <main>
      <v-container>
        <v-row>
          <!-- Left Column -->
          <v-col cols="12" class="animated fadeInUp banner">
            <div>
              <v-tooltip
                text="Read the full instructions on Github"
                location="top"
              >
                <template v-slot:activator="{ props }">
                  <a
                    href="https://github.com/liuk7071/ChonkyStation3/tree/master?tab=readme-ov-file#usage"
                    target="_blank"
                    v-bind="props"
                  >
                    <v-img
                      :src="quickstartImg"
                      alt="Banner"
                      class="img-zoom"
                      height="180px"
                      width="180px"
                      style="
                        filter: drop-shadow(0 0 2px #00ccff) brightness(0)
                          saturate(50%) invert(1) sepia(1) hue-rotate(180deg);
                      "
                    />
                  </a>
                </template>
              </v-tooltip>
            </div>
          </v-col>
          <!-- Right Column -->
          <v-col cols="12" class="animated fadeInUp aboutText">
            <h2 class="text-center">Get started with ChonkyStation3</h2>
            <p class="text-caption ff-body font-italic text-center mb-3">
              These instructions may change as ChonkyStation3's development
              progresses. For the most up to date instructions, visit the
              <a
                href="https://github.com/liuk7071/ChonkyStation3"
                target="_blank"
              >
                Github page
              </a>
            </p>
            <p>
              Run ChonkyStation3 once so it creates a “Filesystem” folder next
              to the executable. This holds the emulated PS3's virtual
              devices—mainly <code>dev_flash</code> and <code>dev_hdd0</code>,
              where your game files will go. Once the folder is ready, follow
              these steps to install games.
            </p>
            <h3 class="mt-2">Step 1 - Install the game files</h3>
            <p>
              Because ChonkyStation3 can't install <code>.pkg</code> packages
              itself, unpack them using a third-party tool (easiest is
              <a href="https://rpcs3.net/" target="_blank">RPCS3</a>). Install
              the game in RPCS3, then either copy its contents from
              <code>dev_hdd0/game/[TITLE ID]</code> into ChonkyStation3's
              matching folder, or symlink ChonkyStation3's
              <code>dev_hdd0</code> to RPCS3's to avoid duplicate copies.
            </p>
            <h3 class="mt-2">Step 2 - Decrypt the main executable</h3>
            <p>
              The game will now appear in ChonkyStation3's list, but won't
              launch until you decrypt the <code>EBOOT.BIN</code> file. In
              RPCS3, go to “Utilities > Decrypt PS3 binaries” and select
              <code>EBOOT.BIN</code> from the game's <code>USRDIR</code> folder.
            </p>
            <h3 class="mt-2">Step 3 - Decrypt any <code>.edat</code> files:</h3>
            <p>
              If the game contains <code>.edat</code> files, decrypt them the
              same way as <code>EBOOT.BIN</code>. Keep their original
              <code>.edat</code> extension for the decrypted versions, and
              rename—rather than delete—the encrypted originals so you have
              backups.
            </p>
            <h2 class="mt-3">Installing the PS3 system software</h2>
            <p>
              Installing the PlayStation 3 system software is required for games
              to work. You can follow RPCS3's quickstart guide to install it in
              their emulator. You should then decrypt (using the same method as
              step 2 and 3 in "Installing a game") the required .sprx files
              located inside <code>dev_flash/sys/external</code> and copy over
              the entire dev_flash folder to ChonkyStation3's filesystem. Make
              sure you copy the whole folder and not just the decrypted .prx
              files, because the folder contains other necessary system files.
              <a
                href="https://github.com/liuk7071/ChonkyStation3?tab=readme-ov-file#intalling-the-ps3-system-software"
                target="_blank"
              >
                This is the list of the required PRX files as of the latest
                commit
              </a>
            </p>
            <ul></ul>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </section>
</template>
<script setup>
import quickstartImg from "@/assets/img/usage.png";
</script>
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
