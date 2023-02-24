import styles from "@/styles/Rating.module.scss";

function Rating({rate,totalRates}) {
  return (
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
    <div className={styles.rate}>{rate} of 5</div>
    <div className={styles.count}>{totalRates} Rates</div>
  </div>
  )
}

export default Rating