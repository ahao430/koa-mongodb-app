<template>
  <el-container id="app">
    <router-view name="VFullpage" v-if="fullpage"/>
    <el-container v-if="!fullpage">
      <div class="app-page">
        <div class='app-sidebar'>
          <router-view name="VSidebar"></router-view>
        </div>
        <div class="app-main">
          <router-view name="VHeader"></router-view>
          <div class="app-content">
            <router-view name="VMain"></router-view>
          </div>
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      fullpage: false,
    };
  },
  watch: {
    $route (to, from) {
      if (to.name === 'login' || to.name === '404') {
        this.fullpage = true;
      } else {
        this.fullpage = false;
      }
    }
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  /deep/ {
    .app-page{
      width: 100%;
      height: 100%;
      display: flex;
      .app-main{
        flex: 1;
        display: flex;
        flex-direction: column;
        .app-content{
          flex: 1;
          width: 100%;
          padding: 15px;
          box-sizing: border-box;
          overflow: auto;
        }
      }
    }
  }
}
</style>
