var express = require("express");
var mongodb = require("mongodb");
var prop = require("../config/db_properties");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if( token == prop.token ){
        nareshIT.connect("mongodb://localhost:27017/angular4pm",
                                                            function(err,db){
            db.collection("products").find().toArray(function(err,array){
                res.send(array);
            });
        });
    }else{
        res.send("UnAuthorized User...!");
    }
});
module.exports = router;