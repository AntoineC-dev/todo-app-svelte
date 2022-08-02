<script lang="ts">
  import { deleteTodo } from "../stores/todo.store";
  import ToggleCompleted from "./ToggleCompleted.svelte";
  import cross from "../assets/icon-cross.svg";
  import type { Todo } from "../types";

  export let todo: Todo;
</script>

<div class="card border-b rounded-t-md group">
  <ToggleCompleted {todo} />
  <p
    class:line-through={todo.completed}
    class:text-light-300={todo.completed}
    class:dark:text-dark-400={todo.completed}
    class="card-content"
  >
    {todo.content}
  </p>
  <button
    aria-label="Delete todo"
    type="button"
    on:click|stopPropagation={() => deleteTodo(todo.id)}
    class="flex justify-center items-center shrink-0 p-1 rounded-full [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity"
  >
    <img src={cross} alt="" class="w-clamp-cross h-clamp-cross" />
  </button>
</div>
