class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        return this.productos[id]
    }

    listarAll() {
        
    }

    guardar(prod) {
        this.productos.push(prod)
    }

    actualizar(prod, id) {
        
    }

    borrar(id) {
        
    }
}

export default ProductosApi