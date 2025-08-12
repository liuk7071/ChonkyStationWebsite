<template>
  <section id="hero">
    <main>
      <div class="header">
        <div
          class="inner-header d-flex flex-column justify-center align-center"
        >
          <div
            v-if="variant === 'download'"
            class="title d-flex flex-column justify-end align-center"
          >
            <h1 class="text-h2 animated fadeInDown">Download</h1>
            <h1 class="text-h2 moveChonkyStation">ChonkyStation3</h1>
          </div>
          <div v-else class="title d-flex flex-column justify-end align-center">
            <h1 class="text-h2 animated moveChonkyStationRev">
              ChonkyStation3
            </h1>
          </div>
        </div>

        <div class="github d-flex justify-center align-center">
          <a href="https://github.com/liuk7071/ChonkyStation3">
            <i class="fab fa-github fa-xl"></i>
          </a>
        </div>

        <div>
          <svg
            class="waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(0, 172, 193, 0.15)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(84, 58, 183, 0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(84, 58, 183, 0.8)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="7"
                fill="rgba(84, 58, 183, 1)"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="content d-flex justify-center align-center">
        <p v-if="variant === 'download'" class="moveUp">
          A PlayStation 3 Emulator
        </p>
        <p v-else class="moveDown">A PlayStation 3 Emulator</p>
      </div>
      <div
        v-if="variant === 'download'"
        class="content d-flex justify-center align-center"
      >
        <p class="animated fadeInUp platformText">
          for Windows, Mac and Linux.
        </p>
      </div>
    </main>
  </section>
</template>

<style scoped>
@keyframes moveChonkyStation {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, 10vh, 0);
  }
}

@keyframes moveChonkyStationRev {
  0% {
    transform: translate3d(0, 10vh, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveToUp {
  0% {
    transform: translate3d(0px, 0px, 0);
  }

  100% {
    transform: translate3d(0px, -5vh, 0);
  }
}

@keyframes moveToDown {
  0% {
    transform: translate3d(0px, -5vh, 0);
  }

  100% {
    transform: translate3d(0px, 0px, 0);
  }
}

@keyframes moveToUpPlatformText {
  0% {
    transform: translate3d(0px, 0px, 0);
  }

  100% {
    transform: translate3d(0px, -20vh, 0);
  }
}

.moveChonkyStation {
  animation-name: moveChonkyStation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.moveChonkyStationRev {
  animation-name: moveChonkyStationRev;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.moveUp {
  animation-name: moveToUp;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.moveDown {
  animation-name: moveToDown;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.platformText {
  animation-name: moveToUpPlatformText;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.title {
  height: 10vh;
}

@media screen and (max-width: 850px) {
  .text-h2 {
    font-size: 3.45rem !important;
  }
}
</style>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "home",
    },
  },
};
</script>
