import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { Profile } from "../../components/Profile/Profile";
import { useAuth0 } from '@auth0/auth0-react';

export const Dashboard = () => {
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
            <Profile />
            <LogoutButton />
        </div>
    );
};
