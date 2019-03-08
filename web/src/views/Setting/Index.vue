<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../../store/mutationTypes';

export default {
  name: '',
  computed: {
    ...mapGetters([]),
  },
  data () {
    return {};
  },
  mounted () {},
  methods: {
    handleSelectLanguage (lang) {
      // ajax请求
      this.$store.commit(types.SET_ADMIN, {
        ...this.admin,
        lang: lang,
      });
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss">

</style>
