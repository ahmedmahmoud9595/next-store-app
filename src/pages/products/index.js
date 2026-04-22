import { useState } from "react";
import { deleteProduct, getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useEffect } from "react";
import { startToastEngine } from "@/utils/toastEngine";

export default function Products({ products }) {
  const [items, setItems] = useState(products);
  const [filter, setFilter] = useState("");

  const [cart, setCart] = useState([]);

  const handleBuy = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Bought:", product);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  useEffect(() => {
    startToastEngine();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);

    setItems((prev) => prev.filter((p) => p._id !== id));

    console.log("Deleted product with id:", id);
  };

  const filteredProducts = filter
    ? items.filter((p) => {
        const brand = p.brand?.toLowerCase() || "";
        const category = p.category?.toLowerCase() || "";
        const search = filter.toLowerCase();

        return brand.includes(search) || category.includes(search);
      })
    : items;

  // console.log(products);

  return (
    <div className="max-w-6xl mx-auto pt-6">
      <div className="text-xl font-bold flex justify-between items-center">
        <h1>Products</h1>

        <div className="flex items-center gap-4">
          <div className="bg-soft px-4 py-2 rounded-md text-sm font-semibold text-brand">
            Total: ${total}
          </div>

          <Link
            href="/products/create"
            className="font-semibold bg-brand text-white p-3 rounded-full hover:opacity-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
        </div>
      </div>

      <input
        className="border p-2 mb-4"
        placeholder="Filter by brand or category"
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleDelete}
            onBuy={handleBuy}
            priority={index < 4}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: 10,
  };
}
