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
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [obs, setObs] = useState("");
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

  const getSpecialtiesByName = async () => {
    if (search) {
      try {
        const response = await axios.get(
          `https://agilesafeapi.azure-api.net/especialidade/nome/?filtro=${search}`,
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
    } else {
      getSpecialties();
    }
  };

  const createSpecialtie = async () => {
    try {
      const response = await axios.post(
        "https://agilesafeapi.azure-api.net/especialidade/",
        {
          nome: name,
          quantidadeVagas: quantity,
          ativo: true,
          observacao: obs,
        },
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "466808cdbee24c0187ef54e38e1969d5",
          },
        }
      );
      if (response) {
        getSpecialties();
        setName("");
        setQuantity(0);
        setObs("");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpecialties();
  }, []);

  useEffect(() => {
    getSpecialtiesByName();
  }, [search]);

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
              <Input
                label="Tipo atendimento"
                onChange={(text) => setName(text.target.value)}
                value={name}
              />
              <Input
                label="Quantidade vagas"
                onChange={(text) => setQuantity(text.target.value)}
                value={quantity}
              />
            </C.InputsContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "80%",
                width: "450px",
              }}
            >
              <label style={{ color: "#676767", fontSize: "13px" }}>
                Observações
              </label>
              <textarea
                onChange={(text) => setObs(text.target.value)}
                value={obs}
                style={{
                  height: "70%",
                  border: "1px solid lightgray",
                  borderRadius: "7px",
                }}
              ></textarea>
            </div>
          </C.ServiceTypeContainer>
          <C.ButtonsContainer>
            <Button
              Text={"Adicionar"}
              backgroundColor={"#008080"}
              onClick={createSpecialtie}
            />
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
              onChange={(text) => setSearch(text.target.value)}
              type="text"
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
