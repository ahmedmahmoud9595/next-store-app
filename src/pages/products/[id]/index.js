import { getProductById } from "@/services/productService";
import Image from "next/image";

export default function ProductDetails({ product }) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      <div className="w-full h-80 relative mb-6">
        <Image
          src={product.thumbnail || "/placeholder.jpg"}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <h1 className="text-2xl font-bold text-dark mb-2">{product.title}</h1>

      {product.description && (
        <p className="text-gray-600 mb-4">{product.description}</p>
      )}

      <div className="flex gap-6 text-sm text-gray-500 mb-4">
        <span>Brand: {product.brand}</span>
        <span>Category: {product.category}</span>
      </div>

      <p className="text-xl font-semibold text-brand">${product.price}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductById(params.id);

  return {
    props: { product },
    revalidate: 10,
  };
}
