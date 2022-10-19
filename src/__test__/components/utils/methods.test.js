import { getProductAPI, getProductsAPI } from "./../../../utils/methods";
import productosOriginal from "./productsOriginal.json";

const testProduct = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  rating: {
    rate: 4.69,
    count: 354,
  },
  stock: 94,
  category: "smartphones",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  ],
};

describe("Get one Product", () => {
  test("Debe retornar status:200 la consulta satisfactoria", async () => {
    const response = await getProductAPI(1);
    expect(response.status).toBe(200);
  });

  test("Debe retornar status:404 la consulta No satisfactoria", async () => {
    const response = await getProductAPI(666);
    expect(response.status).not.toBe(200);
  });

  test("Debe retornar un producto", async () => {
    const response = await getProductAPI(1);
    const data = await response.json();
    expect(data).toEqual(testProduct);
  });
});

describe("Get all Products", () => {
  test("Debe retornar status:200 la consulta satisfactoria", async () => {
    const response = await getProductsAPI();
    expect(response.status).toBe(200);
  });

  test("getOneProducts debe traer productos", async () => {
    const data = await getProductsAPI();
    const product = await data.json();

    expect(product.status).not.toBe(404);
    expect(product.length).not.toBe(1);
  });

  test("debe de retornar un producto en formato objeto", async () => {
    const data = await getProductAPI(1);
    const product = await data.json();

    expect(product.status).not.toBe(404);
    expect(product).toBeTruthy();
    expect(product).toEqual(expect.any(Object));
    expect(product).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      stock: expect.any(Number),
      description: expect.any(String),
      category: expect.any(String),
      images: expect.any(Array),
      rating: expect.any(Object),
      //   lastModified: expect.any(String),
    });
  });
});
