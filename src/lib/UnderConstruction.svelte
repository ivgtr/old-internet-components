<svelte:options customElement="old-under-construction" />

<script lang="ts">
export let variant = "classic"; // "classic" | "animated" | "neon"
export let message = "工事中";
export let showIcon = true;
</script>

<div class="under-construction {variant}">
  {#if showIcon}
    <div class="icon">
      🚧
    </div>
  {/if}
  <div class="message">
    {message}
  </div>
  <div class="sub-message">
    Under Construction
  </div>
  {#if variant === "animated"}
    <div class="animated-bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  {/if}
</div>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .under-construction {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    font-family: "MS ゴシック", "MS Gothic", monospace;
    border: 3px double #000;
    background: repeating-linear-gradient(
      45deg,
      #ffff00,
      #ffff00 10px,
      #ff0000 10px,
      #ff0000 20px
    );

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      animation: bounce 2s infinite;
    }

    .message {
      font-size: 2rem;
      font-weight: bold;
      color: #000;
      text-shadow: 2px 2px 0px #fff;
      margin-bottom: 0.5rem;
    }

    .sub-message {
      font-size: 1.2rem;
      font-weight: bold;
      color: #000;
      text-shadow: 1px 1px 0px #fff;
    }

    &.animated {
      background: #000;
      border: 3px solid #ffff00;

      .message, .sub-message {
        color: #ffff00;
        text-shadow: 0 0 5px #ffff00;
      }

      .animated-bars {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;

        .bar {
          width: 20px;
          height: 40px;
          background: linear-gradient(0deg, #ff0000, #ffff00);
          animation: bar-animation 1s ease-in-out infinite;

          &:nth-child(1) { animation-delay: 0s; }
          &:nth-child(2) { animation-delay: 0.3s; }
          &:nth-child(3) { animation-delay: 0.6s; }
        }
      }
    }

    &.neon {
      background: #000;
      border: 2px solid #ff00ff;
      box-shadow: 
        0 0 10px #ff00ff,
        inset 0 0 10px #ff00ff;

      .message {
        color: #ff00ff;
        text-shadow: 
          0 0 5px #ff00ff,
          0 0 10px #ff00ff,
          0 0 15px #ff00ff;
        animation: neon-pulse 2s ease-in-out infinite alternate;
      }

      .sub-message {
        color: #00ffff;
        text-shadow: 
          0 0 3px #00ffff,
          0 0 6px #00ffff;
      }

      .icon {
        filter: 
          drop-shadow(0 0 5px #ff00ff)
          drop-shadow(0 0 10px #ff00ff);
      }
    }

    &.classic {
      background: #c0c0c0;
      border: 3px outset #c0c0c0;

      .message, .sub-message {
        color: #000;
        text-shadow: 1px 1px 0px #fff;
      }
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes bar-animation {
    0%, 100% {
      transform: scaleY(0.5);
    }
    50% {
      transform: scaleY(1);
    }
  }

  @keyframes neon-pulse {
    from {
      text-shadow: 
        0 0 5px #ff00ff,
        0 0 10px #ff00ff,
        0 0 15px #ff00ff;
    }
    to {
      text-shadow: 
        0 0 10px #ff00ff,
        0 0 20px #ff00ff,
        0 0 30px #ff00ff;
    }
  }
</style>