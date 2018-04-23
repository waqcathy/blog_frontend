import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/pages/index'],resolve)
const Article = resolve => require(['@/pages/article'],resolve)
const Category = resolve => require(['@/pages/category'],resolve)
const Archive = resolve => require(['@/pages/archive'],resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/post/:id',
      name: 'Article',
      component: Article
    }
  ]
})
