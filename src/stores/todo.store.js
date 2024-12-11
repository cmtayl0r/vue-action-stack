import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  // 01 State
  state: () => ({
    todoList: [],
    id: 0,
  }),
  // 02 Getters
  getters: {
    getTodoList() {
      return this.todoList;
    },
  },
  // 03 Actions (mutating state)
  actions: {
    addTodo(item) {
      // Push the new todo item to the todo list state with a unique id
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      // Filter out the item with the given id from the todo list
      // and update the todo list
      this.todoList = this.todoList.filter((item) => item.id !== itemId);
    },
    toggleCompleted(itemId) {
      // Find the item with the given id from the todo list and update the completed status
      // if the item id is equal to the itemId, then return the item with the completed status toggled
      // else return the item as is
      this.todoList = this.todoList.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      );
    },
  },
});
