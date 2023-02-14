import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Home() {
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
                src="/images/static/productImage00.png"
                alt="productImage00"
              />
              <button className={styles.display360}>
                <img src="/images/display360.svg" alt="display360" />
              </button>
            </div>
            <div className={styles.swiper}>
              <button>
                <img
                  src="/images/productArrowLeft.svg"
                  alt="productArrowLeft"
                />
              </button>
              <div className={styles.smallImages}>
                <img
                  src="/images/static/productImage01.png"
                  alt="productImage01"
                />
                <img
                  src="/images/static/productImage02.png"
                  alt="productImage02"
                />
                <img
                  src="/images/static/productImage03.png"
                  alt="productImage03"
                />
                <img
                  src="/images/static/productImage04.png"
                  alt="productImage04"
                />
              </div>
              <button>
                <img
                  src="/images/productArrowRight.svg"
                  alt="productArrowRight"
                />
              </button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.brand}>
              <img src="/images/static/adidas.svg" alt="adidas" />
            </div>
            <div className={styles.name}>
              Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </div>
            <div className={styles.category}>Men</div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <button>
                  {" "}
                  <img
                    src="/images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="/images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="/images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="/images/productGoldenStar.svg"
                    alt="productGoldenStar"
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="/images/productGreyStar.svg"
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
                  src="/images/static/color1.png"
                  alt="color1"
                />
                <img src="/images/static/color2.png" alt="color2" />
              </div>
            </div>
            <div className={styles.qty}>
              <div className={styles.title}>Quantity</div>
              <div className={styles.counter}>
                <button className={styles.minus}>
                  {" "}
                  <img src="/images/productMinus.svg" alt="productMinus" />
                </button>
                <div className={styles.number}>1</div>
                <button className={styles.plus}>
                  <img src="/images/productPlus.svg" alt="productPlus" />
                </button>
              </div>
            </div>
            <div className={styles.actions}>
              <button className={styles.addToCart}>Add To Cart</button>
              <button className={styles.pickup}>Pickup From Store</button>
            </div>
          </div>
        </div>
        <div className={styles.similarProducts}>
        <div className={styles.title}>
        Similar Products
        </div>
        <div className={styles.subtitle}>
        You may like these products also
        </div>
        <div className={styles.carousel}>
        <div className={styles.card}>
        </div>
        </div>
        </div>
      </main>
    </>
  );
}
