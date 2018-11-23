<template>
  <div 
    class="col-md-4">
    <form 
      class="form-horizontal">
      <div 
        class="form-group">
        <label>用户名</label>
        <input
          v-model="user"
          type="text"
          class="form-control"
          placeholder="用户名">
      </div>
      <div 
        class="form-group">
        <label>评论内容</label>
        <textarea
          v-model="content"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        />
      </div>
      <div 
        class="form-group">
        <div 
          class="col-sm-offset-2 col-sm-10">
          <button
            type="button" 
            class="btn btn-default pull-right"
            @click="add">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addComment: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      user: '',
      content: ''
    }
  },
  methods: {
    add() {
      // 1.验证输入数据的合法性
      const user = this.user.trim()
      const content = this.content.trim()
      if (!user || !content) {
        alert('用户名或内容不能为空')
        return false
      }
      // 2.根据输入数据，存在对象里
      const comment = {
        user,
        content
      }

      // 3.添加到comments（重要强调，数据在哪就在哪做更新）
      this.addComment(comment)

      // 4.清除输入
      this.user = ''
      this.content = ''
    }
  }
}
</script>
<style>
</style>
