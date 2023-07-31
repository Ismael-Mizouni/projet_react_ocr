import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
   return (
      <div className={styles.notFound}>
         <h2 className={styles.title}>404</h2>
         <p className={styles.oups}>
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to="/" className={styles.link}>
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
}

export default NotFoundPage;
