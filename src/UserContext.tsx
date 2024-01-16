import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

interface UserContextProps {
    userLogin: (username: string, password: string) => void;
    data: any;
}

export const UserContext = React.createContext<UserContextProps | undefined>(undefined);

export const UserStorage = ({ children }: any) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState<boolean | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function getUser(token: string) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
        console.log(json);
    }

    async function userLogin(username: string, password: string) {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenRes = await fetch(url, options);
        const { token } = await tokenRes.json();
        window.localStorage.setItem('token', token);
        getUser(token);
    }

    return (
        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    );
};