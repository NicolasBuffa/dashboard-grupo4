import { act, renderHook, screen } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Pruebas en useForm", () => {
  let initialForm = {
    id: null,
    title: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    images: [],
    rating: {
      rate: 0,
      count: 0,
    },
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.formState).toEqual({
      id: initialForm.id,
      title: initialForm.title,
      price: initialForm.price,
      stock: initialForm.stock,
      description: initialForm.description,
      category: initialForm.category,
      images: initialForm.images,
      rating: expect.any(Object),
    });
  });
  test("debe de cambiar el titulo del formulario", () => {
    const newValue = "IPHONE 10";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de cambiar el stock del formulario", () => {});
  test("debe de cambiar el price del formulario", () => {});
  test("debe de cambiar el desc del formulario", () => {});
  test("debe de cambiar el img del formulario", () => {});

  test("debe de realizar el reset del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "title", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const {
      setFormState,
      onInputChange,
      handleSubmit,
      handdleDelete,
      handleDecrement,
      handleIncrement,
      handleSubmitNewProduct,
      onResetForm,
    } = result.current;

    expect(onInputChange).toEqual(expect.any(Function));
    expect(handleSubmit).toEqual(expect.any(Function));
    expect(handleSubmitNewProduct).toEqual(expect.any(Function));
    expect(handdleDelete).toEqual(expect.any(Function));
    expect(handleDecrement).toEqual(expect.any(Function));
    expect(handleIncrement).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });
  test("debe de incrementar el contador", async () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleIncrement } = result.current;
    await act(() => {
      handleIncrement();

      // ACA EVALUA SOLO EL VALOR MODIFICADO UNA VEZ
      // EL COUNTER DEBERIA TENER CURRENT PARA QUE EVALUE ESE VALOR
    });
    expect(result.current.formState.stock).toBe(1);
  });
  test("debe de decrementar el contador", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleDecrement } = result.current;
    act(() => {
      handleDecrement();

      // ACA EVALUA SOLO EL VALOR MODIFICADO UNA VEZ
      // EL COUNTER DEBERIA TENER CURRENT PARA QUE EVALUE ESE VALOR
    });
    expect(result.current.formState.stock).toBe(-1);
  });
  test("debe de realizar el handdleDelete del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleDecrement, onResetForm } = result.current;
    act(() => {
      handleDecrement();
      onResetForm();
    });
    expect(result.current.formState.stock).toBe(0);
  });
  test("debe de realizar el handleSubmitNewProduct del formulario", () => {});
  test("debe de realizar el handleSubmit del formulario", () => {});
});
