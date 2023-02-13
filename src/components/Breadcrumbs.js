import styles from "@/styles/Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  return (
    <div className={styles.main}>
      <a href=""> Men</a> / <a href=""> Clothing</a> / <a href=""> Tops</a> /{" "}
      <a href=""> Adidas</a> / Adidas Black T-Shirt
    </div>
  );
};

export default Breadcrumbs;
