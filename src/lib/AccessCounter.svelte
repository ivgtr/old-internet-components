<svelte:options customElement="old-access-counter" />

<script lang="ts">
  export let count = "0";
  export let style = "retro"; // "retro" | "digital" | "classic"
  
  $: countStr = count.toString().padStart(6, "0");
  $: digits = countStr.split("");
</script>

<div class="access-counter {style}">
  <p class="counter">
    あなたは
    <span class="digit-container">
      {#each digits as digit}
        <span class="digit">{digit}</span>
      {/each}
    </span>
    番目の訪問者です
  </p>
  <p class="description">キリ番を踏んだ方はBBSに書き込みをお願いします</p>
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
    font-family: "MS ゴシック", "MS Gothic", monospace;
    padding: 1rem;
    border: 3px outset #c0c0c0;
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);

    .counter {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .digit-container {
      display: inline-block;
      margin: 0 0.3rem;
      border: 2px inset #c0c0c0;
      background-color: #000;
      padding: 0.2rem;
    }

    .digit {
      display: inline-block;
      width: 1.2em;
      height: 1.8em;
      line-height: 1.8em;
      text-align: center;
      font-family: "Courier New", monospace;
      font-size: 1.4rem;
      font-weight: bold;
      color: #ff0000;
      background-color: #000;
      border: 1px solid #333;
      margin: 0 1px;
      text-shadow: 0 0 3px #ff0000;
    }

    .description {
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0.8rem 0 0.3rem;
      color: #000080;
    }

    .alert {
      font-size: 1.1rem;
      font-weight: bold;
      color: #ff0000;
      animation: blink-text 1s steps(2, start) infinite;
      text-decoration: underline;
    }

    &.digital {
      background: #001100;
      border: 3px solid #003300;
      
      .digit {
        color: #00ff00;
        background-color: #001100;
        text-shadow: 0 0 5px #00ff00;
        border: 1px solid #003300;
      }
      
      .digit-container {
        background-color: #001100;
        border: 2px inset #003300;
      }
    }

    &.classic {
      background: #ffffe0;
      border: 2px solid #000;
      
      .digit {
        color: #000;
        background-color: #fff;
        text-shadow: none;
        border: 1px solid #000;
        font-family: "Times New Roman", serif;
      }
      
      .digit-container {
        background-color: #fff;
        border: 1px solid #000;
      }
    }
  }

  @keyframes blink-text {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }
</style>
