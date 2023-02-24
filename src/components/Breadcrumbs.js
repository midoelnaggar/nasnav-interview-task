import styles from "@/styles/Breadcrumbs.module.scss";

const Breadcrumbs = ({productName,brand}) => {
  return (
    <div className={styles.main}>
      <a href=""> Men</a> / <a href=""> Clothing</a> / <a href=""> Tops</a> /{" "}
      <a href=""> {brand}</a> / {productName}
    </div>
  );
};

export default Breadcrumbs;
