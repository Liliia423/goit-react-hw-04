import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.galleryList}>
        {images.map((image) => (
          <li key={image.id} className={styles.galleryItem}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
