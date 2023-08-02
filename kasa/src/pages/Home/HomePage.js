import Banner from '../../components/Banner';
import homeBanner from '../../assets/homeBanner.png';
import logementsData from '../../datas/logements.json';
import Card from '../../components/Card';
import styles from './HomePage.module.sass';

function HomePage() {
   return (
      <div>
         <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
         <div className={styles.cardContainer}>
            {logementsData.map((logements) => (
               <Card
                  key={logements.id}
                  id={logements.id}
                  cover={logements.cover}
                  title={logements.title}
               />
            ))}
         </div>
      </div>
   );
}

export default HomePage;
