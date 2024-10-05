import { LoginButton } from "../../Components/LoginButton/LoginButton";
import "./Home.css";

export const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenido a ColApp</h1>
            <p>Por favor inicia sesión para acceder a tu Dashboard.</p>
            <LoginButton></LoginButton>
        </div>
    );
}