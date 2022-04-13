module.exports = class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        return this.productos.find(producto => producto.id == id)
    }

    listarAll() {
        return JSON.stringify(this.productos)
    }

    guardar(prod) {
        this.id++
        const prod2 = { ...prod, id: this.id }
        this.productos.push(prod2)
        return prod2
    }

    actualizar(prod, id) {
        const indice = this.productos.indexOf(this.productos.find(producto => producto.id == id))
        this.productos.splice(indice, 1, { ...prod, id: id })
        return this.productos[indice]
    }

    borrar(id) {
        const indice = this.productos.indexOf(this.productos.find(producto => producto.id == id))
        this.productos.splice(indice, 1)
        return this.productos
    }
};