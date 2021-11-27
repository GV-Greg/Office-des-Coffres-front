import { useParams } from "react-router-dom";
import { getUser } from "../../../data";

export default function User() {
    let params = useParams();
    let user = getUser(parseInt(params.userId, 10));
    return (
        <main className="p-5">
            <h2>Profil de joueur {user.pseudo}</h2>
        </main>
    );
}