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
  //COMPONENTE QUE LISTA PRODUCTOS
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

  //INPUT DE BUSQUEDA DE PRODUCTOS
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
  test("Hace llamado a la API si el usuario tipea en el buscador", async () => {
    const input = screen.getByPlaceholderText(/buscar productos/i);
    const textoPrueba = "Samsung";
    await act(async () => {
      userEvent.type(input, textoPrueba);
    });
    expect(getProductsAPI).toHaveBeenCalled();
  });
  test("Renderize los productos filtrados segun criterios de búsqueda", async () => {
    const input = screen.getByPlaceholderText(/buscar productos/i);
    const textoPrueba = "Samsung";
    const productosFiltrado = [...productsJson].filter(
      (product) =>
        product.title.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.category.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.description.toLowerCase().includes(textoPrueba.toLowerCase()) ||
        product.id === Number(textoPrueba)
    );
    await act(async () => {
      userEvent.type(input, textoPrueba);
    });
    const products = await screen.findAllByRole("article", undefined, {
      timeout: 3000,
    });

    expect(products).toHaveLength(productosFiltrado.length);
  });
  test("Renderize pagina de error si no encuentra productos", async () => {
    const input = screen.getByPlaceholderText(/buscar productos/i);
    const textoPrueba = "TEXTO PRUEBA PARA QUE FALLE";

    await act(async () => {
      userEvent.type(input, textoPrueba);
    });
    const errorMessage = await screen.findByText(
      "Lo sentimos, producto no encontrado"
    );

    expect(errorMessage).toBeInTheDocument();
  });

  //BOTON AGREGAR PRODUCTO
  test("Boton agregar producto exista en Desktop", async () => {
    window.innerWidth = 1024;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const input = screen.getByText("Agregar producto");
    expect(input).toBeInTheDocument();
  });
  test("Boton agregar redirija a product page", () => {
    const input = screen.getByText("Agregar producto");
    const pathName = input.getAttribute("href");
    expect(pathName).toBe("/products/new");
  });
  test("Boton agregar producto exista en Mobile", async () => {
    window.innerWidth = 400;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const input = screen.getByAltText("add Product");
    expect(input).toBeInTheDocument();
  });

  test.only("Boton agregar desaparece en mobile si se abre el input en mobile", async () => {
    window.innerWidth = 400;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const lupa = screen.queryByTestId("inputSearchContainer");
    userEvent.click(lupa);

    const linkAgergarProducto = screen.getByTestId("linkAgregarProducto");

    expect(linkAgergarProducto).not.toBeVisible();
  });

  //H2
  test("Titulo h2 del header desaparece cuando se abre el input en mobile", async () => {
    window.innerWidth = 400;
    await act(async () => {
      window.dispatchEvent(new Event("resize"));
    });
    const lupa = screen.queryByTestId("inputSearchContainer");
    const h2 = screen.getByRole("heading", { name: "Product List" });
    userEvent.click(lupa);

    expect(h2).not.toBeVisible();
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
  //COMPONENTE QUE LISTA PRODUCTOS
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
