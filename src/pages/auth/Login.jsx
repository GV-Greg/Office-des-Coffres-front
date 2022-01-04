<<<<<<< HEAD
export default function Login() {
    return (
        <div className="overflow-y-auto flex flex-col flex-grow">
            <h2>Page Login</h2>
        </div>
    );
=======
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import Toast from '../../components/Toast';

export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        pseudo: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        pseudo: '',
        password: '',
    });

    const {pseudo, password} = user;

    const onInputChange = (e) => {
        e.persist()
        setUser({ ...user, [e.target.name]: e.target.value})
    };

    async function connect(e) {
        e.preventDefault();
        const data = {
            pseudo: user.pseudo,
            password: user.password,
        }

        await AuthService.login(data)
            .then(response => {
                if(response.data.success === true) {
                    localStorage.setItem('auth_pseudo', response.data.data.pseudo);
                    localStorage.setItem('auth_token', response.data.data.token);
                    navigate('/app/');
                }
            })
            .catch(error => {
                Toast.fire({
                    icon: 'error',
                    title: error.response.data.message,
                })
                setErrors({...errors,
                    pseudo: error.response.data.errors.pseudo,
                    password: error.response.data.errors.password,
                })
            });
    }

    return (
        <main className="w-11/12 md:w-1/3 grid justify-items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
                Office des coffres
            </h1>
            <div className="w-11/12 md:w-11/12 mb-1 grid grid-cols-1 text-center text-white text-3xl font-bold hover:text-gray-800 transform hover:translate-y-px hover:translate-x-px shadow-inner">
                <Link to="/app/" className="py-4 md:pb-2.5 md:pt-1.5 bg-gradient-to-br from-red-600 to-orange-400 rounded-xl align-middle">Entrez sans compte</Link>
            </div>
            <div className="w-11/12 my-5 bg-gray-200 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
                <div className="w-full mt-2 md:mt-5 px-7 overflow-y-auto">
                    <h2>Connectez-vous</h2>
                    <form className="mt-6" onSubmit={connect}>
                        <div className="form-group">
                            <label htmlFor="pseudo" className="form-label">Pseudo</label>
                            <input type="text" name="pseudo" value={pseudo} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.pseudo}</span>
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" name="password" value={password} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.password}</span>
                        </div>
                        <div className="form-group mt-10">
                            <button type="submit" className="btn-auth py-2 uppercase">Se connecter</button>
                        </div>
                    </form>
                    <div className="my-5 md:my-6 flex flex-col md:flex-row justify-center text-center">
                    <span className="text-base md:text-lg">
                        Vous n'avez pas de compte ?
                    </span>
                        <span className="mt-2 md:mt-0 text-xl md:text-lg">
                        <Link to="/register" className="ml-1 font-bold text-blue-600">Enregistrez-vous!</Link>
                    </span>
                    </div>
                </div>
            </div>
        </main>
    )
>>>>>>> develop
}