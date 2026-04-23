import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function ProductCard({ product, onDelete, onBuy }) {
  const { data: session } = useSession();

  // const productId = product.id || product._id || null;

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm p-4">
      <div className="w-full h-60 relative mb-3 bg-gray-100">
        <Image
          src={product?.thumbnail || "/placeholder.jpg"}
          alt={product?.title || "Product image"}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain rounded-md"
        />
      </div>

      <h3 className="font-bold text-dark">{product.title}</h3>

      <p className="text-sm text-gray-500 mb-2">{product.brand}</p>

      <span className="text-sm text-brand font-semibold">${product.price}</span>

      <div className="flex justify-between items-center mt-3">
        <Link
          href={product._id ? `/products/${product._id}` : "#"}
          className="mx-auto text-sm bg-soft px-2 py-1 rounded-md hover:bg-brand hover:text-white transition"
        >
          View
        </Link>

        {session && (
          <>
            <button
              onClick={() => onBuy(product)}
              className="mx-auto text-sm bg-green-100 px-2 py-1 rounded-md hover:bg-green-600 hover:text-white transition"
            >
              Buy
            </button>

            <Link
              href={product._id ? `/products/edit/${product._id}` : "#"}
              className="mx-auto bg-blue-100 text-sm px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Edit
            </Link>

            <button
              onClick={() => onDelete(product._id)}
              className="mx-auto text-sm bg-red-100 px-2 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
