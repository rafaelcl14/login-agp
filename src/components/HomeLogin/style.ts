import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 940px) {
    .Formulario {
      .Imagem {
        padding-top: 3rem;
        img {
          width: 50%;
        }
      }
      form {
        padding-top: 2rem;
        gap: 6rem !important;
        div {
          height: 3.3rem !important;
          width: 30.5rem !important;
          label {
            font-size: 12px !important;
          }
          input {
          }
        }
      }
      .botao {
        margin-top: 1.5rem !important;
      }
    }
  }
  /* @media screen and (max-width:840px){
        .Formulario {
            .Imagem {
                img {
                    
                }
            }
            form {
                div {
                    width: 35.5rem !important;
                    
                }
            }
        }
    } */

  .Formulario {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Imagem {
      display: flex;
      justify-content: center;
      margin: 5.3rem 0;
    }

    form {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8.8rem;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 55.4rem;
        height: 6.6rem;
        position: relative;

        label {
          position: absolute;
          top: -20px;
          left: 0;
          font-size: 16px;
          font-weight: 600;
        }

        input {
          display: flex;
          width: 100%;
          height: 6.6rem;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 16px;
          border-bottom: 1px solid #ffffff;
        }
      }
      .botao {
        width: 25.4rem;
        height: 5.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 8.1rem;
       
        border-radius: 8px;
        border: none;
        box-shadow: none;
        background: #fdd028;
        color: #333333;

        font-size: 26px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
