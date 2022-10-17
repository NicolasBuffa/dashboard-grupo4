import { getProductAPI, getProductsAPI } from "../../utils/methods";

// jest.mock("../../utils/methods");

describe("TEST de getProductAPI y getPorductsAPI", () => {
  let initialForm = {
    id: null,
    title: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    images: [],
    rating: {
      rate: 0,
      count: 0,
    },
  };
  // getProductAPI.mockResolveValue({
  //   json: () => {
  //     new Promise((resolve) => {
  //       initalValue;
  //     });
  //   },
  // });

  test("getOneProducts debe traer productos", async () => {
    const data = await getProductsAPI();
    const product = await data.json();

    expect(product.status).not.toBe(404);
    expect(product.length).not.toBe(1);
  });
  test("getOneProduct debe traer un producto", async () => {
    const data = await getProductAPI(3);
    const product = await data.json();
    expect(product).toBeTruthy();
    expect(product.status).not.toBe(404);
  });
});
