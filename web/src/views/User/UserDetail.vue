<template>
<div class="user-detail">
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{path: '/user'}">用户列表</el-breadcrumb-item>
    <el-breadcrumb-item>用户详情</el-breadcrumb-item>
  </el-breadcrumb>
  <el-form>
    <el-form-item :labelWidth="labelWidth" label="用户ID:">
      <el-row class="item-content">{{user._id}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="用户名:">
      <el-row class="item-content">{{user.name}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="密码:">
      <el-row class="item-content">{{user.password}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="手机号:">
      <el-row class="item-content">{{user.phone}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="性别:">
      <el-row class="item-content">{{sexList[user.sex]}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="签名:">
      <el-row class="item-content">{{user.signature}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="生日:">
      <el-row class="item-content">{{user.birthday}}</el-row>
    </el-form-item>
    <el-form-item :labelWidth="labelWidth" label="头像:">
      <el-row class="item-content">
        <img :src="avatarList[user.avatar]" alt="">
      </el-row>
    </el-form-item>
  </el-form>
  <div class="btns">
    <el-button class="btn" type="primary" @click="handleBack">返回列表</el-button>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
// import * as types from '../../store/mutationTypes';

export default {
  name: 'user-detail',
  computed: {
    ...mapGetters({
      user: 'user'
    }),
  },
  data () {
    return {
      id: this.$route.params.id,
      labelWidth: '120px',
      sexList: ['保密', '男', '女'],
      avatarList: [
        require('../../assets/img/avatar_1.png'),
        require('../../assets/img/avatar_2.png'),
        require('../../assets/img/avatar_3.png'),
        require('../../assets/img/avatar_4.png'),
      ],
    };
  },
  mounted () {
    this.getUser();
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser', {
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
