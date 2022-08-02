<script lang="ts">
  import { theme, toggleTheme } from "../stores/theme.store";
  import moon from "../assets/icon-moon.svg";
  import sun from "../assets/icon-sun.svg";

  $: src = $theme === "dark" ? sun : moon;
</script>

<header class="flex items-center justify-between relative">
  <h1 class="uppercase text-light-100 dark:text-dark-100 text-clamp-heading font-bold">Todo</h1>
  <button
    aria-label="Enable {$theme === 'dark' ? 'light' : 'dark'} theme"
    type="button"
    on:click={toggleTheme}
    class="absolute -right-2 top-1/2 -translate-y-1/2 p-2 rounded-md focus-outline"
  >
    <img {src} alt="" class="w-clamp-logo h-clamp-logo" />
  </button>
</header>
