<svelte:options customElement="old-title" />

<script lang="ts">
export let blink = true;
export let shadow = true;
export let color = "#ff0080";
</script>

<p class="title" class:blink class:shadow>
  <span style="color: {color}">
    <slot />
  </span>
</p>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .title {
    text-align: center;
    
    span {
      font-size: 1.8rem;
      font-weight: bold;
      font-family: "MS ゴシック", "MS Gothic", monospace;
      display: inline-block;
      position: relative;
    }

    &.shadow span {
      text-shadow: 
        2px 2px 0px #000,
        4px 4px 0px #666,
        6px 6px 8px rgba(0,0,0,0.3);
      transform: perspective(500px) rotateX(15deg);
    }

    &.blink span {
      animation: blink-animation 1.5s steps(2, start) infinite;
    }
  }

  @keyframes blink-animation {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
</style>
