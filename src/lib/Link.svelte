<svelte:options customElement="old-link" />

<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLAttributeAnchorTarget } from "svelte/elements";

  export let href = "";
  export let target: HTMLAttributeAnchorTarget = "_blank";
  export let rel = "noopener noreferrer";
  export let n = 100;

  let links: {
    href: string;
    target: HTMLAttributeAnchorTarget;
    rel: string;
  }[] = [];

  onMount(() => {
    links = Array(n).fill({ href: "https://www.yahoo.co.jp/", target, rel });
    // ランダムな要素を正規のURLに入れ替える
    links[Math.floor(Math.random() * n)] = { href, target, rel };
  });
</script>

<div class="links">
  {#each links as { href, target, rel }, i}
    <a {href} {target} {rel}></a>
  {/each}
</div>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .links {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      background-color: #1a0dab;
      padding: 0.5rem;
      text-decoration: none;

      &:visited {
        background-color: #681da8;
      }
    }
  }
</style>
