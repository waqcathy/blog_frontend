<template>
    <div class="category">
        <ul>
            <li v-for="item in categories" :key="item.id">{{item.name}}{{item.posts_num}}</li>
        </ul>
    </div>
</template>
<script>
import api from '@/service/api'
export default{
    data(){
        return {
            categories:[]
        }
    },
    methods:{
        init(){
            api.category().then(res=>{
                this.categories = res.data;
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
