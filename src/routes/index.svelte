<script lang="ts">
  import { todos } from "../stores/todo.store";
  import { slide } from "svelte/transition";
  import Header from "../components/Header.svelte";
  import TodoCreateForm from "../components/TodoCreateForm.svelte";
  import TodoList from "../components/TodoList.svelte";
  import TodoListFooter from "../components/TodoListFooter.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Todo app</title>
</svelte:head>

<div class="px-6 pb-11 pt-clamp-top-padding max-w-[38rem] mx-auto">
  <Header />
  <TodoCreateForm />
  <div class="mt-4 mb-8">
    <TodoList />
    <TodoListFooter />
  </div>
  <p out:slide={{ duration: 300 }} class="text-xs text-light-400 dark:text-dark-400 text-center">
    Drag and drop to reorder list
  </p>
</div>
