import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  const { urls, alt_description, user, likes } = image;

  return (
    <div className={styles.cardContainer} onClick={() => onImageClick(image)}>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        className={styles.cardImage}
      />
      <div className={styles.cardInfo}>
        <p>
          <b>Author:</b> {user.name}
        </p>
        <p>
          <b>Likes:</b> {likes}
        </p>
      </div>
    </div>
  );
}
