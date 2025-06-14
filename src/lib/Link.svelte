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
    // 全てダミーリンク（Yahoo!）で埋める
    const newLinks = [];
    for (let i = 0; i < n; i++) {
      newLinks.push({ 
        href: "https://www.yahoo.co.jp/", 
        target, 
        rel 
      });
    }
    // ランダムな位置に本物のリンクを1つだけ配置
    newLinks[Math.floor(Math.random() * n)] = { href, target, rel };
    links = newLinks;
  });
</script>

<div class="links">
  {#each links as link}
    <a href={link.href} target={link.target} rel={link.rel}>■</a>
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
    gap: 0.2rem;

    a {
      display: inline-block;
      background-color: #1a0dab;
      color: #1a0dab;
      text-decoration: none;
      font-size: 0.8rem;
      line-height: 1;
      width: 12px;
      height: 12px;
      text-align: center;

      &:visited {
        background-color: #681da8;
        color: #681da8;
      }

      &:hover {
        background-color: #0000ee;
        color: #0000ee;
      }
    }
  }
</style>
