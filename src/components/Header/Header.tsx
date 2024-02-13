import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header: React.FC = () => {
    const { data, userLogout }: any = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} aria-label="Dogs - Home" to="/">
                    <img src={Dogs} alt="Dogs Logo" />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/conta">
                        {data.nome}
                        <button onClick={userLogout}>Sair</button>
                    </Link>
                ) : (<Link className={styles.login} to="/login">
                    Login / Criar
                </Link>)}
            </nav>
        </header>
    );
};

export default Header;