import ProductView from "../../../../pages/Products/ProductView/ProductView";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useHref } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("TEST ProductView", () => {
  test("debe hacer match con el snapShot", () => {
    const { container } = render(<ProductView />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});
