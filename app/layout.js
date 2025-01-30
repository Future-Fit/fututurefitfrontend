"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useSessionTimeout from "@/components/hooks/useSessionTimeout";
import { useRouter } from "next/navigation";


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  const router = useRouter();

  // Check session expiry on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");

    if (!token || !expiry || Date.now() > parseInt(expiry)) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiry");
      router.push("/login"); // Redirect to login page if session is expired
    }
  }, [router]);

  useSessionTimeout();
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="	candidates, career, employment, indeed, job board, job listing, job portal, job postings, job search, job seeker, jobs, recruiters, recruiting, recruitment, resume"
        />
        <meta
          name="description"
          content="Future Fit - Job Portal Platform"
        />
        <meta name="ibthemes" content="ATFN" />

        <link rel="icon" href="./favicon.ico" />
      </head>

      <body>
        <Provider store={store}>
          <div className="page-wrapper">
            {children}

            {/* Toastify */}
            <ToastContainer
              position="bottom-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            {/* <!-- Scroll To Top --> */}
            <ScrollToTop />
          </div>
        </Provider>
      </body>
    </html>
  );
}
