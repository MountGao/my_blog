//引入http模块
let http = require("http");
let querystring = require('querystring');

//设置主机名
let hostName = '127.0.0.1';
//设置端口
let port = 8080;
//创建服务
let server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    let responseData = {
        status: 0,
        msg:"request success",
        data:""
    };
    let reqErrorResponseData = {
        status: 404,
        msg:"The requested api does not exist, please check the error",
        data:""
    }
    if(req.method === "GET"){
        let parameter = getParameter(req.url);
        console.log("req===",parameter);
        if( parameter.url === "/get_coupon"){
            responseData.data = parameter.body;
        }


        if(!responseData.data) responseData = reqErrorResponseData;
        res.end(JSON.stringify(responseData));
    }

    if(req.method === "POST"){
        let reqBody = "";

        req.on("data", function (chunk) {
            reqBody += chunk;
        });
        req.on("end", function () {
            reqBody = querystring.parse(reqBody);
            console.log("req===",reqBody);
            if(req.url === "/post_test"){
                if(reqBody) responseData.data = reqBody;

            }

            if(!responseData.data) responseData = reqErrorResponseData;
            res.end(JSON.stringify(responseData));
        });


    }



});
//获取GET请求的参数
function getParameter(url) {
    let a = url.split("?")[0];
    let b = url.split("?")[1];
    let c = b?b.split("&"):[];
    let d = {};
    c.forEach(item=>{
        let key = item.split("=")[0];
        if(key) d[key] = item.split("=")[1]?item.split("=")[1]:"";
    })
    return {url:a,body:d}
}



server.listen(port,hostName,function(){
    console.log(`Node server running at http://${hostName}:${port}`);
});