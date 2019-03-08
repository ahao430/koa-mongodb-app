<template>
  <div class="v-header">
    <div class="toggle-sidebar" @click="handleToggleSidebar">
      <i class="fa fa-navicon"></i>
    </div>
    <div class="logo">LOGO</div>
    <div class="user">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <ul class="panel">
        <li @click="handleSetting">账户设置</li>
        <li @click="handleLogout">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/mutationTypes';

export default {
  computed: {
    ...mapGetters(['languages', 'admin'])
  },
  data () {
    return {
      avatar: require('@/assets/img/avatar_1.png')
    };
  },
  mounted () {},
  methods: {
    handleToggleSidebar () {
      this.$store.commit(types.TOGGLE_SIDEBAR);
    },
    handleSetting () {
      this.$router.push('/setting');
      this.$store.commit(types.SET_CUR_SIDEBAR_INDEX, '');
    },
    handleLogout () {
      this.$store.commit(types.LOGOUT);
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/color';

.v-header{
  width: 100%;
  height: 70px;
  display: flex;
  background: $white;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 999;
  .toggle-sidebar{
    padding: 15px;
    cursor: pointer;
  }
  .logo{

  }
  .user{
    height: 70px;
    position: relative;
    &:hover{
      .panel{
        display: block;
      }
    }
    .avatar{
      padding: 10px 15px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .panel{
      position: absolute;
      right: 0;
      width: 80px;
      top: 100%;
      padding: 10px 20px;
      display: none;
      background: $white;
      text-align: center;
      li{
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:hover{
          color: $blue;
        }
      }
    }
  }
}
</style>
