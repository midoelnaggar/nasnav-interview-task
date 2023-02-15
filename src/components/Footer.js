import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.start}>
          <img src="./images/footerLogo.svg" alt="footerLogo" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
            <br />
            <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
            <br />
            <br /> Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit
          </p>
        </div>
        <div className={styles.end}>
          <div className={styles.title}>Subscribe to our newsletter</div>
          <div className={styles.inputContainer}>
            <input placeholder="Enter Your Mail" />
            <button>
              Subscribe{" "}
              <img src="./images/footerSubscribe.svg" alt="footerSubscribe" />
            </button>
          </div>
          <div className={styles.links}>
            <div className={styles.start}>
              <a href="">About Us</a>
              <a href="">Contact Us</a>
              <a href="">Track Order</a>
              <a href="">Terms & Conditions</a>
              <a href="">Privacy Policy</a>
              <a href="">Sell With Us</a>
              <a href="">Shipping And Returns</a>
            </div>
            <div className={styles.end}>
              <a href="">
                {" "}
                <img src="./images/fb.svg" alt="fb" /> /YESHTERY
              </a>
              <a href="">
                {" "}
                <img src="./images/li.svg" alt="li" /> /YESHTERY
              </a>
              <a href="">
                {" "}
                <img src="./images/ig.svg" alt="ig" /> /YESHTERY
              </a>
              <a href="">
                {" "}
                <img src="./images/tw.svg" alt="tw" /> /YESHTERY
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.start}>
          © 2021 yeshtery, all rights reserved.
        </div>
        <div className={styles.center}>
          <img src="./images/cod.png" alt="cod" />
          <img src="./images/visa.png" alt="visa" />
          <img src="./images/mc.png" alt="mc" />
        </div>
        <div className={styles.end}>
          Powered By <img src="./images/nasnav.png" alt="nasnav" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
