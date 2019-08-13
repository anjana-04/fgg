var express=require("express")
var router=express.Router()
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
var url="mongodb://localhost/sdb"
var emp=require('../model/employee');
router.use(bodyparser.urlencoded({extended:true}))
mongoose.connect(url,function(err){
    if(err) throw err
    else
    console.log("database connected")
})
router.get("/view",function(req,res){
    res.send("employee add page")
})
router.post("/add",function(req,res){
    var e1=new emp()
    e1.eid=req.body.eid
    e1.name=req.body.ename
    e1.salary=req.body.salary
    e1.save(function(err){
        if(err) throw err
        else{
            res.send("data added.....")
        }
    })
    res.send("employee detail added")
})
module.exports=router;