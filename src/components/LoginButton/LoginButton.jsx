import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

export const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button onClick={() => loginWithRedirect({
                authorizationParams: {
                    redirect_uri: `${window.location.origin}/usuarios`  // Redirige al dashboard después del login
                }
            })}>Login</button>
        </>
    );
}