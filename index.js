const express = require('express')
const app = express()
const fs = require("fs")
const path = require("path")
var bodyParser = require('body-parser')

const port = 3000
app.use(bodyParser.json())
let noticias = []


// Metodo GET 
app.get('/', (req, res) => {
    
    fs.readFile(path.join(__dirname, 'main.html'), (err, contenidoArchivo)=>{
        res.header('Content-type', 'text/html');
     
    res.send(contenidoArchivo)  })
})
app.get('/noticia', (req, res) => {
    res.send(noticias)
  })


// Meto POST
app.post('/noticia', (req, res) => {
  const new_noticia = req.body
 
  noticias.push(new_noticia)

  const cod_respuesta = 201 

  const respuesta = {
    msj : 'se envio el mensaje con exito',
    detalles_del_msj :{
      id: new_noticia.id,
      titulo: new_noticia. titulo
    }
  } 
    res.status(cod_respuesta).send(respuesta)
  })

  //Metodo Put 

// Metodo Delete
app.delete('/noticia/:id', (req, res) => {
 
  
  const { id } = req.params;
  const indiceNoticia = noticias.findIndex(noticias => noticias.id === Number(id));
  if (indiceNoticia === -1) {
    res.status(404).json({ error: 'Noticia no encontrada' });
    return;
  }
  noticias.splice(indiceNoticia, 1);
    console.log("este es el indez ",noticias);

    res.send("Se Elimino La Noticia Exitosamente");


  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
