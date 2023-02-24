import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState, useEffect } from "react";
import { getProduct } from "@/services.js/api";
import Ratings from "@/components/Rating";
import ProductCarousel from "@/components/ProductCarousel";
import { addComma } from "@/services.js/helpers";
import Loading from "@/components/Loading";

export default function Home({ cart, setCart, setOpenCart }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(1);
  const [selectedSize, setselectedSize] = useState(0);
  const [selectedColor, setselectedColor] = useState(0);

  useEffect(() => {
    (async () => {
      setProduct(await getProduct("10001"));
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    })();
  }, []);

  const handleDecrement = () => {
    if (productCount !== 1) {
      setProductCount((prev) => {
        return prev - 1;
      });
    }
  };

  const handleIncrement = () => {
    setProductCount((prev) => {
      return prev + 1;
    });
  };

  const handleAddToCart = async () => {
    if (cart.length === 0) {
      setCart([
        {
          id: product?.id,
          name: product?.desc,
          image: product?.image,
          qty: productCount,
          price: product?.price ,
        },
      ]);
    } else {
      let found = await cart.find((e) => e.id === product?.id);
      found.qty += productCount;
      let otherProducts = await cart.filter((e) => {
        return e.id != product?.id;
      });
      setCart([found, ...otherProducts]);
    }
    setOpenCart(true);
    setProductCount(1);
  };

  return (
    <>
      <Head>
        <title>{product?.name} - Yeshtery</title>
        <meta name="description" content="Adidas Black T-Shirt - Yeshtery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumbs productName={product?.name} brand={product?.brand} />
          <main className={styles.main}>
            <div className={styles.product}>
              <div className={styles.images}>
                <div className={styles.mainImage}>
                  <img
                    className={styles.image}
                    src={product?.image}
                    alt="productImage00"
                  />
                  <button className={styles.display360}>
                    <img src="./images/display360.svg" alt="display360" />
                  </button>
                </div>
                <div className={styles.swiper}>
                  <button>
                    <img
                      src="./images/productArrowLeft.svg"
                      alt="productArrowLeft"
                    />
                  </button>
                  <div className={styles.smallImages}>
                    {product?.subImages?.map((image, index) => {
                      return (
                        <img
                          key={index}
                          src={image}
                          alt={`productImage0${index + 1}`}
                        />
                      );
                    })}
                  </div>
                  <button>
                    <img
                      src="./images/productArrowRight.svg"
                      alt="productArrowRight"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.brand}>
                  <img src={product?.brandLogo} alt="productBrand" />
                </div>
                <div className={styles.name}>{product.desc}</div>
                <div className={styles.category}>{product?.category}</div>
                <Ratings
                  styles={styles}
                  rate={product?.rate}
                  totalRates={product?.totalRates}
                />
                <div className={styles.price}>
                  <div className={styles.current}>
                    {addComma(product?.price)}
                  </div>
                  <div className={styles.old}>
                    {addComma(product?.oldPrice)}
                  </div>
                  <div className={styles.discount}>{product?.discount} Off</div>
                </div>
                <div className={styles.size}>
                  <div className={styles.title}>Size</div>
                  <div className={styles.options}>
                    {product?.sizes?.map((size, index) => {
                      return (
                        <button
                        key={index}
                          style={
                            index === selectedSize
                              ? { backgroundColor: "#ECECEC", color: "#1D1D1B" }
                              : {}
                          }
                          onClick={() => setselectedSize(index)}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.color}>
                  <div className={styles.title}>Color</div>
                  <div className={styles.options}>
                    {product?.colors?.map((color, index) => {
                      return (
                        <img
                          onClick={() => setselectedColor(index)}
                          key={index}
                          style={
                            index === selectedColor
                              ? { border: "1px solid #542E90" }
                              : {}
                          }
                          src={`./images/static/${product?.id}-color-${color}.png`}
                          alt={color}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className={styles.qty}>
                  <div className={styles.title}>Quantity</div>
                  <div className={styles.counter}>
                    <button onClick={handleDecrement} className={styles.minus}>
                      <img src="./images/productMinus.svg" alt="productMinus" />
                    </button>
                    <div className={styles.number}>{productCount}</div>
                    <button onClick={handleIncrement} className={styles.plus}>
                      <img src="./images/productPlus.svg" alt="productPlus" />
                    </button>
                  </div>
                </div>
                <div className={styles.actions}>
                  <button
                    onClick={handleAddToCart}
                    className={styles.addToCart}
                  >
                    Add To Cart
                  </button>
                  <button className={styles.pickup}>Pickup From Store</button>
                </div>
              </div>
            </div>
            <div className={styles.similarProducts}>
              <div className={styles.title}>Similar Products</div>
              <div className={styles.subtitle}>
                You may like these products also
              </div>
              <ProductCarousel
                similarProducts={product?.similarProducts}
                styles={styles}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
}
