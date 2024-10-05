import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <>
            {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> */}
            <Button 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            variant="contained"
            color="error"
            >Salir</Button>
        </>
    );
}