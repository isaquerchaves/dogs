import { NavLink } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import React from "react";
import MinhasFotos from "../../../Assets/feed.svg";
import Estatisticas from "../../../Assets/estatisticas.svg";
import AdicionarFoto from "../../../Assets/adicionar.svg";
import Sair from "../../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout }: any = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={styles.mobileButton}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="Minhas Fotos" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={Estatisticas} alt="Estatisticas" />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={AdicionarFoto} alt="Adicionar Foto" />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
