import React, { useState, useEffect } from "react";
import { ContainerLogin } from "./style";

import { getLogins } from "../../pages/index";


const HomeLogin: React.FC<getLogins> = ({ data }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let [drive, setDrive] = useState("");

  

  const listaClientes = () => {
    return fetch(`https://cms.agenciapremium.com.br/logins`)
    .then( resposta => {
        console.log(resposta);
      
        return resposta.json()
    } )
  }

  function messageInfo() {
    
    if (!drive){
      listaClientes().then(data => {
        data.forEach(elemento => {
          console.log(elemento)
              if(elemento.userName == userName && elemento.password == password){
                console.log(elemento.userName, elemento.password, elemento.drive)
                window.location.replace(elemento.drive)
              }
          });
      })
    } 
  }
  return (
    <>
      <ContainerLogin>
        <div className="Formulario">
          <div className="Imagem">
            <img src="./logoPremium.svg" alt="Logo Agência premium" />
          </div>
          <form>
            <div>
              <label>Login</label>
              <input
                type="text"
                id="userName" // "Email"
                name="userName" //e-mail
                placeholder="Exemplo: Diego"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
              />
            </div>

            <div>
              <label>Senha</label>
              <input
                type="password"
                id="senha"
                name="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <a
              className="botao"
              type="submit"
              href={drive}
              onClick={() => messageInfo()}
            >
              Entrar
            </a>
          </form>
        </div>
      </ContainerLogin>
    </>
  );
};

export default HomeLogin;

// sdfjaskfj
