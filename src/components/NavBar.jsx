import {Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const AuthButtons = () => {
    const navigate = useNavigate();

    const logoutSubmit = async function() {
        return await AuthService.logout()
            .then(response => {
                if(response.data.success === true) {
                    localStorage.removeItem('auth_pseudo');
                    localStorage.removeItem('auth_token');
                    navigate('/');
                }
            })
    }

    return (
        !localStorage.getItem('auth_token')
            ? <div className="inline-block">
                <Link to="/login"
                        className="px-3 py-1 no-underline bg-blue-600 rounded-md font-semibold text-white hover:bg-blue-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                    Se connecter
                </Link>
                <Link to="/register"
                        className="ml-2 px-3 py-1 no-underline bg-blue-600 rounded-md font-semibold text-white hover:bg-blue-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                    S'enregistrer
                </Link>
            </div>
            : <button type="button" onClick={() => logoutSubmit()}
                    className="px-3 py-1 no-underline bg-red-600 rounded-md font-semibold text-white hover:bg-red-800 transform hover:translate-x-0.5 hover:translate-y-0.5">
                Se déconnecter
            </button>
    )
}

const NavBar = () => {
    return (
        <nav className="hidden md:block space-x-6">
            <Link to='company' className="no-underline font-semibold text-gray-800 hover:text-gray-600">
                Vit'Art
            </Link>
            <a href='https://odc-admin.creacube.be' target="_blank" rel="noopener noreferrer" className="no-underline font-semibold text-gray-800 hover:text-gray-600">
                Admin
            </a>
            <AuthButtons />
        </nav>
    );
}

export default NavBar;