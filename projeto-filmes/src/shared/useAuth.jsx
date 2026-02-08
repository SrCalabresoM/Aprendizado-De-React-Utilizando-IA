import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../lib/supabase.js"

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
        }

        getUser();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user || null);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
