<svelte:options customElement="old-sorry-japanese-only" />

<p>Sorry, this site is Japanese only!</p>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: red;
  }
</style>
