import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  position: relative;
  margin-top: 12rem;

  .Circulo {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 250px;
    height: 250px;
    clip-path: circle(128px at 230px 230px);
    background: #333333;
  }

  .containerSocial {
    display: flex;
    width: 100%;
    height: 100%;
    /* margin-top: 15rem; */
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    margin-bottom: 18.4rem;
    background: transparent;
  }

  @media screen and (max-width: 940px) {
    margin-top: 4.6rem;
    .containerSocial {
      /* margin-top: 15rem; */
      margin: 17.61rem !important;
    }
  }

  
  @media screen and (max-width: 360px) {
    margin-top: 4.6rem;
    .Circulo {
      clip-path: circle(81px at 252px 230px);
    }
    .containerSocial {
      /* margin-bottom: 8rem; */
      margin: 7.61rem !important;
    }
  }
`;
