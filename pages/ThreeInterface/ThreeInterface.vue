<template>
  <div class="">
    <three-inter-content :tabledata="tabledata" />
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import ThreeInterContent from '~/components/ThreeInterContent/index.vue'

export default {
  components: {
    ThreeInterContent
  },
  data() {
    return {
      tabledata: [],
    }
  },
  created() {
    axios
      .get('https://gist.githubusercontent.com/JoshuaYang/37ed2ca102efe190315c94b695e5833e/raw/136ea13c39867b40757625ddd99714f66ff89a13/fakeData.json')
      .then(response => {
        this.tabledata = response.data.list
      })

  }
}
</script>
<style>
</style>
