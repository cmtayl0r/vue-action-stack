<template>
  <div class="todo__app">
    <h1>Todo App</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from "@/components/features/TodoForm.vue";
import TodoList from "@/components/features/TodoList.vue";
</script>

<style lang="scss" scoped>
.todo__app {
  min-height: 100vh;
  width: 80vw;
  background-color: #f7f9fc;
}
</style>
