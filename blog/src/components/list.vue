<template>
    <div class="list">
        <ul>
            <li v-for="article in list" :key="article.id">
                    <h2 ><router-link :to="{name:'Article',params:{id:article.id}}">{{article.title}}</router-link></h2>
                    <div class="excerpt">{{article.excerpt}}</div>
                    <p>
                        <!-- <span>{{article.author}}</span> -->
                        <span>{{article.modified_time | time}}</span>
                        <span><i class="el-icon-view"></i>阅读{{article.views}}</span>
                        <span><i class="el-icon-edit"></i>评论{{article.comments}}</span>
                    </p>
            </li>
        </ul>
    </div>
</template>
<script>
import api from '@/service/api'
export default {
    data() {
        return {
            list:[]
        };
    },
    methods: {
        init() {
            api.article_list({}).then((res)=>{
                this.list = res.data
            });
        }
    },
    created() {
        this.init();
    }
};
</script>
<style scoped>
.list {
    padding: 10px 15px;
    background-color: #fff;
    box-sizing: border-box;
    width: 800px;
    /* background-color: #F2F6FC; */
}
.list>ul>li{
    border-bottom: 2px solid #f8f9fa;
    padding:5px 0;
}
.list>ul>li>h2{
font-size: 18px;
font-weight: bold;
}
.list>ul>li>p{
    font-size: 14px;
    color:#777;
}
.excerpt{
    color:#777;
}
</style>