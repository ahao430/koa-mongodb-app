<template>
  <div class="article-detail">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{path: '/article'}">文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{article.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form>
      <el-form-item :labelWidth="labelWidth" label="文章ID:">
        <el-row class="item-content">{{article._id}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="标题:">
        <el-row class="item-content">{{article.title}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="作者:">
        <el-row class="item-content">{{article.author}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="描述:">
        <el-row class="item-content">{{article.desc}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="类型:">
        <el-row class="item-content">{{types[article.type]}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="内容:">
        <el-row class="item-content">{{types[article.content]}}</el-row>
      </el-form-item>
    </el-form>
    <div class="btns">
      <el-button class="btn" type="primary" @click="handleBack">返回列表</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../../store/mutationTypes';

export default {
  name: 'article-detail',
  computed: {
    ...mapGetters({
      article: 'article'
    }),
  },
  data () {
    return {
      id: this.$route.params.id,
      labelWidth: '120px',
      types: ['DEFAULT']
    };
  },
  mounted () {
    this.getArticle();
  },
  methods: {
    getArticle () {
      this.$store.dispatch('getArticle', {
        _id: this.id,
      });
    },
    handleBack () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-content{
    word-break: break-all;
  }
  .btns{
    text-align: center;
  }
</style>
