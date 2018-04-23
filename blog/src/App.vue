<template>
  <div id="app">
    <el-container>
      <el-header>
        <page-head></page-head>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <!-- <el-footer>
        <page-foot></page-foot>
      </el-footer> -->
    </el-container>

  </div>
</template>

<script>
import pageHead from '@/components/header.vue'
import pageFoot from '@/components/footer.vue'
export default {
    name: "App",
    components:{pageHead,pageFoot}
     
};
</script>
<style scoped>

</style>
