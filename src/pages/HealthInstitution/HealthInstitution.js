import React from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import axios from "axios";

const HealthInstitution = () => {
  const getInstitutions = async () => {
    try {
      const response = await axios.get(
        "https://agilesafeapi.azure-api.net/instituicao-saude",
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "466808cdbee24c0187ef54e38e1969d5",
          },
        }
      );
      alert(response);
    } catch (error) {
      alert("erro");
    }
  };
  return (
    <>
      <Header title={"Instituição de Saúde"} />
      <C.Container>
        <C.InputsContainer>
          <div
            style={{
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
              Nome
            </label>
            <input
              style={{
                width: "500px",
                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
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
              Latitude
            </label>
            <input
              style={{
                width: "500px",
                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
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
                width: "500px",
                height: "30px",
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
            <Button
              onClick={getInstitutions}
              Text={"Salvar"}
              backgroundColor={"#046ee5"}
            />
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
