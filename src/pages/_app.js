import Header from "@/components/Header";
const Cart = lazy(() => import("@/components/Cart"));
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import { Suspense, lazy, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <Header cart={cart} openCart={openCart} setOpenCart={setOpenCart} />
      <Component cart={cart} setCart={setCart} setOpenCart={setOpenCart} {...pageProps} />
      <Footer />
      <Suspense>
        <Cart  cart={cart} setCart={setCart}  openCart={openCart} setOpenCart={setOpenCart} />
      </Suspense>
    </>
  );
}
