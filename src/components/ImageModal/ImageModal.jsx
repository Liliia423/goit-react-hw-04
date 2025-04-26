import styles from "./ImageModal.module.css";

export default function ImageModal({ image }) {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <div className={styles.modal}>
      <img
        src={urls.regular}
        alt={alt_description || "Image"}
        className={styles.modalImage}
      />
    </div>
  );
}
