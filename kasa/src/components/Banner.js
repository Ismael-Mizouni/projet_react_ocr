import styles from '../styles/Banner.module.sass';

function Banner ({ image, text }) {
  return (
    <div
      className={styles.Banner}
      style={{ backgroundImage: `url(${image})` }} >
        <h1>{text}</h1>
      </div>
  );
}

export default Banner;