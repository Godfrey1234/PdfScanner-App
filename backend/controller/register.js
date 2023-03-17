const poolConnection = require("../dbConnection/dbConn");
const pool = poolConnection;
const bcrypt = require('bcrypt');



exports.register = async (req, res)=>{ 

const salt = await bcrypt.genSalt(10);

    
   
const { email,password,name,surname,confirm} = req.body;
  
        
   if(confirm === password){
    const hash = await bcrypt.hash(password, salt);


    const sql = 'SELECT * FROM users WHERE email = $1';
    pool.query(sql,[email],(err, results)=>{
        if(results.rowCount == 0)
        {
            
            pool.query('INSERT INTO users (name,surname,email,password) VALUES ($1,$2,$3,$4)',[name,surname,email,hash],(error, results) => 
            {
                if (error) 
                        {
                            res.status(400).json({message:'Query failed'});
                        }else
                        {
                            res.status(200).json('successfully registered');
                        }
                          
            })
        }else
        {
            res.status(200).json('user already registered');
        }
    });}else{
        res.status(400).json({message: 'Password dont match'});
    }

  }