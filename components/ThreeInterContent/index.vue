<template>
  <el-table
    :data="tabledata"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form
          label-position="left"
          inline
          class="demo-table-expand"
        >
          <el-form-item label="描述">
            <span>{{ props.row.comment }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column
      label="端口"
      prop="port"
    >
    </el-table-column>

    <el-table-column
      label="密码"
      prop="password"
    >
    </el-table-column>

    <el-table-column
      label="开始时间"
      prop="startDate"
    >
    </el-table-column>

    <el-table-column
      label="结束时间"
      prop="endDate"
    >
    </el-table-column>
  </el-table>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    tabledata: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
    }
  },
  created() {
    this.tabledata.map(item => {
      item.startDate = moment(item.startDate).format('YYYY-MM-DD')
      item.endDate = moment(item.endDate).format('YYYY-MM-DD')
    })
  }
}
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
