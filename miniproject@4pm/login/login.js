var express = require("express");
var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
var prop = require("../config/db_properties");
var router = express.Router();
var my_fun = require("../token/token");
router.post("/",(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    connection.query("select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'",
                            function(err,recordsArray,fields){
        if(recordsArray.length>0){
            var token = my_fun({'uname':uname,'upwd':upwd},
                                'hr@nareshit.in');
            prop.token=token;
            res.send({"login":"success","token":token})
        }else{
            res.send({"login":"fail"});
        }
    });
});
module.exports = router;