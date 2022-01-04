import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { getUsers } from "../../../data";

export default function Users() {
    let users = getUsers();

    return (
        <div className="flex">
            <div>
                {users.map(user => (
                    <Link to={`/admin/users/${user.id}`} key={user.id}>{user.pseudo}</Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
}