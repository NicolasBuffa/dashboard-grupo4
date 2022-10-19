import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { getProductsAPI } from "../../../../utils/methods";
import productsJson from "..//../../products.json";
import ProductList from "../../../../pages/Products/ProductsList/ProductsList";
import { wait } from "@testing-library/user-event/dist/utils";

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
    const articles = await screen.findAllByRole("article", undefined, {
      timeout: 3000,
    });
    expect(articles.length).toBe(productsJson.length);
  });
  test("Links de los articles tengan el href correspondiente", async () => {
    const articles = await screen.findAllByRole("article", undefined, {
      timeout: 3000,
    });
    articles.forEach(({ firstChild }, i) => {
      const pathName = firstChild.getAttribute("href");
      expect(pathName).toBe(`/products/${i + 1}`);
    });
  });
  test("Exista input search al renderizar la page en tamaño mayor a 576px", async () => {
    window.innerWidth = 577;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const input = screen.queryByRole("searchbox");

    expect(input).toBeInTheDocument();
  });
  test("No exista input search al renderizar la page en tamaño menor a 577px", async () => {
    window.innerWidth = 500;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const input = screen.queryByRole("searchbox");

    expect(input).not.toBeInTheDocument();
  });
  test.only("Input search haga llamado a la API cuando el user tipea", async () => {
    const input = screen.getByPlaceholderText(/buscar productos/i);
    const textoPrueba = "Samsung";

    userEvent.click(input);
    await act(async () => {
      userEvent.keyboard(textoPrueba);
    });

    await waitFor(async () => {
      const products = await screen.findAllByRole("article");
      console.log(products.length);
      //expect(products.length).toBe(3);
      screen.debug();
    });

    expect(input).toHaveValue(textoPrueba);
  });

  test("Boton agregar producto exista en Desktop", () => {
    const input = screen.getByText("Agregar producto");
    const anchosPantallaParaTestear = [500, 1024];
    anchosPantallaParaTestear.forEach();
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
