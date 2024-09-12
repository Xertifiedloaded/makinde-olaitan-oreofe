

import { Fraunces, Manrope } from "next/font/google";
import Layout from "./Layout";
import '../styles/global.css'
const manrope = Manrope({
  weight: ["200", "300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${manrope.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
