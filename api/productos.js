class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        return JSON.stringify(this.productos[id])
    }

    listarAll() {
        return JSON.stringify(this.productos)
    }

    guardar(prod) {
        this.id++
        const prod2 = { ...prod, id: this.id }
        this.productos.push(prod2)
    }

    actualizar(prod, id) {
        const indice = this.productos.indexOf(this.productos.find(producto => producto.id == id))
        this.productos.splice(indice, 1, { ...prod, id: id })
    }

    borrar(id) {
        const indice = this.productos.indexOf(this.productos.find(producto => producto.id == id))
        this.productos.splice(indice, 1)
    }
}

export default ProductosApi