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
