const sqlite3 = require("sqlite3").verbose()


const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(()=>{
  db.run(`
CREATE TABLE IF NOT EXISTS places (
id INTEGER PRIMARY KEY AUTOINCREMENT,
image TEXT,
name TEXT,
address TEXT,
address2 TEXT,
state TEXT,
city TEXT,
items TEXT
);
`) 



//  const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items

// ) VALUES (?,?,?,?,?,?,?);

//`
//   const values = ["https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//   "colectoria",
//   "Guilherme Gemballa, Jardim América",
//   "N° 260",
//   "Santa catarina",
//   "Rio do sul",
//   "Residuos eletronicos, Lampadas"]

//   function afterInsertData(err){
//     if (err){
//       return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }
    /* -->add dados<--  */ 


  //db.run(query, values, afterInsertData)

  

  //   /* -->consutar dados<--  */ 


  // db.all(`SELECT * FROM places`,function(err,rows){
  //   if(err){
  //     return console.log(err)
  //   }

  //   console.log("aqui estão seus registros")
  //   console.log(rows)
  // })


    /* -->deletar dados<--  */ 


  /*   db.run(`DELETE FROM places WHERE id = ?`,[3],function(err){
   if(err){
     return console.log(err)
   }
   console.log("registro deletado com sucesso ")
 }) */

  
})