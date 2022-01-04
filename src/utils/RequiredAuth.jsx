import {useState, useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import AuthService from "../services/auth.service";
import http from "../http-common.js";
import Toast from "../components/Toast";

export default function RequiredAuth({children}) {
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        AuthService.check()
            .then( res => {
                if(res.status === 200) {
                    setAuthenticated(true);
                }
                setLoading(false);
            });

        return () =>  {
            setAuthenticated(false)
        };
    }, []);

    http.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        if(error.response.status === 401) {
            Toast.fire({
                icon: 'error',
                title: 'Non authentifié',
            })
            navigate('/');
        }
        return Promise.reject(error);
    })

    if(loading) {
        return (
            <div className="overflow-y-auto flex flex-col flex-grow">
                <div>...Loading</div>
            </div>
        )
    }

    return Authenticated
        ? children
        : <Navigate to="/login" replace />;
}