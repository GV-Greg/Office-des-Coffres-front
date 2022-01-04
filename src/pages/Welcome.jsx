<<<<<<< HEAD
export default function Home() {
    return (
        <div className="overflow-y-auto flex flex-col flex-grow">
            <h2>Bienvenue !</h2>
            {/*<div>Vous êtes entré dans l'Office des coffres.</div>*/}
            {/*<p></p>*/}
        </div>
    );
}
=======
import {GoShield} from "react-icons/go";
import {GiBroadheadArrow} from "react-icons/gi";
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="text-white grid justify-items-center">
            <h1 className="mb-32 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">
                Office des coffres
            </h1>
            <Link to='/login'><GoShield className="text-10xl" /></Link>
            <div className="animate-bounce -translate-y-6 mt-8 grid grid-cols-1 justify-items-center">
                <div className="text-4xl">
                    <GiBroadheadArrow  className="transform rotate-225"/>
                </div>
                <div className="mt-1 font-serif font-bold text-2xl">click</div>
            </div>
        </div>
    );
}

export default Welcome;
>>>>>>> develop
