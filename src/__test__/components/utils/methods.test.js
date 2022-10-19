import {getProductAPI , getProductsAPI } from './../../../utils/methods'

const testProduct = {
    "id": 3,
    "title": "Samsung Universe #9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "rating": {
        "rate": 4.09,
        "count": 845
    },
    "stock": 36,
    "category": "smartphones",
    "images": [
        "https://dummyjson.com/image/i/products/3/1.jpg"
    ],
    "lastModified": "2022-10-12T12:27:14.975Z"
}

const testProducts =[] //sin importar aun

describe('Get one Product', () => {    
    
    test('Debe retornar status:200 la consulta satisfactoria',async () => { 
        const response = await getProductAPI(3)
        expect(response.status).toBe(200);
    })

    test('Debe retornar status:404 la consulta No satisfactoria',async () => { 
        const response = await getProductAPI(666)
        expect(response.status).not.toBe(200);
    })

    test('Debe retornar un producto',async () => { 
        const response = await getProductAPI(3)
        const data = await response.json()
        expect(data).toEqual(testProduct);
    })
})

describe('Get all Products', () => {    
    
    test('Debe retornar status:200 la consulta satisfactoria',async () => { 
        const response = await getProductsAPI()
        expect(response.status).toBe(200);
    })

    test('Debe retornar todos los productos',async () => { 
        const response = await getProductsAPI()
        const data = await response.json()
        expect(data).toEqual(testProducts);
    })
})