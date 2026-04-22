import Product from "../models/Product.js";

// GET all
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET by id
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// CREATE
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

// UPDATE
export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
};

// DELETE
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
