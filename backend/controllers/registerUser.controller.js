const {v4: uuidv4} = require('uuid');
const client = require('../config/database');
const hashing = require('../utils/hashing.util');
let isExist = true;
const registerUser = async function (req,res){

   await client.connect();
    const {name , phone, password} = req.body;
    const hpassword = await hashing(password);


    try
    {
        await client.connect();

        client.query(`INSERT INTO users (_uid,name,phone,password) VALUES($1,$2,$3,$4)`,[uuidv4(),name,parseInt(phone),hpassword],(err,result,)=>{
            if(!err){
                res.status(200).json(result);
            }
            else{
                console.log("got the err: ",err);
            }

        })

    }catch (e) {
        console.log("posting Err: ",e.message)
        res.status(500).send(e.message);
    }

}


module.exports=registerUser;
