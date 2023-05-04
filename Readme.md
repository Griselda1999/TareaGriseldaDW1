## Esta es la tarea de la semana 2 Aplicacion usando NODE.JS con los metodos GET,POST,PUT,DELETE

# Enlace que nos jenera la aplicacion al ainicilaizarla []( "http://localhost:3000" ) es necesario que la copiemos y pequemos el postmant
 como comando de ejecusion de la aplicacion esta npm Start

Fue necesario instalar el paqute de dependencia body-parse ya que trabaje con express yo siento que acaorta
 bastabte el codigo y es una manaera mas rapida de trabajar

subi un archivo Json llamado noticias.json donde esta un objeto Json que puede usar al momento de realizar un post en el postamant 


# Metodo Gent 
Para usar este metodo solo es necesario colocar la url de la aplicacion en el posmat, verificar que este en el metodo Get y pulsar Send de esta forma podemos observar las noticias que han sido guardadas

# Metodo Post

De la misma forma que el aterior colocar la url y verificar que este en el metodo correcto en esta caso en el metodo Post , body y seleccionado raw ahi se coloca el objeto Json 

{
    "id":"1",
    "Categoria": "Deportes",
    "Imagen":"imagen",
    "Descripcion":"Ganan",
    "detalle": "El dia 3 de Febrero se jugo un campeonato  "

}

# Metodo Delete
 
 para el metodo Delete se coloca una pleca seguido el id que se quiere eliminar en la Url del Postmat

