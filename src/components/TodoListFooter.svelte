<script lang="ts">
  import { deleteCompletedTodos, todos } from "../stores/todo.store";
  import { scale, slide } from "svelte/transition";
  import { filter as currentFilter, filters, setFilter } from "../stores/filter.store";
  $: activeTodoCount = $todos.filter((todo) => !todo.completed).length;
</script>

{#if $todos.length !== 0}
  <div
    in:scale={{ duration: 300 }}
    out:slide={{ duration: 300 }}
    class="text-light-400/80 dark:text-dark-400 grid grid-flow-row gap-4 relative"
  >
    <div class="text-xs card px-3 rounded-b-md justify-between">
      <span class="p-2 ">{activeTodoCount} items left</span>
      <button
        aria-label="Delete completed todos"
        type="button"
        disabled={$todos.length - activeTodoCount === 0}
        on:click={() => deleteCompletedTodos()}
        class="p-2 rounded-md focus-outline [@media(hover:hover)]:hover:enabled:text-light-500 dark:[@media(hover:hover)]:hover:enabled:text-dark-200 disabled:text-light-300 dark:disabled:text-dark-500"
        >Clear completed</button
      >
    </div>
    <div
      class="card text-[13px] font-bold rounded-md justify-center sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:shadow-none"
    >
      {#each filters as filter, index (index)}
        <button
          disabled={$currentFilter === filter}
          type="button"
          on:click={() => setFilter(filter)}
          class="p-1 rounded-md focus-outline capitalize disabled:text-blue [@media(hover:hover)]:hover:enabled:text-light-500 dark:[@media(hover:hover)]:hover:enabled:text-dark-200 transition-colors"
          >{filter}</button
        >
      {/each}
    </div>
  </div>
{/if}
