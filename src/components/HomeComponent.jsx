import React from "react";
import Link from "next/link";

const HomeComponent = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      <div className="absolute w-[500px] h-[500px] bg-brand/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-dark/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight">
          Discover the Best <span className="text-brand">Products</span> for You
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Shop the latest trending items, exclusive deals, and premium quality
          products all in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Browse Products
          </Link>

          <Link
            href="/products/create"
            className="border border-brand text-brand px-6 py-3 rounded-lg font-semibold hover:bg-soft transition"
          >
            Add Your Product
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-10 text-sm text-gray-500">
          <div>
            <p className="text-2xl font-bold text-dark">10k+</p>
            Products
          </div>
          <div>
            <p className="text-2xl font-bold text-dark">5k+</p>
            Customers
          </div>
          <div>
            <p className="text-2xl font-bold text-dark">4.9★</p>
            Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
