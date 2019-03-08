<template>
  <div class="edit-article">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{path: '/article'}">文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{id ? article.title : '新建'}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form>
      <el-form-item v-if="article.id" :labelWidth="labelWidth" label="文章ID:">
        <el-row class="item-content">{{article._id}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="标题:">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="作者:">
        <el-input v-model="article.author"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="分类:">
        <el-select v-model="article.type">
          <el-option v-for="(type, index) in types" :key="index" :label="type" :value="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="描述:">
        <el-input v-model="article.desc"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="内容:">
        <el-input type="textarea" v-model="article.content"></el-input>
      </el-form-item>

    </el-form>
    <div class="btns">
      <el-button class="btn" @click="handleCancel">取消</el-button>
      <el-button class="btn" type="primary" @click="handleConfirm">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../../store/mutationTypes';

export default {
  name: 'edit-article-dialog',
  computed: {
    ...mapGetters({
      articleData: 'article'
    }),
  },
  data () {
    return {
      id: this.$route.params.id,
      labelWidth: '120px',
      types: ['DEFAULT'],
      article: {
        name: '',
        type: '',
        private_list: [],
        ignore_public_list: [],
      },
      private_input: '',
      public_input: '',
    };
  },
  watch: {
    articleData (val) {
      console.log(val);
      this.article = val;
    },
  },
  mounted () {
    console.log(this.$route);
    if (this.id) {
      this.getArticle();
    } else {
      this.$store.commit(types.SET_ARTICLE, {});
    }
  },
  methods: {
    getArticle () {
      this.$store.dispatch('getArticle', {
        _id: this.id,
      });
    },
    // 保存
    handleConfirm () {
      if (this.id) {
        this.$store.dispatch('updateArticle', this.article);
      } else {
        this.$store.dispatch('addArticle', this.article);
      }
      this.$router.go(-1);
    },
    handleCancel () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .list{
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .btns{
    text-align: center;
  }
</style>
