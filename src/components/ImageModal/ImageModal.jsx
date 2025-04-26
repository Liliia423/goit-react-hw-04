import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <img
        src={urls.regular}
        alt={alt_description || "Image"}
        className={styles.modalImage}
      />
    </Modal>
  );
}
