import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import NavMenu from "../components/NabMenu";

const LayoutHome = () => {
    return (
        <div className="mx-0 w-full h-screen flex flex-col justify-center items-center">
            <header className="w-full mx-0 flex-none">
                <div className="bg-gradient-to-r from-blue-200 to-blue-100">
                    <div className="flex items-center justify-end p-4">
                        <NavBar />
                    </div>
                </div>
                <div className="flex justify-center my-0.5">
                    <h1 className="mx-5 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
                        Office des coffres
                    </h1>
                </div>
            </header>
            <main className="mx-5 mb-5 p-5 bg-gray-200 w-11/12 md:w-3/4 h-full flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-xl">
                {/* <Outlet> permet de rendre le contenu enfant de la page active. */}
                <Outlet />
                <NavMenu />
            </main>
        </div>
    );
}

export default LayoutHome;