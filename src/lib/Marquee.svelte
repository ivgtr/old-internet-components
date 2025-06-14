<svelte:options customElement="old-marquee" />

<script lang="ts">
import { onMount } from "svelte";

let textRef: HTMLParagraphElement;
export let scrollamount = 400;
let direction = scrollamount === 0 ? 0 : scrollamount / Math.abs(scrollamount);
$: w = 0;
$: speed = Math.abs(scrollamount) / w;

onMount(() => {
	const textEl = textRef;
	if (!textEl) return;
	let textPositon = w * direction;
	textEl.style.transform = `translateX(${textPositon}px)`;

	let requestId: number;
	const marquee = () => {
		textPositon -= speed * direction;
		if (direction > 0 && textPositon < -textEl.clientWidth) {
			textPositon = w;
		} else if (direction < 0 && textPositon > w) {
			textPositon = -textEl.clientWidth;
		}
		textEl.style.transform = `translateX(${textPositon}px)`;
		requestId = requestAnimationFrame(marquee);
	};

	marquee();

	return () => {
		cancelAnimationFrame(requestId);
	};
});
</script>

<div bind:clientWidth={w} class="marquee">
  <p bind:this={textRef}>
    <slot />
  </p>
</div>

<style lang="scss">
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  .marquee {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;

    p {
      display: inline-block;
      white-space: nowrap;
    }
  }
</style>
