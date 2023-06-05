import React, { useEffect, useState } from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";
import Input from "../../components/Input/Input";

const Maintenance = () => {
  const [loading, setLoading] = useState(true);
  const [listSpecialties, setListSpecialties] = useState([]);
  const buttons = ["Editar", "Excluir", "Ajuda"];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getSpecialties = async () => {
    try {
      const response = await axios.get(
        "https://agilesafeapi.azure-api.net/especialidade",
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "466808cdbee24c0187ef54e38e1969d5",
          },
        }
      );
      setListSpecialties(response.data);
    } catch (error) {
      alert("Erro ao carregar os dados da instituição de saúde");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpecialties();
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
      <Header title={"Especialidades"} />
      <C.Container>
        <C.TopContent>
          <C.ServiceTypeContainer>
            <C.InputsContainer>
              <Input placeholder={"Tipo atendimento"} />
              <Input placeholder={"Quantidade vagas"} />
            </C.InputsContainer>
            <textarea
              placeholder="Observações..."
              style={{
                width: "450px",
                height: "80%",
                border: "1px solid lightgray",
              }}
            ></textarea>
          </C.ServiceTypeContainer>
          <C.ButtonsContainer>
            <Button Text={"Adicionar"} backgroundColor={"#008080"} />
            <Button Text={"Cancelar"} backgroundColor={"#008080"} />
          </C.ButtonsContainer>
          <hr color="#F2F5F6" />
        </C.TopContent>
        <hr style={{ width: "75%" }}></hr>
        <C.BottomContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <div>
              {buttons.map((item) => (
                <button
                  key={item}
                  style={{
                    height: 30,
                    width: 70,
                  }}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder="  🔍"
              style={{
                marginTop: 20,
                height: 40,
                width: 250,
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "lightgray",
              alignItems: "center",
              height: 65,
              marginTop: 15,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input type="checkbox" />
            <strong style={{ width: 350 }}>Vagas</strong>
            <strong style={{ width: 350 }}>Tipo Atendimento</strong>
          </div>
          {listSpecialties.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "lightgray",
                alignItems: "center",
                height: 50,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <input type="checkbox" />
              <label style={{ width: 350 }}>{item.quantidadeVagas}</label>
              <label style={{ width: 350 }}>{item.nome}</label>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 12,
              marginBottom: 20,
            }}
          >
            <button style={{ width: 30, height: 30 }}>{"<"}</button>
            {pages.map((item) => (
              <button key={item} style={{ width: 30, height: 30 }}>
                {item}
              </button>
            ))}
            <button style={{ width: 30, height: 30 }}>{">"}</button>
          </div>
        </C.BottomContent>
      </C.Container>
    </>
  );
};

export default Maintenance;
