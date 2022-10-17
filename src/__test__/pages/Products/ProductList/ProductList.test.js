import { render, screen } from "@testing-library/react";
import { MemoryRouter, useHref } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { getProductsAPI } from "../../../../utils/methods";
import productsJson from "..//../../products.json";
import ProductList from "../../../../pages/Products/ProductsList/ProductsList";

// jest.mock("react-router-dom");

jest.mock("../../../../utils/methods");
describe("TEST LIST ", () => {
  beforeEach(() => {
    getProductsAPI.mockResolvedValue({
      json: () =>
        new Promise((resolve, reject) => {
          resolve(productsJson);
        }),
    });
  });
  const products = {
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
  test("Debe mostrar el componente padre", async () => {
    await act(async () => {
      let component = render(<ProductList />, { wrapper: MemoryRouter });
    });
    // expect(component).toMatchSnapshot();
    screen.debug();
  });
});
