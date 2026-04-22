import { useState } from "react";
import { getProductById, updateProduct } from "@/services/productService";
import { useRouter } from "next/router";

export default function EditProduct({ product }) {
  const router = useRouter();

  const [form, setForm] = useState(() => ({
    title: product?.title || "",
    description: product?.description || "",
    category: product?.category || "",
    price: product?.price || "",
    stock: product?.stock || "",
    brand: product?.brand || "",
  }));

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white";

  const labelClass = "text-sm font-semibold text-dark";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(product._id, {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    router.push("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-border">
        <h1 className="text-2xl font-bold text-dark mb-6">Edit Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className={labelClass}>Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className={inputClass}
              placeholder="Product title"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className={`${inputClass} h-24 resize-none`}
              placeholder="Product description"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Category *</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. electronics"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Price *</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className={inputClass}
                placeholder="0.00"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className={labelClass}>Stock *</label>
              <input
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className={inputClass}
                placeholder="0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Brand *</label>
            <input
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. Apple"
            />
          </div>

          <button className="mt-4 bg-brand text-white py-2 rounded-md font-semibold hover:opacity-90 transition">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const product = await getProductById(params.id);

  return {
    props: { product },
  };
}
