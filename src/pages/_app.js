import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/utils/contextReducer"; 
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">  
    <CartProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
    </ThemeProvider>
  );
}
