import { ProductToast } from "@/components/ProductToast";
import { toast } from "react-toastify";

let cachedProducts = [];
let lastShownIds = new Set();
let isRunning = false;

async function fetchProducts() {
  if (cachedProducts.length) return cachedProducts;

  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();

  cachedProducts = data.products;
  return cachedProducts;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getUniqueProduct(list) {
  let attempts = 0;
  let product;

  do {
    product = getRandom(list);
    attempts++;
  } while (lastShownIds.has(product.id) && attempts < 5);

  lastShownIds.add(product.id);

  if (lastShownIds.size > 20) {
    lastShownIds.clear();
  }

  return product;
}

function showScarcity(products) {
  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 10);
  if (!lowStock.length) return false;

  const product = getUniqueProduct(lowStock);

  toast(
    <ProductToast
      title={`⚠️ Only ${product.stock} left`}
      subtitle={product.title}
      product={product}
    />,
    { autoClose: 4000 },
  );

  return true;
}

function showDiscount(products) {
  const discounted = products.filter((p) => p.discountPercentage >= 10);
  if (!discounted.length) return false;

  const product = getUniqueProduct(discounted);

  toast(
    <ProductToast
      title={`🔥 ${product.discountPercentage}% OFF`}
      subtitle={product.title}
      product={product}
    />,
    { autoClose: 5000 },
  );

  return true;
}

function showTrending(products) {
  const trending = products.filter((p) => p.rating >= 4.5);
  if (!trending.length) return false;

  const product = getUniqueProduct(trending);

  toast(
    <ProductToast
      title="⭐ Trending"
      subtitle={product.title}
      product={product}
    />,
    { autoClose: 4000 },
  );

  return true;
}

const strategies = [showScarcity, showDiscount, showDiscount, showTrending];

async function runRandomToast() {
  if (isRunning) return;

  isRunning = true;

  try {
    const products = await fetchProducts();

    const strategy = getRandom(strategies);
    strategy(products);
  } finally {
    isRunning = false;
  }
}

let timeoutId;
let initialTimeoutId;
let isStarted = false;

export function startToastEngine() {
  if (isStarted) return;
  isStarted = true;

  const start = () => {
    runRandomToast();
    timeoutId = setTimeout(start, 25000);
  };

  initialTimeoutId = setTimeout(start, 8000);
}

export function stopToastEngine() {
  clearTimeout(timeoutId);
  clearTimeout(initialTimeoutId);
  isStarted = false;
}
