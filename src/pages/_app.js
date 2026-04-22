import { ToastContainer } from "react-toastify";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-bg min-h-screen text-dark pt-16">
      <Layout>
        <Component {...pageProps} />
        <ToastContainer limit={1} position="bottom-right" autoClose={4000} />
      </Layout>
    </div>
  );
}
