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

//
// const timer = require("../timerGame");

// jest.useFakeTimers();
// jest.spyOn(global, "setTimeout");
//
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
    const products = await screen.findAllByRole("article", undefined, {
      timeout: 3000,
    });

    const productoFiltrado = [...productsJson].filter(
      (product) =>
        product.title.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.category.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.description.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.id === Number(textoPrueba)
    );
    console.log("Primer elemento ", productoFiltrado);

    await act(async () => {
      userEvent.type(input, textoPrueba);
    });

    console.log("Products ", products);

    // await waitFor(async () => {

    // });

    //expect(products.length).toBe(3);
    screen.debug();

    expect(products).toHaveLength(productoFiltrado.length);
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

  // test("Debe mostrar la cantidad de articulos", () => {
  //   setTimeout(async () => {
  //
  //   }, 3000);

  //   // Saltamos el spiner

  //   // Seleccionar los articulo

  //   // Article debe ser igual que lenght de producjs
  // });

  // test("waits 1 second before ending the game", () => {
  //   // timer();
  //   expect(setTimeout).toHaveBeenCalledTimes(1);
  //   expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  // });
});
