# util

 1、获取url参数（单个）

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        return r != null ? decodeURI(r[2]) : null;
    }
 2、检测邮箱格式是否正确

    function CHECK_EMAIL(email):boolean{
        let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        email = email.replace(/(^\s+)|(\s+$)/g,"");
        return reg.test(email);
    }
3、创建随机字符串（32位）

```
function MAKE_RANDOM_ID(): string {
    let text: string = "";
    let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    for (let i = 0; i < 32; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
```

4、通过facebook，facebook messenger分享网页

***ps:facebook messenger分享网页必须有app_id,一个可用的app_id:166193257232747***

***ps:link最好是完整的以确保分享对话框的内容是正确的，包含协议，如 https://www.baidu.com***

```
function FACEBOOK_SHARE_COMMON(link:string="",type:string="facebook",app_id:string=""):void {
    if(!link){return throw new Error("The parameter link is required");}
    let facebookUrl:string = "";
    switch (type){
        case "messenger":
        	if(!app_id){return throw new Error("The parameter app_id is required");}
            facebookUrl = "https://www.facebook.com/dialog/send?app_id="+ app_id +"&link="+ link +"&redirect_uri="+ link;
            break;
        default:
            facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + link;
            break;
    }
    window.open(facebookUrl,'_blank','width=700,height=600,top=0,left=0');
}
```

5、AJAX（fetch）

***ps:暂时只支持 GET、POST请求***

***ps:目前 fetch只支持 microsoft Edge 13+、safari 10.1+、ios safari 10.3+、IE全部不支持，chrome和 firefox由于更新机制不需要考虑***

```
function AJAX(method:string,url:string,params:any){
    let options:Object = {
        method : method.toUpperCase()
    };

    switch (method.toUpperCase()){
        case "POST":
            let formData = new FormData();
            Object.keys(params).forEach(key=>{
                formData.append(key,params[key]);
            })
            options["body"] = formData;
            break;
        default:
            break;
    }
    
    return fetch(url,options)
        .then(response => {
            if (response.headers.get("content-type").indexOf("text/html") == 0) {
                return response.text();
            } else {
                return response.json();
            }
        })
        .catch(error=>{
            console.log(error);
            return error;
        })
}
```

6、时间格式化

```
function formatTime(format="yyyy-MM-dd hh:mm:ss",newDate=new Date()) {
    let date = {
        "M+": newDate.getMonth() + 1,
        "d+": newDate.getDate(),
        "h+": newDate.getHours(),
        "m+": newDate.getMinutes(),
        "s+": newDate.getSeconds(),
        "q+": Math.floor((newDate.getMonth() + 3) / 3),
        "S+": newDate.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}
```

*example:*

```
日期
formatTime("yyyy-MM-dd hh:mm:ss",new Date(2010,10,10,10,10,10));

时间戳
formatTime("yyyy-MM-dd hh:mm:ss",new Date(1529661299*1000));
```

7、获取变量类型

```
function classOf(variable) {
	if(variable === null) return "Null";
	if(variable === undefined) return "Undefined";
    return Object.prototype.toString.call(variable).slice(8,-1);
}
```