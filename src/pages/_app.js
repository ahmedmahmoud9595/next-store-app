import { ToastContainer } from "react-toastify";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";

function AppContent({ Component, pageProps }) {
  const { data: session } = useSession();

  return (
    <div className="bg-bg min-h-screen text-dark pt-16">
      <Layout>
        <Component {...pageProps} />

        {session && (
          <ToastContainer limit={1} position="bottom-right" autoClose={4000} />
        )}
      </Layout>
    </div>
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppContent Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}
