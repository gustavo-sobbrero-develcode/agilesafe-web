import React, { useEffect, useState } from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";

const HealthInstitution = () => {
  const [nome, setNome] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [tipo, setTipo] = useState("");
  const [loading, setLoading] = useState(true);

  const getInstitutions = async () => {
    try {
      const response = await axios.get(
        "https://agilesafeapi.azure-api.net/instituicao-saude/4",
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "466808cdbee24c0187ef54e38e1969d5",
          },
        }
      );
      const { data } = response;
      setNome(data.nome);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setTipo(data.tipo);
    } catch (error) {
      alert("Erro ao carregar os dados da instituição de saúde");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstitutions();
  }, []);

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#F2F5F6",
      }}
    >
      <Loader />
    </div>
  ) : (
    <>
      <Header title={"Instituição de Saúde"} />
      <C.Container>
        <C.InputsContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "black",
                width: 200,
              }}
            >
              Nome
            </label>
            <input
              defaultValue={nome}
              style={{
                width: "500px",
                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "black",
                width: 200,
              }}
            >
              Latitude
            </label>
            <input
              defaultValue={latitude}
              style={{
                width: "500px",
                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "black",
                width: 200,
              }}
            >
              Longitude
            </label>
            <input
              defaultValue={longitude}
              style={{
                width: "500px",
                height: "30px",
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 30,
            }}
          >
            <label style={{ color: "black", marginBottom: 6 }}>Tipo</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <input
                type="radio"
                name="tipo"
                style={{ marginRight: 5 }}
                defaultChecked={tipo === "Publico"}
              />
              <label
                style={{
                  color: "black",
                }}
              >
                Público
              </label>
              <input
                type="radio"
                name="tipo"
                defaultChecked={tipo === "Privado"}
                style={{ marginRight: 5, marginLeft: 30 }}
              />
              <label
                style={{
                  color: "black",
                }}
              >
                Privado
              </label>
            </div>
          </div>
        <C.ButtonsContainer>
          <div style={{ paddingRight: 20 }}>
            <Button Text={"Salvar"} backgroundColor={"#008080"} />
          </div>
          <div style={{ paddingRight: 1 }}>
            <Button Text={"Cancelar"} backgroundColor={"#008080"} />
          </div>
        </C.ButtonsContainer>
        </C.InputsContainer>
        <hr color="#F2F5F6" />
      </C.Container>
    </>
  );
};

export default HealthInstitution;
