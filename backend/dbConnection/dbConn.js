const pg = require('pg')
const db = new pg.Client('postgres://xyucngkd:UYMKRhNKmX8f09uzTx_DUwKQbAB92-fi@isilo.db.elephantsql.com/xyucngkd');

db.connect(function(err){
    if (err) {
      console.log("Database connection error");
      console.log(err)
    }else
    {
      console.log("Database connected successfully");
    }
  })

  module.exports = db;