import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button onClick={() => loginWithRedirect({
                authorizationParams: {
                    redirect_uri: `${window.location.origin}/dashboard`  // Redirige al dashboard después del login
                }
            })}>Login</button>
        </>
    );
}