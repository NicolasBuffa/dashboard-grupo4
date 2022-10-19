import CardImage from "../../../components/Form/CardImage";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useHref } from "react-router-dom";
import { formState, setFormState, image } from "..//..//..//hooks/useForm";
describe("TEST CardImage", () => {
  test("should first", () => {
    const { container } = render(
      <CardImage
        image={image}
        formState={formState}
        setFormState={setFormState}
      />,
      { wrapper: MemoryRouter }
    );
    expect(container).toMatchSnapshot();
  });
});
