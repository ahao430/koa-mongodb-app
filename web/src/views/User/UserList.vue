<template>
  <div class="user-list">
    <div class="header">
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btns">
        <el-button size="small" @click="handleAdd">添加</el-button>
        <el-button size="small" :disabled="checkedIds.length === 0" @click="handleBatchDel">批量删除</el-button>
      </div>
    </div>
    <div class="users">
      <el-table
        :data="list"
        style="width: 100%"
         @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="_id"
          label="ID"
          width=""
        ></el-table-column>
        <el-table-column
          prop="name"
          label="用户名"
          width=""
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width=""
        ></el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="140">
          <template slot-scope="scope">
            <el-button @click="handlePreview(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDel(scope.row)" type="text" size="small">刪除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        :current-page="pageNo"
        :total="total"
        layout="sizes,prev,pager,next,total"
        :page-sizes="[10, 20, 50]"
        @current-change="handlePageNo"
        @size-change="handlePageSize"
        @prev-click="handlePrev"
        @next-click="handleNext"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../../store/mutationTypes';

export default {
  name: 'user-list',
  computed: {
    ...mapGetters({
      list: 'userList',
      total: 'userTotal',
      pageNo: 'userPageNo',
      pageSize: 'userPageSize',
    }),
    checkedIds () {
      return this.checkedRows.map(row => row._id);
    }
  },
  data () {
    return {
      company_id: '',
      checkedRows: [],
      types: ['Super User', 'Normal User', 'Viewer'],
      languages: ['English', 'Simplified Chinese', 'Traditional Chinese'],
    };
  },
  mounted () {
    this.getUserList();
  },
  methods: {
    // 获取用户列表
    getUserList () {
      this.$store.dispatch('getUserList', {
        company_id: this.company_id,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
    },
    // 查询
    handleSearch () {
      this.$store.commit(types.SET_COMPANY_ID, this.company_id);
      this.getUserList();
    },
    // 多选
    handleSelectionChange (val) {
      this.checkedRows = val;
    },
    // 操作
    handleAdd () {
      this.$router.push(`/user/add`);
    },
    handlePreview (row) {
      this.$router.push(`/user/detail/${row._id}`);
    },
    handleEdit (row) {
      this.$router.push(`/user/edit/${row._id}`);
    },
    handleDel (row) {
      let id = row._id;
      this.$confirm('删除用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('delUser', {
          ids: JSON.stringify([id])
        });
      });
    },
    handleBatchDel () {
      this.$confirm('删除用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('delUser', {
          ids: JSON.stringify(this.checkedIds)
        });
      });
    },
    handleCompany (row) {
      this.$router.push(`/company/detail/${row._id}`);
    },
    // 页面
    handlePageNo (page) {
      this.$store.commit(types.SET_USER_PAGE_NO, page);
      this.getUserList();
    },
    handlePageSize (size) {
      this.$store.commit(types.SET_USER_PAGE_SIZE, size);
      this.$store.commit(types.SET_USER_PAGE_NO, 1);
      this.getUserList();
    },
    handlePrev () {
      this.$store.commit(types.SET_USER_PAGE_NO, this.pageNo - 1);
      this.getUserList();
    },
    handleNext () {
      this.$store.commit(types.SET_USER_PAGE_NO, this.pageNo + 1);
      this.getUserList();
    },
  },
};
</script>

<style lang="scss">
  .user-list{
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .breadcrumb{}
      .company{
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          width: 100px;
        }
      }
      .btns{}
    }
    .users{}
    .pagination{
      // background: #fff;
      margin-top: 10px;
      text-align: right;
    }
  }
</style>
