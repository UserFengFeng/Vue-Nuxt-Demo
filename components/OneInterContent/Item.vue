<template>
  <li class="list-group-item">
    <p class="user">{{ comment.user }}说:</p>
    <p class="centence">{{ comment.content }}</p>
    <button @click="deleteItem">删除</button>
    <!-- <div class="handle">
      <a
        href="javascript:;"
        @click="deleteItem">删除
      </a>
    </div> -->
  </li>
</template>

<script>
export default {
  props: ['comment', 'index', 'deleteComment'],
  methods: {
    deleteItem() {
      const { comment, index, deleteComment } = this
      if (window.confirm(`您要确定要删除${comment.name}的评论吗`)) {
        deleteComment(index)
      }
    }
  }
}
</script>
<style>
li {
  transition: 0.5s;
  overflow: hidden;
}

/* .handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
} */

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
