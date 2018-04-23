<template>
    <div class="header">
        <div class="nav">
            <ul>
                <li><router-link :to="{name:'Index'}">首页</router-link></li>
                <li><router-link :to="{name:'Category'}">分类</router-link></li>
                <li><router-link :to="{name:'Archive'}">归档</router-link></li>
                <li><a href="https://github.com/waqcathy/blog_project">github</a></li>
            </ul>
            <div class="search-box">
                <el-input size="mini">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // activeIndex: "1"
        };
    },
    methods: {
        /* handleSelect(key, keyPath) {
            console.log(key, keyPath);
        } */
    }
};
</script>
<style scoped>
.header{
    box-sizing: border-box;
    padding: 0 60px;
}
.nav>ul>li{
    height: 30px;
    line-height: 30px;
    margin: 15px 0 10px;
    float: left;
    width: 50px;
}
.nav>ul>li>a{
    /* font-size: 14px; */
    color: #999;
}
.search-box{
    margin-top: 15px;
    width: 240px;
    float: right;
}
</style>