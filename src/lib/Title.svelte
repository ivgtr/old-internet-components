<svelte:options customElement="old-title" />

<p class="title">
  <span>
    <slot />
  </span>
</p>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .title {
    span {
      font-size: 1.5rem;
      // 文字色を虹色に
      background: linear-gradient(
        90deg,
        #f00,
        #ff0,
        #0f0,
        #0ff,
        #00f,
        #f0f,
        #f00
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-style: italic;
      -webkit-text-stroke: 1px #fff;
      text-stroke: 1px #fff;
    }
  }
</style>
