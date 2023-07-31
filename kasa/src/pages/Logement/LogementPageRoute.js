import { useParams } from 'react-router-dom';
import LogementPage from './LogementPage';
import logementsData from '../../datas/logements.json';

function LogementPageRoute() {
   const { id } = useParams();
   const logement = logementsData.find((logement) => logement.id === id);

   return (
      <div>
         <LogementPage logement={logement} />
      </div>
   );
}

export default LogementPageRoute;
