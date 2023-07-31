import styles from '../styles/Footer.module.css';
import footerLogo from '../assets/footerLogo.png';

function Footer() {
   return (
      <div className={styles.footer}>
         <img className={styles.logo} src={footerLogo} alt="Logo" />
         <p>© 2020 Kasa. All rights reserved</p>
      </div>
   );
}

export default Footer;
