import ProductNew from "../../../../pages/Products/ProductNew/ProductNew";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useHref } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("TEST productNre", () => {
  test("debe hacer match con el snapShot", () => {
    const { container } = render(<ProductNew />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});
