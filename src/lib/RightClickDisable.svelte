<svelte:options customElement="old-right-click-disable" />

<script lang="ts">
  export let text = "右クリックは禁止されています";

  function rightClickDisable(e: MouseEvent) {
    e.preventDefault();
    alert(text);
  }
</script>

<svelte:window on:contextmenu|preventDefault={rightClickDisable} />
