<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted, getCurrentInstance } from "vue";
let { proxy } = getCurrentInstance();
onMounted(() => {
  if (isMobile()) {
    proxy.$router.replace("/h5");
  }
});

const isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
};
</script>
<style>
/* #app {
  text-align: center;
  color: var(--ep-text-color-primary);
} */
</style>
