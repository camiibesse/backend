class Productmanager {
    constructor() {
        this.products = [];
    }  


    addProduct(title, description, price, thumbnail, code, stock) {
        for(let i = 0; i < this.products.length; i++){
            if (this.products[i].code === code){
                console.log(`El codigo ${code} ya existe`);
                break;
            }
        }

        const newProduct = {
            id: this.products.length +1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock}

       if(!Object.values(newProduct).includes(undefined)){
        this.products.push(newProduct);
       }else{
        console.log('Todos los campos son obligatorios');
       }
    }

    getProducts() {
        return this.products;
    }

    existe(id){
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log('Not found') : this.existe(id)
    }
}

const productos = new Productmanager();
//verifico que el arreglo este vacio
console.log(productos.getProducts())

//agrego un producto
productos.addProduct('titulo 1', 'descripcion 1', 150, 'imagen 1', 'abc123', 20)
productos.addProduct('titulo 2', 'descripcion 2', 150, 'imagen 2', 'abc124', 50)
productos.addProduct('titulo 3', 'descripcion 3', 150, 'imagen 3', 'abc125', 8)


//arreglo con productos
console.log(productos.getProducts())

//validar todos los campos y que el code no se repita
productos.addProduct('titulo 2', 'descripcion 2', 150, 'imagen 2', 'abc124')

//Buscar producto por ID
productos.getProductById(2)
productos.getProductById(4)
