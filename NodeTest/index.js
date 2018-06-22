let express = require("express");
let bodyParser = require("body-parser");
let multipart = require('connect-multiparty');
let multer = require('multer');
let app = express();
let hostName = '127.0.0.1';
let port = 8080;
let responseData = {status:0,msg:"request success",data:""};

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multipart()); // for parsing multipart/form-data

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/get",function(req,res){
    console.log("req.query===",req.query);
    responseData.data = req.query;
    res.send(responseData);
})

app.post("/post",function(req,res){
    console.log("req.body===",req.body);
    responseData.data = req.body;
    res.send(responseData);
});
app.post("/get_coupon",function(req,res){
    console.log("req.body===",req.body);
    responseData.data = req.body;
    res.send(responseData);
});
app.post("/form_data",function(req,res){
    console.log("req.body===",req.body);
    responseData.data = req.body;
    res.send(responseData);
});

app.get("/extensionSearch",function(req,res){
    let productData = require("./products");
    console.log("req.body===",req.query);
    productData.operation = req.query && req.query.operate;
    responseData.data = productData;
    if(req.query.operate === "dp" && req.query.keywords === "1111111111111"){
        responseData.data = {
            "product":{}
        };
    }
    setTimeout(function(){res.send(responseData);},2000);
});

app.listen(port,hostName,function(){

    console.log(`Node sever running at http://${hostName}:${port}`);

});