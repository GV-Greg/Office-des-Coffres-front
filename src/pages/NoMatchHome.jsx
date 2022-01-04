import { Link, useParams } from 'react-router-dom';

const NoMatch = () => {
    const params = useParams();
    return (
        <div className="overflow-y-auto flex flex-col flex-grow">
            <h2 className="text-black">page { params.pageName } inconnue !</h2>
            <Link to="/app/" className="font-bold text-blue-500 mt-5 text-center">Retour Accueil</Link>
        </div>
    );
}

export default NoMatch;