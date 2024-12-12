<template>
  <div>
    <form @submit.prevent="handleAddItem(todo)">
      <input
        v-model="todo"
        type="text"
        name="add-todo"
        id="add-todo"
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup>
// Imports
import { useTodoListStore } from "@/stores/todo.store"; // imports the store
import { ref } from "vue";

// Variables
const todo = ref(""); // makes todo reactive and initializes it with an empty string

// Store
const store = useTodoListStore(); // gets the store instance

// Methods
function handleAddItem(item) {
  if (item.trim() === "") return; // if the item is empty, return
  store.addTodo(item); // adds the item to the store via the addTodo method
  todo.value = ""; // resets the todo refvalue
}
</script>

<style lang="scss" scoped>
form {
  margin-bottom: 15px;
}
input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 50%;
}
</style>
