import { Link } from "react-router-dom"
export function CreateRoom() {
    return (
        <div>
            <p>Create Room</p>
            <Link className="underline" to="/room">
                Acessar Sala
            </Link>
        </div>
    )
}