<template>
    <div class="archive">
        <ul>
            <li v-for="item in post_list" :key="item.id">{{item.title}}{{item.posts_num}}</li>
        </ul>
    </div>
</template>
<script>
import api from '@/service/api'
export default{
    data(){
        return {
            post_list:[]
        }
    },
    methods:{
        init(){
            api.archive().then(res=>{
               this.post_list = res.data
            });
        }
    },
    created(){
        this.init();
    }
}
</script>
<style scoped>

</style>
