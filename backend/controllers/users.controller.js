
const client = require('../config/database')
module.exports = async function (req,res){

    try
    {
   await client.connect();

   client.query(`SELECT * FROM users`,(err,result)=>{
       if(!err){
           res.status(200).json(result.rows);
      }
       else{
           console.log("db got some err: ",err);
       }
   })

    }catch (e) {
        console.log("posting Err: ",e.message)
        res.status(500).send(e.message);
    }
}