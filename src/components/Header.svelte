<script lang="ts">
  import { theme, toggleTheme } from "../stores/theme.store";
  import moon from "../assets/icon-moon.svg";
  import sun from "../assets/icon-sun.svg";

  $: src = $theme === "dark" ? sun : moon;
</script>

<header class="flex items-center justify-between py-12">
  <h1 class="uppercase text-light-100 dark:text-dark-100 text-3xl font-bold tracking-[0.25em]">Todo</h1>
  <button type="button" class="p-2" on:click={toggleTheme}>
    <img {src} alt="" class="w-6 sm:w-auto" />
  </button>
</header>
