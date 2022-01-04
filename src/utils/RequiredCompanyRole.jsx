import {useState, useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import AuthService from "../services/auth.service";
import http from "../http-common.js";
import Toast from "../components/Toast";

export default function RequiredCompagnyRole({children}) {
    const [AssignatedRole, setAssignatedRole] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        AuthService.check()
            .then(res => {
                if(res.status === 200) {
                    if(res.data.userRoles.includes('Company-admin') || res.data.userRoles.includes('Company-member')) {
                        setAssignatedRole(true)
                    }
                    setLoading(false);
                }
            });

        return () => {

            setAssignatedRole(false)
        };
    }, []);

    http.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        console.log(error)
        if(error.response.status === 401) {

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

    return AssignatedRole
        ? children
        : Toast.fire({
            icon: 'error',
            title: 'Non autorisé',
        })  && <Navigate to="/app/" replace />;
}