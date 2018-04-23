import ajax from '@/service/ajax'

export default{
    article_list(data){
        return ajax.request('get','/api/article_list/',data)
    },
    article_detail(data){
        return ajax.request('get','/api/post/'+data)
    },
    archive(){
        return ajax.request('get','/api/archive/')
    },
    category(data){
        return ajax.request('get','/api/category/')
    },
}