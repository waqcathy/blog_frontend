<template>
    <div class="article">
        <div>
            <h3>{{article.title}}</h3>
            <section v-html="article.content" v-highlight></section>
        </div>
        <page-aside></page-aside>
    </div>
</template>
<script>
import api from "@/service/api";
import pageAside from "@/components/aside.vue";
export default {
    components: { pageAside },
    data() {
        return {
            article: {
                title: "",
                content: ""
            }
        };
    },
    methods: {
        init() {
            api.article_detail(this.$route.params.id).then(res => {
                this.article = res.data.post;
            });
        },
    },
    created() {
        // hljs.initHighlightingOnLoad();        
        this.init();
    }
};
</script>
<style scoped>
.article {
    box-sizing: border-box;
    display: flex;
    /* justify-content: space-between; */
}
</style>