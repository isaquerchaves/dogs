import { NavLink } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import React from "react";
import MinhasFotos from "../../../Assets/feed.svg";
import Estatisticas from "../../../Assets/estatisticas.svg";
import AdicionarFoto from "../../../Assets/adicionar.svg";
import Sair from "../../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout }: any = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <img src={MinhasFotos} alt="Minhas Fotos" />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <img src={Estatisticas} alt="Estatisticas" />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <img src={AdicionarFoto} alt="Adicionar Foto" />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} alt="Sair" />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
