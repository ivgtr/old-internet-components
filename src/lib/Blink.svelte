<svelte:options customElement="old-blink" />

<script lang="ts">
  export let speed = 1000; // milliseconds
  export let color = "#ff0000";
  export let size = "1rem";
  export let bold = true;
</script>

<span class="blink-text" class:bold style="color: {color}; font-size: {size}; animation-duration: {speed}ms;">
  <slot />
</span>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .blink-text {
    display: inline;
    font-family: "MS ゴシック", "MS Gothic", monospace;
    animation: classic-blink 1000ms steps(2, start) infinite;

    &.bold {
      font-weight: bold;
    }
  }

  @keyframes classic-blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
</style>