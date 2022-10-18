import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { getProductsAPI } from "../../../../utils/methods";
import productsJson from "..//../../products.json";
import ProductList from "../../../../pages/Products/ProductsList/ProductsList";

jest.mock("../../../../utils/methods");

describe("TESTS API EXITOSA ", () => {
  let component;
  beforeEach(async () => {
    getProductsAPI.mockResolvedValue({
      json: () =>
        new Promise((resolve) => {
          resolve(productsJson);
        }),
    });
    await act(async () => {
      component = render(<ProductList />, { wrapper: MemoryRouter });
    });
  });

  test("Debe mostrar productos renderizados si no falla la API", async () => {
    const articles = await screen.findAllByTestId(
      /productList_article-/i,
      undefined,
      {
        timeout: 3000,
      }
    );
    expect(articles.length).toBe(productsJson.length);
  });
  test("Redireccion a Product Page al hacer click en product article", async () => {
    const unArticle = await screen.findByTestId(
      /productList_article-0/i,
      undefined,
      {
        timeout: 3000,
      }
    );
    const pathName = window.location.pathname;
    console.log(pathName);
    await userEvent.click(unArticle.firstChild);
    const newPathName = window.location.pathname;
    console.log(newPathName);
    // screen.debug();
  });
});

describe("TESTS API FALLA", () => {
  let component;
  beforeEach(async () => {
    getProductsAPI.mockResolvedValue({
      json: () => new Promise.reject([]),
    });
    await act(async () => {
      component = render(<ProductList />, { wrapper: MemoryRouter });
    });
  });

  test("Debe mostrar mensaje de error si falla la API", async () => {
    const mensajeError = await screen.findByText(
      /Lo sentimos, producto no encontrado/i,
      undefined,
      {
        timeout: 3000,
      }
    );
    expect(mensajeError).toBeInTheDocument();
  });
});
