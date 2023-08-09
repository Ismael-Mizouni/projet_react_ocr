import React, { useState } from 'react';
import leftVector from '../assets/leftVector.png';
import rightVector from '../assets/rightVector.png';
import styles from '../styles/Gallery.module.sass';

function Gallery({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleLeftClick = () => {
      if (currentIndex === 0) {
         setCurrentIndex(pictures.length - 1);
      } else {
         setCurrentIndex(currentIndex - 1);
      }
   };

   const handleRightClick = () => {
      if (currentIndex === pictures.length - 1) {
         setCurrentIndex(0);
      } else {
         setCurrentIndex(currentIndex + 1);
      }
   };

   return (
      <div className={styles.gallery}>
         {pictures.length > 1 && (
            <img
               className={styles.leftVector}
               src={leftVector}
               alt="Précédent"
               onClick={handleLeftClick}
            />
         )}
         <img
            className={styles.currentPicture}
            src={pictures[currentIndex]}
            alt={`Logement ${currentIndex + 1}`}
         />
         {pictures.length > 1 && (
            <img
               className={styles.rightVector}
               src={rightVector}
               alt="Suivant"
               onClick={handleRightClick}
            />
         )}
         <p className={styles.imageCounter}>
            {currentIndex + 1}/{pictures.length}
         </p>
      </div>
   );
}

export default Gallery;