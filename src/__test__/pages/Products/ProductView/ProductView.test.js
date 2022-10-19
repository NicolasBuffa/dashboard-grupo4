import ProductView from "../../../../pages/Products/ProductView/ProductView";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("TEST ProductView", () => {
  test("debe hacer match con el snapShot", () => {
    const { container } = render(<ProductView />);
    expect(container).toMatchSnapshot();
  });
});
