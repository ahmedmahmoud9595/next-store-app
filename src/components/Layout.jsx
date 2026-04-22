import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { startToastEngine, stopToastEngine } from "@/utils/toastEngine";

export default function Layout({ children }) {
  const router = useRouter();
  const isErrorPage = router.pathname === "/404";

  useEffect(() => {
    if (router.pathname === "/products") {
      startToastEngine();
    } else {
      stopToastEngine();
    }

    return () => stopToastEngine();
  }, [router.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {!isErrorPage && <Navbar />}

      <main className="flex-1">{children}</main>

      {!isErrorPage && <Footer />}
    </div>
  );
}
