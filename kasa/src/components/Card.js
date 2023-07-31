import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';

function Card({ id, cover, title }) {
   return (
      <Link to={`/logement/${id}`} className={styles.card}>
         <img className={styles.cardImage} src={cover} alt={title} />
         <h2 className={styles.cardTitle}>{title}</h2>
      </Link>
   );
}

export default Card;
