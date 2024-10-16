import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = (redirectIfAuthenticated = false) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token && !redirectIfAuthenticated) {
            navigate("/login");
        } else if (token && redirectIfAuthenticated) {
            navigate("/");
        }
    }, [token, redirectIfAuthenticated, navigate]);

    return token;
};

export default useAuthRedirect;
