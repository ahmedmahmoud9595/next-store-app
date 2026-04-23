import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const { data: session } = useSession();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-brand font-bold"
      : "text-dark hover:text-brand transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-border shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full" />
          </div>

          <h1 className="text-xl font-bold text-dark">Online Store</h1>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>

          {!session ? (
            <Link
              href="/api/auth/signin"
              onClick={signIn}
              className="bg-brand text-white px-4 py-2 rounded-md"
            >
              Sign In
            </Link>
          ) : (
            <>
              <Link
                href="/api/auth/signout"
                onClick={signOut}
                className="border border-brand text-brand px-4 py-2 rounded-md"
              >
                Sign Out
              </Link>

              <span className="text-xs bg-brand text-white px-2 py-1 rounded-lg">
                Logged In
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
