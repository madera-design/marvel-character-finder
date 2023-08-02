// Login.js

import React, { useState } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import "../assets/css/login.css";
import { loginSuccess, logout } from "../assets/store/loginActions";
import Modal from "./Modal";

const Login = ({ isLoggedIn, username, loginSuccess, logout }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (usernameInput.trim() !== "" && password === "password") {
      loginSuccess(usernameInput);
    } else {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
    }
  };

  const handleLogout = () => {
    logout();
    setUsernameInput("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div className="header-login">
            <h2>Bienvenido, {username}!</h2>
            <div>
              <button className="login-button-logout" onClick={handleLogout}>
                Cerrar sesión
              </button>
              <Modal />
            </div>
          </div>
          <ListItem />
        </div>
      ) : (
        <div className="login-container">
          <h2 className="text-login">Iniciar Sesion</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Iniciar sesión
          </button>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  username: state.login.username,
});

const mapDispatchToProps = {
  loginSuccess,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
