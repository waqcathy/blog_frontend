<template>
  <div class="index">
      <page-list></page-list>
      <page-aside></page-aside>
  </div>
</template>
<script>
import pageList from '@/components/list.vue'
import pageAside from '@/components/aside.vue'
export default{
    components:{pageList,pageAside},
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style scoped>
.index{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
</style>