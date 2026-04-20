import Link from "next/link";

export default function ErrorComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-dark mb-4">404</h1>

      <p className="text-gray-500 mb-6">Page not found</p>

      <Link
        href="/"
        className="bg-brand text-white px-6 py-2 rounded-md hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
