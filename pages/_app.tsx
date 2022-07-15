import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

//Custom componet imports
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

//External package imports
import { GoogleOAuthProvider } from "@react-oauth/google";

//Styling imports
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
    >
      <Navbar />
      <div className="flex gap-6 md:gap:20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 oveflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
