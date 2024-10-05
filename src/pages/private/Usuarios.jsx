import { Cliente } from "../../Components/Cliente/Cliente";
import { LogoutButton } from "../../Components/LogoutButton/LogoutButton";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Profile } from "../../Components/Profile/Profile";
import { useAuth0 } from '@auth0/auth0-react';

export const Usuarios = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    // Mostrar un indicador de carga mientras Auth0 verifica el estado del usuario
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!isAuthenticated) {
        return <div>No estás autenticado.</div>;
    }

    return (
        <div>
            <Cliente></Cliente>
        </div>
    );
};
