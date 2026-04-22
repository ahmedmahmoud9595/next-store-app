const BASE = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const res = await fetch(BASE);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE}/${id}`);
  return res.json();
};

export const createProduct = async (data) => {
  await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateProduct = async (id, data) => {
  await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
