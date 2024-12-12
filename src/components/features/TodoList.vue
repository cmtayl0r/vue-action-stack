<template>
  <div>
    <h1>List</h1>
    <ul>
      <li
        v-for="todo in todoList"
        :key="todo.id"
        :class="['todo__item', todo.completed ? 'completed-block' : '']"
      >
        <div class="content">
          <!-- 
           Add class completed if todo.completed is true 
          -->
          <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
          <div class="todo__actions">
            <span @click="deleteTodo(todo.id)" class="delete-icon"
              >&#10006;</span
            >
            <span @click.stop="toggleCompleted(todo.id)" class="completed-icon"
              >&#10004;</span
            >
          </div>
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

// State and Getters
// We get the destructured todoList state from the store using storeToRefs
// and we maintain the reactivity of the todoList
const { todoList } = storeToRefs(store);

// Methods
// We don't need storeToRefs for destructuring the methods
const { toggleCompleted, deleteTodo } = store;
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.todo__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  font-weight: 700;
  margin-bottom: 8px;

  &:last-child {
    border-bottom: none;
  }

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.completed-block {
  background-color: lightgreen !important;
}
.todo__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.completed {
  text-decoration: line-through;
}
.completed-icon {
  cursor: pointer;

  &:hover {
    color: green;
  }
}
.delete-icon {
  cursor: pointer;

  &:hover {
    color: red;
  }
}
</style>
