var mongoose=require('mongoose')
var schema=mongoose.Schema;
var empschema=new schema({
    eid:String,
    name:String,
    salary:{type:Number,required:true}
})
var empmodel=mongoose.model("employee",empschema)
module.exports=empmodel;