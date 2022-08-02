<script lang="ts">
  import { todos, updateTodosOrder } from "../stores/todo.store";
  import { dragAndDrop } from "../helpers/dragAndDrop.helpers";
  import { filter } from "../stores/filter.store";
  import { flip } from "svelte/animate";
  import { slide } from "svelte/transition";
  import TodoItem from "./TodoItem.svelte";

  $: filteredTodos = (() => {
    if ($filter === "active") {
      return $todos.filter((todo) => !todo.completed);
    } else if ($filter === "completed") {
      return $todos.filter((todo) => todo.completed);
    } else {
      return $todos;
    }
  })();
</script>

<ul use:dragAndDrop class="bg-light-100 dark:bg-dark-600 rounded-t-md">
  {#each filteredTodos as todo, index (todo.id)}
    <li
      draggable="true"
      out:slide|local={{ duration: 300 }}
      in:slide|local={{ duration: 300 }}
      animate:flip={{ duration: 300 }}
      class="cursor-move"
    >
      <TodoItem {todo} />
    </li>
  {/each}
</ul>
