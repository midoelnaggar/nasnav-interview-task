import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <button>
          <img src="/images/headerMenu.svg" alt="Menu" />
        </button>
        <a href="">
          <img
            className={styles.logo}
            src="/images/headerYeshteryLogo.svg"
            alt="Logo"
          />
        </a>
        <div className={styles.ad}>
          <img src="/images/headerArrowLeft.svg" alt="headerArrowLeft" />
          <div>
            Valentine’s Day Offers! Buy Two Get One Free <a href="">Shop Now</a>
          </div>
          <img src="/images/headerArrowRight.svg" alt="headerArrowRight" />
        </div>
        <div className={styles.links}>
          <a href="">
            <img src="/images/headerPhone.svg" alt="Phone" /> Contact Us
          </a>
          <a href="">
            <img src="/images/headerTrolley.svg" alt="Trolley" /> Track Order
          </a>
          <a href="">
            <img src="/images/headerPin.svg" alt="Pin" /> Find A Store
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.searchInputContainer}>
          <input placeholder="Search" />
          <img src="/images/headerSearch.svg" alt="headerSearch" />
        </div>

        <div className={styles.vendorLogoContainer}>
          <img src="/images/static/adidas.svg" alt="adidas" />
        </div>
        <div className={styles.cartWishlistLogin}>
          <button>
            <img src="/images/headerCart.svg" alt="headerCart" />
            Cart
          </button>
          <button>
            <img src="/images/headerHeart.svg" alt="headerHeart" />
            Wishlist
          </button>
          <button>
            <img src="/images/headerUser.svg" alt="headerUser" />
            Login
          </button>
        </div>
      </div>
        <div className={styles.bottom}>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Unisex</a>
        <a href="">Kids</a>
        <a href="">Best Sellers</a>
        <a href="">New Arrivals</a>
        <a href="">Offers</a>
        </div>
    </header>
  );
};

export default Header;
