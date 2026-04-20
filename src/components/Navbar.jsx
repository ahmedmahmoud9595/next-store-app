import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-brand font-bold"
      : "hover:text-brand transition";
  return (
    <nav className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center font-bold relative overflow-hidden">
          <img src="/logo.png" alt="Logo" className="w-full h-full" />

          {/* <Image
          src="/logo.png"
          alt="Website Logo"
          width={40}
          height={40}
          className="rounded-md"
        /> */}
        </div>

        <h1 className="text-2xl font-bold text-dark">Online Store</h1>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={`font-bold hover:text-brand transition ${linkClass("/")}`}
        >
          Home
        </Link>

        <Link
          href="/products"
          className={`font-bold hover:text-brand transition ${linkClass("/products")}`}
        >
          Products
        </Link>
      </div>
    </nav>
  );
}
