<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodos="addTodos"/>
      <todo-list :todos="todos" :deleteTodos="deleteTodos" />
      <todo-footer :todos="todos" :delectCompleteTodos="delectCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from '../../components/TwoInterContent/TodoHeader.vue'
import TodoList from '../../components/TwoInterContent/TodoList.vue'
import TodoFooter from '../../components/TwoInterContent/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },

  data() {
    return {
      todos: [
        { title: '吃饭', complete: false },
        { title: '睡觉', complete: true },
        { title: '打豆豆', complete: false }
      ]
    }
  },
  methods: {
    deleteTodos(index) {
      this.todos.splice(index, 1)
    },

    delectCompleteTodos() {
      this.todos = this.todos.filter(item => !item.complete)
    },

    selectAllTodos(isCheck) {
      this.todos.forEach(todo => todo.complete = isCheck)
    },

    addTodos(todo) {
      this.todos.unshift(todo)
      console.log(this.todos, '-----------');
      
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
