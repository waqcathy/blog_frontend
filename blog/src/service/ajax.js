import axios from "axios";

export default {
    baseURL : "",
    request: function (method, url, data, async = true) {
        var config = {
            method:method,
            url:url,
            data:data
        }
       return new Promise(function(resolve,reject){
           axios(config).then(function(res){
               resolve(res.data)
           }).catch((err)=>{
                reject(err)
           });
       });
    }
}