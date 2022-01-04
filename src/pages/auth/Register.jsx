import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Toast from '../../components/Toast';

export default function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        pseudo: '',
        email: '',
        password: '',
        confirmation: ''
    })

    const [errors, setErrors] = useState({
        pseudo: '',
        email: '',
        password: '',
        confirmation: ''
    });

    const {pseudo, email, password, confirmation} = user;

    const onInputChange = (e) => {
        e.persist();
        setUser({ ...user, [e.target.name]: e.target.value})
    };

    async function register (e) {
        e.preventDefault();
        const data = {
            pseudo: user.pseudo,
            email: user.email,
            password: user.password,
            confirmation: user.confirmation,
        }

        await AuthService.register(data)
            .then(response => {
                if(response.data.success === true) {
                    localStorage.setItem('auth_pseudo', response.data.data.pseudo);
                    localStorage.setItem('auth_token', response.data.data.token);
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message,
                    })
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
                    email: error.response.data.errors.email,
                    password: error.response.data.errors.password,
                    confirmation: error.response.data.errors.confirmation,
                })
            })
    }

    return (
        <main className="w-11/12 md:w-1/3 grid justify-items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
                Office des coffres
            </h1>
            <div className="w-1/3 mb-1 px-3 grid grid-cols-1 justify-items-center text-white text-2xl font-bold hover:text-red-900 transform hover:translate-y-px hover:translate-x-px shadow-md">
                <Link to="/login" className="w-full flex justify-center items-center pb-2.5 pt-1.5 text-center bg-gradient-to-br from-red-600 to-orange-400 rounded-md align-middle">
                    <FaArrowAltCircleLeft /> <span className="ml-2 mb-0.5">Retour</span>
                </Link>
            </div>
            <div className="w-11/12 my-5 pb-2 bg-gray-200 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
                <div className="w-full mt-2 md:mt-3 px-7 overflow-y-auto">
                    <h2>Cr&eacute;ation votre compte</h2>
                    <form className="mb-2" onSubmit={register} >
                        <div className="form-group">
                            <label htmlFor="pseudo" className="form-label">Pseudo</label>
                            <input type="text" name="pseudo" value={pseudo} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.pseudo}</span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" name="email" value={email} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.email}</span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" name="password" value={password} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.password}</span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="confirmation" className="form-label">Confirmation mot de passe</label>
                            <input type="password" name="confirmation" value={confirmation} onChange={onInputChange} className="form-field" />
                            <span className="form-error">{errors.confirmation}</span>
                        </div>
                        <div className="form-group mt-4">
                            <button type="submit" className="btn-auth py-2 uppercase">S'enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}