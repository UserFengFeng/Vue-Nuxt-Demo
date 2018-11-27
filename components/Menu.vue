<template>
  <el-col :span="12">
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
    >

      <el-menu-item
        v-for="(item, index) in Menu"
        :key="index"
        :index="item.templete"
        v-show="!item.children"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>

      <el-submenu
        v-for="(item, index) in Menu"
        :key="index"
        :index="index"
        v-show="item.children"
      >

        <template slot="title">
          <i class="el-icon-location" />
          <span>{{item.name}}</span>
        </template>

        <el-menu-item-group
          v-for="(child, _index) in item.children"
          :key="_index"
        >
          <el-menu-item :index="child.templete">{{child.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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
