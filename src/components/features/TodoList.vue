<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="todo in todoList" :key="todo.id" class="item">
        <div class="content">
          <!-- 
           Add class completed if todo.completed is true 
          -->
          <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
          <span @click.stop="toggleCompleted(todo.id)" class="completed-icon"
            >&#10004;</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodoListStore } from "@/stores/todo.store";
import { storeToRefs } from "pinia";

// Store
const store = useTodoListStore();

// We get the destructured todoList state from the store using storeToRefs
// and we maintain the reactivity of the todoList
const { todoList } = storeToRefs(store);

// Methods
// We don't need storeToRefs for destructuring the methods
const { toggleCompleted } = store;
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.completed {
  text-decoration: line-through;
}
.completed-icon {
  cursor: pointer;
}
</style>
