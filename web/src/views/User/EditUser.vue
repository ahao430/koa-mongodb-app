<template>
  <div class="edit-user">
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{path: '/user'}">用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>用户详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form>
      <el-form-item v-if="user.id" :labelWidth="labelWidth" label="用户ID:">
        <el-row class="item-content">{{user._id}}</el-row>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="用户名:">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="密码:">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="手机号:">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="性别:">
        <el-radio-group v-model="user.sex">
          <el-radio :label="0">保密</el-radio>
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="签名:">
        <el-input type="textarea" v-model="user.signature"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="生日:">
        <el-date-picker
          v-model="user.birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item :labelWidth="labelWidth" label="头像:">
        <ul class="avatar-list">
          <li :class="{
            'avatar-item': true,
            'active': index + '' === user.avatar
          }" v-for="(avartar,index) in avartaList" :key="index" @click="handleSelectAvatar(index)"><img :src="avartar" alt=""></li>
        </ul>
      </el-form-item>
    </el-form>
    <div class="btns">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import * as types from '../../store/mutationTypes';

export default {
  name: 'edit-user',
  computed: {
    ...mapGetters({
      userData: 'user',
    }),
  },
  data () {
    return {
      id: this.$route.params.id,
      labelWidth: '120px',
      avartaList: [
        require('../../assets/img/avatar_1.png'),
        require('../../assets/img/avatar_2.png'),
        require('../../assets/img/avatar_3.png'),
        require('../../assets/img/avatar_4.png'),
      ],
      user: {
        name: '',
        password: '',
        phone: '',
        sex: 0,
        signature: '',
        birthday: '',
        avatar: '0',
      },
    };
  },
  watch: {
    userData (val) {
      console.log(val);
      this.user = val;
    },
  },
  mounted () {
    if (this.id) {
      this.getUser();
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser', {
        _id: this.id,
      });
    },
    handleSelectAvatar (index) {
      this.user.avatar = index + '';
    },
    // dialog按钮
    handleConfirm () {
      if (this.id) {
        this.$store.dispatch('updateUser', this.user);
      } else {
        this.$store.dispatch('addUser', this.user);
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
  .avatar-list{
    display: flex;
    .avatar-item{
      margin-right: 20px;
      &.active img{border: 3px solid #66b1ff;}
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
</style>
