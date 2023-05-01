import React from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const HealthInstitution = () => {
  return (
    <>
      <Header title={"Instituição de Saúde"} />
      <C.Container>
        <C.InputsContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 500,
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
                width: 110,
              }}
            >
              Nome
            </label>
            <input
              style={{
                width: "100%",
                marginLeft: 80,

                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 500,
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
                width: 110,
              }}
            >
              Latitude
            </label>
            <input
              style={{
                width: "100%",
                height: "30px",
                marginLeft: 80,
              }}
            ></input>
          </div>
          <div
            style={{
              width: 500,
              display: "flex",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
                width: 110,
              }}
            >
              Longitude
            </label>
            <input
              style={{
                width: "100%",
                height: "30px",
                marginLeft: 80,
              }}
            ></input>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 30 }}
          >
            <label style={{ marginRight: 124, color: "#FFFFFF" }}>Tipo</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input type="checkbox" style={{ marginRight: 20 }} />
              <label
                style={{
                  color: "#FFFFFF",
                }}
              >
                Público
              </label>
              <input
                type="checkbox"
                style={{ marginRight: 20, marginLeft: 30 }}
              />
              <label
                style={{
                  color: "#FFFFFF",
                }}
              >
                Privado
              </label>
            </div>
          </div>
        </C.InputsContainer>
        <C.ButtonsContainer>
          <div style={{ paddingRight: 20 }}>
            <Button Text={"Salvar"} backgroundColor={"#046ee5"} />
          </div>
          <div style={{ paddingRight: 1 }}>
            <Button Text={"Cancelar"} backgroundColor={"#046ee5"} />
          </div>
        </C.ButtonsContainer>
        <hr color="#171923" />
      </C.Container>
    </>
  );
};

export default HealthInstitution;
