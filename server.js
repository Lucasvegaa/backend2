const express = require('express')
const { Router } = express
const ProductosApi = require('./api/productos.js')
const app = express()
// router de productos
const productosRouter = new Router()
productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extend: true}));




const productosApi = new ProductosApi()

// servidor

app.use(express.static('public'))
app.use('/api/productos', productosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

//RUTAS LLAMANDO A LOS METODOS DE LA CLASE

app.get('/', (req, res) => {
    res.send(productosApi.listarAll())
})
productosRouter.get('/:id', (req, res) => {
    const resultado = productosApi.listar(req.params.id)
    resultado != null ? res.send(resultado) : res.status(404).send({ error : 'producto no encontrado' })
    
})
productosRouter.get('/',(req,res)=>{
        res.send(productosApi.listarAll())
        
})
productosRouter.post('/',(req,res)=>{
    res.send(productosApi.guardar(req.body))
})

productosRouter.put('/:id',(req,res)=>{
    
    const resultado = productosApi.actualizar(req.body,parseInt(req.params.id))
    resultado !=null ? res.send( resultado): res.status(404).send({ error : 'producto no encontrado' })
})

productosRouter.delete('/:id',(req,res)=>{
    
    const resultado = productosApi.borrar(req.params.id)
    resultado !=null ? res.send(resultado) : res.status(404).send({ error : 'producto no encontrado' })
})
