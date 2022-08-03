<script lang="ts">
  import type { Todo } from "../types";
  import { toggleTodoCompleted } from "../stores/todo.store";
  import check from "../assets/icon-check.svg";

  export let todo: Todo | undefined = undefined;
  $: gradient =
    todo && todo.completed
      ? "completed-gradient"
      : "[@media(hover:hover)]:hover:hover-gradient-light dark:[@media(hover:hover)]:hover:hover-gradient-dark";
</script>

{#if todo !== undefined}
  <button
    aria-label={`Set todo to ${todo.completed ? "uncompleted" : "completed"}`}
    type="button"
    on:click|stopPropagation={() => todo && toggleTodoCompleted(todo.id)}
    class="border-2 border-light-200 dark:border-dark-500 w-clamp-toggle h-clamp-toggle flex justify-center items-center rounded-full shrink-0 {gradient}"
  >
    <img class:dark:hidden={todo && !todo.completed} src={check} alt="" class="w-clamp-x-check h-clamp-y-check" />
  </button>
{:else}
  <div
    class="border-2 border-light-200 dark:border-dark-500 w-clamp-toggle h-clamp-toggle flex justify-center items-center rounded-full shrink-0"
  />
{/if}
