<template>
  <el-col :span="12">
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in Menu">

        <el-menu-item
          v-if="!item.children"
          :key="index"
          :index="item.templete"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

        <el-submenu
          v-else
          :key="index"
          :index="item.name"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>

          <el-menu-item
            v-for="(child, sub) in item.children"
            :index="child.templete"
            :key="sub"
          >
            <span slot="title">{{child.name}}</span>
          </el-menu-item>
        </el-submenu>

      </template>

    </el-menu>
  </el-col>
</template>

<script>
import Menu from '../assets/router/config.js'
export default {
  data() {
    return {
      Menu
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-col-12 {
  width: 11%;
}
</style>
