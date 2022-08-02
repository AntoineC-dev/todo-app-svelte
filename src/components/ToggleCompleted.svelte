<script lang="ts">
  import type { Todo } from "../types";
  import { toggleTodoCompleted } from "../stores/todo.store";
  import check from "../assets/icon-check.svg";

  export let todo: Todo | undefined = undefined;
  $: gradient = todo && todo.completed ? "bg-gradient-to-tl from-purple to-cyan" : "";
</script>

<button
  aria-label={todo ? `Set todo to ${todo.completed ? "uncompleted" : "completed"}` : ""}
  type="button"
  disabled={!todo}
  on:click|stopPropagation={() => todo && toggleTodoCompleted(todo.id)}
  class="border border-light-200 dark:border-dark-500 w-clamp-toggle h-clamp-toggle flex justify-center items-center rounded-full shrink-0 {gradient}"
>
  <img
    class:dark:hidden={!todo || (todo && !todo.completed)}
    src={check}
    alt=""
    class="w-clamp-x-check h-clamp-y-check lg:w-3 lg:h-[10px]"
  />
</button>
