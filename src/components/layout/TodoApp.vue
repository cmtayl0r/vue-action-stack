<template>
  <div>
    <h1>Todo App</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from "@/components/features/TodoForm.vue";
import TodoList from "@/components/features/TodoList.vue";
</script>

<style lang="scss" scoped></style>
