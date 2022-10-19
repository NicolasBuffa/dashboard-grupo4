import {
  act,
  render,
  screen,
  fireEvent,
  renderHook,
} from "@testing-library/react";
import FormNewProduct from "../../../components/Form/FormNewProduct";
import { useForm, handleSubmit } from "../../../hooks/useForm";
import { MemoryRouter, useHref } from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { createNreProduct } from "../../../utils/handlers";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../../utils/handlers");

describe("TEST vista ProductView", () => {
  let product = {
    id: "",
    title: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    images: [],
    rating: {
      rate: "",
      count: "",
    },
  };
  beforeEach(() => {
    createNreProduct.mockResolvedValue({
      status: 201,
    });
    render(<FormNewProduct />);
  });
  test("debe de hacer match con el snpatshot", () => {
    const { container } = render(<FormNewProduct />);
    expect(container).toMatchSnapshot();
  });
  test("debe hacer submit del form", async () => {
    const inputTitle = screen.getByRole("title");
    const inputStock = screen.getByRole("stock");
    const inputPrice = screen.getByRole("price");

    const form = screen.getByRole("form");
    const button = screen.getByRole("submmitButton");

    const title = "Saitama";
    const price = "3";
    const stock = "3";

    // screen.logTestingPlaygroundURL();
    fireEvent.input(inputTitle, { target: { value: title } });
    fireEvent.input(inputPrice, { target: { value: price } });
    fireEvent.input(inputStock, { target: { value: stock } });

    await act(async () => {
      await userEvent.click(button);
    });

    expect(inputTitle.value).toBe(title);
    expect(inputPrice.value).toBe(price);
    expect(inputStock.value).toBe(stock);
    expect(createNreProduct).toHaveBeenCalled();
    // expect(createNreProduct.mock.calls[0][0].title).toBe(title);
    // expect(createNreProduct.mock.calls[0][0].stock).toBe(stock);
    // expect(createNreProduct.mock.calls[0][0].price).toBe(price);
    // expect(handleSubmit()).toHaveBeenCalledTimes(1);
  });
});
