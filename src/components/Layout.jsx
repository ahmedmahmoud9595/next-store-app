import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const isErrorPage = router.pathname === "/404";

  return (
    <div className="min-h-screen flex flex-col">
      {!isErrorPage && <Navbar />}

      <main className="flex-1 p-6">{children}</main>

      {!isErrorPage && <Footer />}
    </div>
  );
}
