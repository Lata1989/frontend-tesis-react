import { Profile } from "../Profile/Profile";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#">Usuarios</a>
                    </li>
                    <li>
                        <a href="#">Agregar usuario</a>
                    </li>
                    <li>
                        <Profile />
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </nav>

        </>
    );
}