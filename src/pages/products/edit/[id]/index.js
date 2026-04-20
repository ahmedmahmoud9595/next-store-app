import { useRouter } from "next/router";
import { useState } from "react";
import { updateProduct } from "@/services/productService";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(id, { title });

    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button>Update</button>
    </form>
  );
}
