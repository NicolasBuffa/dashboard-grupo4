import { getProductAPI, getProductsAPI } from "../../utils/methods";

// jest.mock("../../utils/methods");

describe("TEST de getProductAPI y getPorductsAPI", () => {
  test("getOneProducts debe traer productos", async () => {
    const data = await getProductsAPI();
    const product = await data.json();

    expect(product.status).not.toBe(404);
    expect(product.length).not.toBe(1);
  });
  test("debe de retornar un producto en formato objeto", async () => {
    const data = await getProductAPI(3);
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
      lastModified: expect.any(String),
    });
  });
});
