var express = require("express");
var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
    var token = req.body.token;
    if( token == prop.token ){
        connection.query("select * from products",
                                        function(err,recordsArray,fields){
            if(err){
                res.send({read:"fail"});
            }else{
                res.send(recordsArray);
            }
        });
    }
});
module.exports = router;