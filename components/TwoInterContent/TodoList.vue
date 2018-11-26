<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" :deleteTodos="deleteTodos" />
    <h4 v-show="todos.length === 0">暂无数据</h4>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: {
    todos: Array,
    deleteTodos: Function
  },
  components: {
    TodoItem
  },
  data() {
    return {
    }
  }
}
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
