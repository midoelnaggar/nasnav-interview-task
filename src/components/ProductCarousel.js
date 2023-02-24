import styles from "@/styles/ProductCarousel.module.scss";
import { addComma } from "@/services/helpers";

function ProductCarousel({ similarProducts }) {
  return (
    <div className={styles.carousel}>
      {similarProducts?.map((product,index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={product?.image}
                alt="01"
              />
              <button className={styles.display360}>
                <img src="./images/display360.svg" alt="display360" />
              </button>
            </div>
            <div className={styles.details}>
              <div className={styles.name}>
                {product?.name}
              </div>
              <div className={styles.priceAndBrand}>
                <div className={styles.price}>
                  <div className={styles.current}>{addComma(product?.price)}</div>
                  <div className={styles.old}>{addComma(product?.oldPrice)}</div>
                  <div className={styles.discount}>{product?.discount} Off</div>
                </div>
                <div className={styles.brand}>
                  <img src={product?.brandLogo} alt="adidas" />
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
                <div className={styles.rate}>{product?.rate} of 5</div>
              </div>
              <div className={styles.location}>
                Pickup From: <strong>{product?.pickupFrom}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCarousel;
