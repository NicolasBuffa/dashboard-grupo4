export const updateProduct = (data) => {
  return fetch("http://localhost:4000/api/product", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
export const createNreProduct = (data) => {
  return fetch("http://localhost:4000/api/product", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
