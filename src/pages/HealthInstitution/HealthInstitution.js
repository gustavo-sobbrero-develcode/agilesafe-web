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
        backgroundColor: "#171923",
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
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
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
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
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
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <label
              style={{
                color: "#FFFFFF",
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
            style={{ display: "flex", alignItems: "center", marginBottom: 30 }}
          >
            <label style={{ color: "#FFFFFF" }}>Tipo</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "18%",
              }}
            >
              <input
                type="radio"
                name="tipo"
                style={{ marginRight: 20 }}
                defaultChecked={tipo === "Publico"}
              />
              <label
                style={{
                  color: "#FFFFFF",
                }}
              >
                Público
              </label>
              <input
                type="radio"
                name="tipo"
                defaultChecked={tipo === "Privado"}
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
