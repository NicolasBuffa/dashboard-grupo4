import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useGetOneProduct = (initialForm = {}) => {
  const [product, setProduct] = useState(initialForm);
  const params = useParams();

  // GET ONE PRODUCT HOOK
  const getProduct = async () => {
    const resp = await fetch(`http://localhost:4000/api/product/${params.id}`);
    const data = await resp.json();
    setProduct(data);
  };

  // useEffect(() => {
  //   getProduct();
  // }, [params.id]);
  //  GET ONE PRODUCT HOOK

  useEffect(() => {
    getProduct();
    return () => {};
  }, [params.id]);

  return {
    ...product,
    product,
  };
};
