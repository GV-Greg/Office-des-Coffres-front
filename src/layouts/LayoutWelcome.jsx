import { Outlet } from "react-router-dom";

export default function LayoutWelcome() {
    return (
        <div className="mx-0 w-full h-full grid grid-cols-1 justify-items-center items-start">
            <Outlet />
        </div>
    );
}