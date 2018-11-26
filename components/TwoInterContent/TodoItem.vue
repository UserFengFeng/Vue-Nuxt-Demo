<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>xxxxx</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
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
  float: left;
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
  display: none;
  margin-top: 3px;
}

.todo-main li:before {
  content: initial;
}

.todo-main li:last-child {
  border-bottom: none;
}
</style>
