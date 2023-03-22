const poolConnection = require("../dbConnection/dbConn");
const pool = poolConnection;


exports.doc =  (req, res)=>{

    const {user_id,doc} = req.body;

    pool.query('INSERT INTO documents (user_id,doc) VALUES ($1,$2)',[user_id,doc],(error, results) => 
    {
                if (error) 
                {
                    res.status(400).json({message:'Query failed'});
                }else
                {
                    res.status(200).json('succefully uploaded');
                }     
    })



}


exports.getdoc =  (req, res)=>{

    const id = parseInt(request.params.id)

    const sql = 'SELECT * FROM documents WHERE user_id = $1';
    pool.query(sql,[id],async (err, results)=>{
        
        if(err) 
            res.status(400).json('error');
        else{
            res.status(200).json(results.rows)
        }
    })

}