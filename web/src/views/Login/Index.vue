<template>
  <div class="login">
    <el-form class="form" ref="form" :model="form" :rules="rules" label-width="150px">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.saveLogin" label="保存用户名和密码" @change="handleSaveLogin"></el-checkbox>
      </el-form-item>
      <el-row style="text-align: center;">
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Storage from '../../tools/storage';
import { mapGetters } from 'vuex';
import * as types from '../../store/mutationTypes';

export default {
  name: 'login',
  computed: {
    ...mapGetters(['isLogin']),
    rules () {
      return {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        }]
      };
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        saveLogin: false,
      },

    };
  },
  mounted () {
    let saveInfo = Storage.load('loginInfo');
    if (saveInfo) {
      this.form = saveInfo;
    }
  },
  methods: {
    handleLogin () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', {
            username: this.form.username,
            password: this.form.password,
          })
            .then(res => {
              this.$message.success('登录成功');
              this.$router.push('/user');
              this.$store.commit(types.SET_CUR_SIDEBAR_INDEX, '0');
            });
        } else {
          return false;
        }
      });
    },
    handleSaveLogin (val) {
      if (val) {
        Storage.save('loginInfo', this.form);
      } else {
        Storage.remove('loginInfo');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 200px;
  .form{
    width: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    background: #fff;
    padding: 100px;
    border-radius: 10px;
  }
}
</style>
