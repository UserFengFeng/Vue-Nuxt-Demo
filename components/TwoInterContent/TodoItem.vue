<template>
  <li @mouseenter="handlerShow(true)" @mouseleave="handlerShow(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodos: Function
  },
  data() {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handlerShow(isdisplay) {
      if (isdisplay) {
        this.bgColor = 'gray'
        this.isShow = isdisplay
      } else {
        this.bgColor = 'white'
        this.isShow = isdisplay
      }
    },
    deleteTodo() {
      const { todo, index, deleteTodos } = this
      if (window.confirm(`您确定删除${todo.title}吗?`)) {
        deleteTodos(index)
      }
    }
  }
}
</script>

<style>
/*item*/
.todo-main li {
  list-style: none;
  height: 60px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

.todo-main li label {
  display: inline-block;
  cursor: pointer;
}

.todo-main li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

.todo-main li button {
  float: right;
  margin-top: 3px;
}

.todo-main li:before {
  content: initial;
}

.todo-main li:last-child {
  border-bottom: none;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>
