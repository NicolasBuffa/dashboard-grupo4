import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductAPI } from "../utils/methods";
export const useGetOneProduct = (initialForm = {}) => {
  const [product, setProduct] = useState(initialForm);
  const params = useParams();

  // GET ONE PRODUCT HOOK
  const getProduct = async () => {
    const resp = await getProductAPI(params.id);
    const data = await resp.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
    return () => {};
  }, [params.id]);

  return {
    ...product,
    product,
  };
};
