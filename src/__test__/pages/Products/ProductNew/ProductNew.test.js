import ProductNew from "../../../../pages/Products/ProductNew/ProductNew";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("TEST productNre", () => {
  test("debe hacer match con el snapShot", () => {
    const { container } = render(<ProductNew />);
    expect(container).toMatchSnapshot();
  });
});
