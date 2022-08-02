<script lang="ts">
  import { todos } from "../stores/todo.store";
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

<div class="bg-light-100 dark:bg-dark-600 rounded-t-md">
  {#each filteredTodos as todo (todo.id)}
    <div out:slide={{ duration: 300 }} in:slide|local={{ duration: 300 }} animate:flip={{ duration: 300 }}>
      <TodoItem {todo} />
    </div>
  {/each}
</div>
