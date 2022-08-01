<script lang="ts">
  import "../app.css";
  import { theme } from "../stores/theme.store";
  import { onMount } from "svelte";

  let root: HTMLElement;
  onMount(() => {
    root = document.documentElement;
  });
  $: root && root.classList.toggle("dark", $theme === "dark");
</script>

<slot />
