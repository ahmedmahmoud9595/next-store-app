import { useState } from "react";
import { createProduct } from "@/services/productService";
import { useRouter } from "next/router";

export default function CreateProduct() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    brand: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setForm({ ...form, images: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      brand: form.brand,
      ...(form.description && { description: form.description }),
      ...(form.images.length && {
        images: Array.from(form.images).map((f) => f.name),
      }),
    };

    console.log("Submitting:", payload);
    console.log("New Product Added");

    await createProduct(payload);
    router.push("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-border">
        <h1 className="text-2xl font-bold text-dark mb-6">Add New Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-dark">Title *</label>
            <input
              name="title"
              required
              onChange={handleChange}
              className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Enter product title"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-dark">
              Description (optional)
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              className="border border-border rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Write product description..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-dark">
              Category *
            </label>
            <input
              name="category"
              required
              onChange={handleChange}
              className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="e.g. electronics"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-dark">Price *</label>
              <input
                type="number"
                name="price"
                required
                onChange={handleChange}
                className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="0.00"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-dark">Stock *</label>
              <input
                type="number"
                name="stock"
                required
                onChange={handleChange}
                className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-dark">Brand *</label>
            <input
              name="brand"
              required
              onChange={handleChange}
              className="border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="e.g. Apple"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-dark">
              Images (optional)
            </label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleChange}
              className="text-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-brand text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
