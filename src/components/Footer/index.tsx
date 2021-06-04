import React from "react";
import { ContainerFooter } from "../Footer/style";

const Footer: React.FC = ({}) => {
  return (
    <>
      <ContainerFooter>
        <div className="Circulo"></div>
        <div className="containerSocial">
          <a href="https://br.linkedin.com/company/agencia-premium-marketing" target="_blank">
            <img src="./linkeding.svg" alt="Rede social LinkedIn" />
          </a>
          <a href="https://www.facebook.com/agenciapremiumro/" target="_blank">
            <img src="./facebook.svg" alt="Rede social Facebook" />
          </a>
          <a href="https://www.instagram.com/agenciapremiumro/" target="_blank">
            <img src="./instagram.svg" alt="Rede social Instagram" />
          </a>
        </div>
      </ContainerFooter>
    </>
  );
};
export default Footer;
