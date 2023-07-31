import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import styles from './LogementPage.module.css';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Ratings';

function LogementPage({ logement }) {
   const navigate = useNavigate();

   useEffect(() => {
      if (!logement) {
         navigate('/not-found');
      }
   }, [logement, navigate]);

   if (!logement) {
      return null;
   }

   return (
      <div>
         <Gallery pictures={logement.pictures} />
         <div className={styles.logementContainer}>
            <h1 className={styles.title}>{logement.title}</h1>
            <h2 className={styles.location}>{logement.location}</h2>
            <ul className={styles.tagsContainer}>
               {logement.tags.map((tag, index) => (
                  <li key={index} className={styles.tags}>
                     {tag}
                  </li>
               ))}
            </ul>
            <div className={styles.hostContainer}>
               <div className={styles.hostDef}>
                  <h2>{logement.host.name}</h2>
                  <img src={logement.host.picture} alt={logement.host.name} />
               </div>
               <Rating rating={logement.rating} className={styles.rating} />
            </div>
            <div className={styles.collapseContainer}>
               <Collapse
                  title="Description"
                  className={styles.collapseDescription}
                  contentClassName={styles.collapseContent}
               >
                  <p className={styles.collapseP}>{logement.description}</p>
               </Collapse>
               <Collapse
                  title="Equipements"
                  className={styles.collapseEquipments}
                  contentClassName={styles.collapseContent}
               >
                  <ul className={styles.collapseUl}>
                     {logement.equipments.map((equipments, index) => (
                        <li key={index} className={styles.equipments}>
                           {equipments}
                        </li>
                     ))}
                  </ul>
               </Collapse>
            </div>
         </div>
      </div>
   );
}

export default LogementPage;
