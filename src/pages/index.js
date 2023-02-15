import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";

export default function Home({ cart, setCart, setOpenCart }) {
  const [productCount, setProductCount] = useState(1);

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
          id: "1001",
          name: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
          image:"/images/static/productImage00.png",
          qty: productCount,
          price: 9999,
        },
      ]);
    } else {
     
    let found = await cart.find(e => e.id === '1001');
    found.qty += productCount
     let otherProducts = await cart.filter((e)=>{
      return(e.id != "1001")
     })
     setCart([found,...otherProducts])
    }
    setOpenCart(true);
    setProductCount(1);
  };

  return (
    <>
      <Head>
        <title>Adidas Black T-Shirt - Yeshtery</title>
        <meta name="description" content="Adidas Black T-Shirt - Yeshtery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs />
      <main className={styles.main}>
        <div className={styles.product}>
          <div className={styles.images}>
            <div className={styles.mainImage}>
              <img
                className={styles.image}
                src="./images/static/productImage00.png"
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
                <img
                  src="./images/static/productImage01.png"
                  alt="productImage01"
                />
                <img
                  src="./images/static/productImage02.png"
                  alt="productImage02"
                />
                <img
                  src="./images/static/productImage03.png"
                  alt="productImage03"
                />
                <img
                  src="./images/static/productImage04.png"
                  alt="productImage04"
                />
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
              <img src="./images/static/adidas.svg" alt="adidas" />
            </div>
            <div className={styles.name}>
              Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </div>
            <div className={styles.category}>Men</div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <button>
                  <img
                    src="./images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  <img
                    src="./images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  <img
                    src="./images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  <img
                    src="./images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  <img
                    src="./images/productGreyStar.svg"
                    alt="productGreyStar"
                  />
                </button>
              </div>
              <div className={styles.rate}>4.9 of 5</div>
              <div className={styles.count}>22 Rates</div>
            </div>
            <div className={styles.price}>
              <div className={styles.current}>9,999</div>
              <div className={styles.old}>9,999</div>
              <div className={styles.discount}>30% Off</div>
            </div>
            <div className={styles.size}>
              <div className={styles.title}>Size</div>
              <div className={styles.options}>
                <button>Small</button>
                <button>Medium</button>
                <button
                  style={{ backgroundColor: "#ECECEC", color: "#1D1D1B" }}
                >
                  Large
                </button>
                <button>X Large</button>
                <button>XX Large</button>
              </div>
            </div>
            <div className={styles.color}>
              <div className={styles.title}>Color</div>
              <div className={styles.options}>
                <img
                  style={{ border: "1px solid #542E90" }}
                  src="./images/static/color1.png"
                  alt="color1"
                />
                <img src="./images/static/color2.png" alt="color2" />
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
              <button onClick={handleAddToCart} className={styles.addToCart}>
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
          <div className={styles.carousel}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="./images/static/01.png"
                  alt="01"
                />
                <button className={styles.display360}>
                  <img src="./images/display360.svg" alt="display360" />
                </button>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <div className={styles.priceAndBrand}>
                  <div className={styles.price}>
                    <div className={styles.current}>9,999</div>
                    <div className={styles.old}>9,999</div>
                    <div className={styles.discount}>30% Off</div>
                  </div>
                  <div className={styles.brand}>
                    <img src="./images/static/adidas.svg" alt="adidas" />
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGreyStar.svg"
                        alt="productGreyStar"
                      />
                    </button>
                  </div>
                  <div className={styles.rate}>4.9 of 5</div>
                </div>
                <div className={styles.location}>
                  Pickup From: <strong>Genena Mall</strong>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="./images/static/02.png"
                  alt="02"
                />
                <button className={styles.display360}>
                  <img src="./images/display360.svg" alt="display360" />
                </button>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <div className={styles.priceAndBrand}>
                  <div className={styles.price}>
                    <div className={styles.current}>9,999</div>
                    <div className={styles.old}>9,999</div>
                    <div className={styles.discount}>30% Off</div>
                  </div>
                  <div className={styles.brand}>
                    <img src="./images/static/adidas.svg" alt="adidas" />
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGreyStar.svg"
                        alt="productGreyStar"
                      />
                    </button>
                  </div>
                  <div className={styles.rate}>4.9 of 5</div>
                </div>
                <div className={styles.location}>
                  Pickup From: <strong>Genena Mall</strong>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="./images/static/03.png"
                  alt="03"
                />
                <button className={styles.display360}>
                  <img src="./images/display360.svg" alt="display360" />
                </button>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <div className={styles.priceAndBrand}>
                  <div className={styles.price}>
                    <div className={styles.current}>9,999</div>
                    <div className={styles.old}>9,999</div>
                    <div className={styles.discount}>30% Off</div>
                  </div>
                  <div className={styles.brand}>
                    <img src="./images/static/adidas.svg" alt="adidas" />
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGreyStar.svg"
                        alt="productGreyStar"
                      />
                    </button>
                  </div>
                  <div className={styles.rate}>4.9 of 5</div>
                </div>
                <div className={styles.location}>
                  Pickup From: <strong>Genena Mall</strong>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="./images/static/04.png"
                  alt="04"
                />
                <button className={styles.display360}>
                  <img src="./images/display360.svg" alt="display360" />
                </button>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <div className={styles.priceAndBrand}>
                  <div className={styles.price}>
                    <div className={styles.current}>9,999</div>
                    <div className={styles.old}>9,999</div>
                    <div className={styles.discount}>30% Off</div>
                  </div>
                  <div className={styles.brand}>
                    <img src="./images/static/adidas.svg" alt="adidas" />
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGreyStar.svg"
                        alt="productGreyStar"
                      />
                    </button>
                  </div>
                  <div className={styles.rate}>4.9 of 5</div>
                </div>
                <div className={styles.location}>
                  Pickup From: <strong>Genena Mall</strong>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src="./images/static/01.png"
                  alt="01"
                />
                <button className={styles.display360}>
                  <img src="./images/display360.svg" alt="display360" />
                </button>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
                <div className={styles.priceAndBrand}>
                  <div className={styles.price}>
                    <div className={styles.current}>9,999</div>
                    <div className={styles.old}>9,999</div>
                    <div className={styles.discount}>30% Off</div>
                  </div>
                  <div className={styles.brand}>
                    <img src="./images/static/adidas.svg" alt="adidas" />
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGoldenStar.svg"
                        alt="productGoldenStar"
                      />
                    </button>
                    <button>
                      <img
                        src="./images/productGreyStar.svg"
                        alt="productGreyStar"
                      />
                    </button>
                  </div>
                  <div className={styles.rate}>4.9 of 5</div>
                </div>
                <div className={styles.location}>
                  Pickup From: <strong>Genena Mall</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
