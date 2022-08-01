<script lang="ts">
  import "../app.css";
  import { theme } from "../stores/theme.store";
  import { onMount } from "svelte";
  import bgDesktopDark from "../assets/bg-desktop-dark.jpg";
  import bgDesktopLight from "../assets/bg-desktop-light.jpg";
  import bgMobileDark from "../assets/bg-mobile-dark.jpg";
  import bgMobileLight from "../assets/bg-mobile-light.jpg";

  // Handle light/dark theme
  let root: HTMLElement;
  onMount(() => {
    root = document.documentElement;
  });
  $: root && root.classList.toggle("dark", $theme === "dark");

  // Handle hero img
  let innerWidth = 0;
  $: isMobile = innerWidth < 480;
  $: src = isMobile
    ? $theme === "dark"
      ? bgMobileDark
      : bgMobileLight
    : $theme === "dark"
    ? bgDesktopDark
    : bgDesktopLight;
</script>

<svelte:window bind:innerWidth />

<img {src} alt="" class="absolute -z-50 h-[200px] xs:h-[300px] object-cover" />

<slot />
