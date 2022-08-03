<script lang="ts">
  import ToggleCompleted from "./ToggleCompleted.svelte";
  import { createTodo } from "../stores/todo.store";

  let value = "";

  const handleReset = () => {
    value = "";
  };

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;
    if (value.length === 0) return;
    createTodo(value);
    handleReset();
  };
</script>

<div class="card rounded-md mt-8">
  <ToggleCompleted />
  <input
    aria-label="Create a new todo"
    type="text"
    on:blur={handleReset}
    on:keydown={handleSubmit}
    placeholder="Create a new todo..."
    bind:value
    class="card-content focus:outline-none placeholder:dark:text-dark-300"
  />
</div>
