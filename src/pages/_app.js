

import { Fraunces, Manrope } from "next/font/google";
import Layout from "./Layout";
import '../styles/global.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const manrope = Manrope({
  weight: ["200", "300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${manrope.className}`}>
        <Layout>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </Layout>
      </div>
    </>
  );
}
