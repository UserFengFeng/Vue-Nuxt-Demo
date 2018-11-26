<template>
  <div>
    <!-- <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add
        :addComment="addComment"/>
      <list
        :comments="comments"
        :deleteComment="deleteComment" />
    </div> -->
    OneInterContent
  </div>
</template>
<script>
import Add from '../../components/OneInterContent/Add.vue'
import List from '../../components/OneInterContent/List.vue'
export default {
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        { user: 'people', content: 'react真不错' },
        { user: 'big', content: 'react一般般' },
        { user: 'small', content: 'So Easy' }
      ]
    }
  },

  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },

    deleteComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>
