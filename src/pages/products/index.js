import { useState } from "react";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Products({ products }) {
  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    console.log("Deleted product with id:", id);
  };

  const filteredProducts = filter
    ? products.filter((p) => {
        const brand = p.brand?.toLowerCase() || "";
        const category = p.category?.toLowerCase() || "";
        const search = filter.toLowerCase();

        return brand.includes(search) || category.includes(search);
      })
    : products;

  console.log(products);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-xl font-bold flex justify-between items-center">
        <h1>Products</h1>

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

      <input
        className="border p-2 mb-4"
        placeholder="Filter by brand or category"
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getProducts();

  return {
    props: {
      products: data.products,
    },
  };
}
