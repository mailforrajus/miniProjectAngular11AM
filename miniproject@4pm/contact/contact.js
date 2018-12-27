var express = require("express");
var fs = require("fs");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if( token == prop.token ){
        fs.readFile("C:/Users/india/Desktop/miniproject@4pm/static/sample.json",
                            function(err,data){
            res.send(data);
        });
    }else{
        res.send("UnAuthorized User...!");
    }
});
module.exports = router;