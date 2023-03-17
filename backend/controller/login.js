const poolConnection = require("../dbConnection/dbConn");
const pool = poolConnection;
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");

//sdj

exports.login =  (req, res)=>{
    
  const {email,password} = req.body;
  console.log(email +' '+ password)

  const sql = 'SELECT * FROM users WHERE email = $1';
  pool.query(sql,[email],async (err, results)=>{
      if(err) 
      res.status(400).json('invalid login details');
      else{
          if(results.rowCount == 0)
          {
            res.status(400).json('invalid login details');
          }else{
             
                const hash = results.rows[0].password;
                const match = await bcrypt.compare(password, hash);
              

                  if(!match)
                  {
                      res.status(400).json('invalid login details');

                  }else
                  {
                      const token = jwt.sign({
                              user_id: results.rows[0].user_id,
                              email: results.rows[0].email,
                              name: results.rows[0].name,
                              surname: results.rows[0].surname,
                              password: results.rows[0].password,
                            
                          },
                          '3745gyrdutyuub'
                          );
                          res.status(200).json({token:token,}); 
                 }
            
               
                  
              }

          

      }

  })  
}