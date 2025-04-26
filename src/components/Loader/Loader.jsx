import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#4caf50" size={60} />
    </div>
  );
}
