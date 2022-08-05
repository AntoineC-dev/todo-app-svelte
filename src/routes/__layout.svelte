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

<main>
  <img {src} alt="" class="absolute top-0 left-0 w-full -z-50 h-clamp-x-bg object-cover" />

  <slot />
</main>

<footer class="mt-auto mb-2 text-center text-sm font-normal text-light-400">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
  <a
    href="https://github.com/AntoineC-dev"
    class="text-sm font-bold bg-gradient-to-tl text-transparent from-purple to-cyan bg-clip-text">Antoine C</a
  >.
</footer>
