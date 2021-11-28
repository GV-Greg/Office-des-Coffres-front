import { Outlet, Link } from "react-router-dom";

export default function Admin() {
    return (
        <div className="overflow-y-auto flex flex-col flex-grow">
            <nav className="border-bottom border pb-5">
                <Link to="/admin/users" className="px-2">Utilisateurs</Link>
            </nav>
            <Outlet />
        </div>
    );
}