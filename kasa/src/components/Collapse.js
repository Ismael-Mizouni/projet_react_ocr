import { useState } from 'react';
import downVector from '../assets/downVector.png';
import upVector from '../assets/upVector.png';
import styles from '../styles/Collapse.module.css';

function Collapse({ title, children, className, contentClassName }) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <div className={`${styles.collapse} ${className}`}>
         <div className={styles.header} onClick={toggleOpen}>
            <h2>{title}</h2>
            <img
               src={isOpen ? upVector : downVector}
               alt={isOpen ? 'Fermer' : 'Ouvrir'}
            />
         </div>
         {isOpen && (
            <div className={`${styles.content} ${contentClassName}`}>
               {children}
            </div>
         )}
      </div>
   );
}

export default Collapse;
