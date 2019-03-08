<template>
  <div class="article-list">
    <div class="header">
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btns">
        <el-button size="small" @click="handleAdd">添加</el-button>
        <el-button size="small" :disabled="checkedIds.length === 0" @click="handleBatchDel">批量删除</el-button>
      </div>
    </div>
    <div class="articles">
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
          prop="title"
          label="标题"
          width=""
        ></el-table-column>
        <el-table-column
          prop="author"
          label="作者"
        ></el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
        ></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
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
  name: 'article-list',
  computed: {
    ...mapGetters({
      list: 'articleList',
      total: 'articleTotal',
      pageNo: 'articlePageNo',
      pageSize: 'articlePageSize',
    }),
    checkedIds () {
      return this.checkedRows.map(row => row.id);
    }
  },
  data () {
    return {
      checkedRows: [],
    };
  },
  mounted () {
    this.getArticleList();
    this.$store.commit(types.SET_ARTICLE_ID, '');
  },
  methods: {
    // 获取文章列表
    getArticleList () {
      this.$store.dispatch('getArticleList', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      });
    },
    // 多选
    handleSelectionChange (val) {
      this.checkedRows = val;
    },
    // 操作
    handleAdd () {
      this.$router.push(`/article/add`);
    },
    handlePreview (row) {
      this.$router.push(`/article/detail/${row._id}`);
    },
    handleEdit (row) {
      this.$router.push(`/article/edit/${row._id}`);
    },
    handleDel (row) {
      let id = row.id;
      this.$confirm('删除文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('delArticle', {
          ids: [id]
        });
      });
    },
    handleBatchDel () {
      this.$confirm('删除文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('delArticle', {
          ids: this.checkedIds
        });
      });
    },
    // 页面
    handlePageNo (page) {
      this.$store.commit(types.SET_ARTICLE_PAGE_NO, page);
      this.getArticleList();
    },
    handlePageSize (size) {
      this.$store.commit(types.SET_ARTICLE_PAGE_SIZE, size);
      this.$store.commit(types.SET_ARTICLE_PAGE_NO, 1);
      this.getArticleList();
    },
    handlePrev () {
      this.$store.commit(types.SET_ARTICLE_PAGE_NO, this.pageNo - 1);
      this.getArticleList();
    },
    handleNext () {
      this.$store.commit(types.SET_ARTICLE_PAGE_NO, this.pageNo + 1);
      this.getArticleList();
    },
  },
};
</script>

<style lang="scss">
  .article-list{
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .breadcrumb{}
      .btns{}
    }
    .articles{}
    .pagination{
      // background: #fff;
      margin-top: 10px;
      text-align: right;
    }
  }
</style>
