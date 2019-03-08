<template>
  <div class="v-sidebar" :style="{
    width: isSidebarOpen ? '180px' : '60px'
  }">
    <el-menu
      :default-active="curSidebarIndex"
      class="sidebar"
    >
      <el-menu-item
        v-for="(nav, index) in navs"
        :key="index"
        :index="index + ''"
        @click="handleSelect(nav, index)"
      >
        <i :class="['fa', nav.icon]"></i>
        <span class="menu-title" v-show="isSidebarOpen">{{nav.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import * as types from '../store/mutationTypes';

export default {
  computed: {
    ...mapGetters(['curSidebarIndex', 'isSidebarOpen']),
    navs () {
      return [
        {
          url: '/user',
          title: '用户',
          icon: 'fa-user',
        },
        {
          url: '/article',
          title: '文章',
          icon: 'fa-text-width',
        },
      ];
    }
  },
  data () {
    return {
    };
  },
  methods: {
    handleSelect (nav, index) {
      this.$router.replace(nav.url);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/color';

.v-sidebar{
  height: 100%;
  transition: width linear 0.3s;
  .sidebar{
    width: 100%;
    height: 100%;
    background: #304156;
    color: #fff;
    .menu-title{
      padding-left: 10px;
    }
    .el-menu-item{
      color: #fff;
      i{
        color: #fff;
      }
      background: transparent;
      &.is-active,
      &:hover{
        color: $blue;
        i{
          color: $blue;
        }
      }
      &:hover{
        background: rgba(0,0,0,0.2);
      }
    }
  }
}
</style>
