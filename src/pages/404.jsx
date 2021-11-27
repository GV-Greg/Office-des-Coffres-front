import { Link } from 'react-router-dom';

export default function NoMatch() {
    return (
        <div className="overflow-y-auto flex flex-col flex-grow">
            <h2>PAGE 404</h2>
            <p>
                <Link to="/">Retour Accueil</Link>
            </p>
        </div>
    );
}