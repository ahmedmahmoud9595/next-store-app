import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white border border-border rounded-xl shadow-sm p-4">
      <div className="w-full h-40 relative mb-3">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h3 className="font-bold text-dark">{product.title}</h3>

      <p className="text-sm text-gray-500 mb-2">{product.brand}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-brand font-semibold">${product.price}</span>

        <Link
          href={`/products/${product.id}`}
          className="text-sm bg-soft px-3 py-1 rounded-md hover:bg-brand hover:text-white transition"
        >
          View
        </Link>

        <button
          onClick={() => onDelete(product.id)}
          className="text-sm bg-red-100 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
