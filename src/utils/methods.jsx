const url = "http://localhost:4000/api/product";

export async function getProductsAPI() {
  try {
    return await fetch(`${url}`);
  } catch (error) {
    return error;
  }
}

export async function getProductAPI(id) {
  try {
    return await fetch(`${url}/${id}`);
  } catch (error) {
    return error;
  }
}
