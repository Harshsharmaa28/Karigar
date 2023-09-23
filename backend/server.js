require('dotenv').config();

const express = require('express');
const {v4: uuidv4} = require('uuid');
const port = process.env.PORT;
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

//routes//
const registerUser = require('./routes/registerUser.routes')
const userRoute = require('./routes/users.routes')
const client = require("./config/database");

//serving routes//

app.use('/registerUser',registerUser);
app.use('/users',userRoute)


async function gen(){
console.log("uuid: ",typeof(await uuidv4()));
    app.get('/',async  (req,res)=>{
        try
        {
            await client.connect();

            client.query(`SELECT * FROM users`,(err,result)=>{
                if(!err){
                    res.status(200).json(result.rows);
                }
                else{
                    console.log("got the err: ",err);
                }
                client.end();
            })

        }catch (e) {
            console.log("posting Err: ",e.message)
            res.status(500).send(e.message);
        }
    })


}



app.listen(port,()=>{
    console.log('backend is running on port ',port);
})