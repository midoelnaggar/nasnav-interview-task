import styles from "@/styles/Loading.module.scss";
import { BarLoader } from "react-spinners"

function Loading() {
  return (
    <div className={styles.loadingContainer}>
    <BarLoader color="#542e90"/>
    </div>
  )
}

export default Loading