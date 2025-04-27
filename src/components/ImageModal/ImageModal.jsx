import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export default function ImageModal({ image, isOpen, onClose }) {
  if (!isOpen || !image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
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
