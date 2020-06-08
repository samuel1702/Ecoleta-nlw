const express = require("express")
const server = express()


const db = require("./database/db")



server.use(express.static("public"))

//habilitar o uso do req.body

server.use(express.urlencoded({extended: true}))


const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
  express: server,
  noCache: true
})


server.get("/",(req,res) =>{
  return res.render("index.html")
})

server.get("/creat-point",(req,res) =>{
  
  /* -->req.query:query String da nossa url<-- */
  // console.log(req.query)



  return res.render("creat-point.html",)
})

server.post("/savepoint",(req,res) =>{

  /* -->req.body: corpo do nosso formulario<-- */
/* falta um "o" */
   const query = `
   INSERT INTO places (
     image,
     name,
     address,
     address2,
     state,
     city,
     items

 ) VALUES (?,?,?,?,?,?,?);

`

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,

  ]

  function afterInsertData(err){
    
    if (err){
      console.log(err)
      return res.send("creat-point.html",{creatError: true})
    }
    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("creat-point.html",{saved: true})
  }
    /* -->add dados<--  */ 


  db.run(query, values, afterInsertData)


  //console.log(req.body)
  
  
})



server.get("/search",(req,res) =>{

  const search = req.query.search

  if(search == ""){
    return res.render("search-results.html",{ total:0})
  }


  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,function(err,rows){
    if(err){
      return console.log(err)
    }

    console.log("aqui estão seus registros")
    console.log(rows)

    const total = rows.length

    return res.render("search-results.html",{places:rows, total})
  })


  
})

// ligar o servidor
server.listen(3000)