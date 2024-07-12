<svelte:options customElement="old-access-counter" />

<script lang="ts">
  import { onMount } from "svelte";

  export let count = "0";
  // 5桁にする
  $: countStr = count.toString().padStart(6, "0");

  onMount(() => {
    const countNum = Number(count);
    count = (countNum + 1).toString();
  });
</script>

<div class="access-counter">
  <p class="counter">あなたは<span>{countStr}</span>番目の訪問者です</p>
  <p class="discription">キリ番を踏んだ方はBBSに書き込みをお願いします</p>
  <p class="alert">※踏み逃げは厳禁です</p>
</div>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .access-counter {
    width: 100%;
    text-align: center;

    .counter {
      font-size: 2rem;
      font-weight: bold;

      span {
        // アクセスカウンター風のデザイン
        background-color: #333;
        color: #f2f2f2;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin: 0 0.5rem;
      }
    }

    .discription {
      font-size: 1rem;
      font-weight: bold;
      margin-top: 10px;
    }

    .alert {
      font-size: 2rem;
      font-weight: bold;
      color: red;
    }
  }
</style>
