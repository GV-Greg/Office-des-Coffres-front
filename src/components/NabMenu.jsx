import {Link} from "react-router-dom";
import * as GameIcons from "react-icons/gi";

const pages = [
    { name: "Home", link: "/app/", icon:"GiMedievalPavilion", color: "gray"},
    { name: "Éco", link: "/app/eco", icon:"GiChest", color: "yellow"},
    { name: "Sécu", link: "/app/secu", icon:"GiSwordsEmblem", color: "salmon"},
    { name: "Anim", link: "/app/anim", icon:"GiRollingDiceCup", color: "teal"},
    { name: "Profil", link: "/app/profil", icon:"GiBarbute", color: "slate"},
];

const navLinks = pages.map(
    ({ name, link, icon, color }) => {
        const Icon = GameIcons[icon]
        return (
            <Link to={link} key={name} className={`mx-2 md:mx-5 h-20 w-20 p-4 flex flex-col items-center bg-${color}-600 hover:bg-${color}-500 rounded-full ring-4 ring-${color}-400 ring-opacity-30 ring-offset-1 ring-offset-${color}-100 shadow-inner`}>
                <Icon className={`text-4xl text-${color}-100`}/>
                <span className={`text-xs text-${color}-100 font-bold`}>{name}</span>
            </Link>
        )
    }
)

const NavMenu = () => {
    return (
        <nav className="flex flex-wrap justify-center">
            {navLinks}
        </nav>
    )
}

export default NavMenu;