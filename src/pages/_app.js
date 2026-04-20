import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-bg min-h-screen text-dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
