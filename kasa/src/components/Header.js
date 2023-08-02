import headerLogo from '../assets/headerLogo.png';
import styles from '../styles/Header.module.sass';

import { NavLink, useLocation } from 'react-router-dom';

function Header() {
   const location = useLocation();

   return (
      <header className={styles.header}>
         <img src={headerLogo} alt="Logo" className={styles.logo} />
         <nav>
            <ul className={styles.nav}>
               <li>
                  <NavLink
                     to="/"
                     style={
                        location.pathname === '/'
                           ? {
                                textDecoration: 'underline',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                           : {
                                textDecoration: 'none',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                     }
                  >
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     style={
                        location.pathname === '/about'
                           ? {
                                textDecoration: 'underline',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                           : {
                                textDecoration: 'none',
                                color: '#ff6060',
                                fontSize: '1.3em',
                             }
                     }
                  >
                     À propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;