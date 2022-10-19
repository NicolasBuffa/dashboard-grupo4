import { render, screen, fireEvent } from "@testing-library/react";

import Form from "../../../../components/Form/Form";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

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

  render(<Form product={product} />);
  // test("debe cambiar el valor de input", () => {
  //   const input = screen.getByRole("title");
  //   fireEvent.input(input, { target: { value: "Saitama" } });
  //   expect(input.value).toBe("Saitama");
  // });

  test("debe hacer submit del form", () => {
    // render(<Form product={product} />);

    const inputValue = "Saitama";

    const input = screen.getByRole("title"); // esto tambien
    const form = screen.getByRole("form"); // esto esta mal

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
  });
});
