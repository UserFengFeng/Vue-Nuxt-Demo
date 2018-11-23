<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="$route.path"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/OneInterface/oneinterface">选项1.1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="/TwoInterface/twointerface">
            <template slot="title">
              <i class="el-icon-menu" />
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/TwoInterface/twointerface">选项2.1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document" />
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/ThreeInterface/threeinterface">选项3.1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting" />
              <span>导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/FourInterface/fourinterface">选项4.1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-info" />
              <span>导航五</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/FiveInterface/fiveinterface">选项5.1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col
        :xs="20"
        :sm="20"
        :md="20"
        :lg="20">
        <el-breadcrumb>
          <el-breadcrumb-item>
            <nuxt/>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
export default {
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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.el-col-12 {
  width: 11%;
}
</style>
