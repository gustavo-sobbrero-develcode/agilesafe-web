import React from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const Maintenance = () => {
  const options = [
    { value: "audi", text: "Audi" },
    { value: "peugeot", text: "Peugeot" },
    { value: "bmw", text: "Bmw" },
  ];
  const buttons = ["Editar", "Excluir", "Ajuda"];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Header title={"Especialidades"} />
      <C.Container>
        <C.TopContent>
          <C.ServiceTypeContainer>
            <C.InputsContainer>
              <select
                placeholder="Tipo Atendimento"
                style={{
                  width: "350px",
                  height: "30px",
                  marginBottom: "15px",
                }}
              >
                <option value="" disabled selected>
                  Tipo Atendimento
                </option>
                {options.map((item) => (
                  <option value={item.value}>{item.text}</option>
                ))}
              </select>
              <input
                placeholder="Quantidade Vagas"
                style={{
                  width: "350px",
                  height: "30px",
                }}
              ></input>
            </C.InputsContainer>
            <textarea
              placeholder="Observações..."
              style={{
                width: "450px",
                height: "80%",
              }}
            ></textarea>
          </C.ServiceTypeContainer>
          <C.ButtonsContainer>
            <Button Text={"Adicionar"} backgroundColor={"#046ee5"} />
            <Button Text={"Cancelar"} backgroundColor={"#046ee5"} />
          </C.ButtonsContainer>
          <hr color="#171923" />
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
              backgroundColor: "gray",
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
          <div
            style={{
              backgroundColor: "lightgray",
              alignItems: "center",
              height: 50,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input type="checkbox" style={{}} />
            <label style={{ width: 350 }}>60</label>
            <label style={{ width: 350 }}>Pronto Socorro - Ambulatorial</label>
          </div>
          <div
            style={{
              backgroundColor: "lightgray",
              alignItems: "center",
              height: 50,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input type="checkbox" style={{}} />
            <label style={{ width: 350 }}>60</label>
            <label style={{ width: 350 }}>
              Consultas Médicas - Ambulatorial
            </label>
          </div>
          <div
            style={{
              height: 50,
              backgroundColor: "lightgray",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input type="checkbox" style={{}} />
            <label style={{ width: 350 }}>50</label>
            <label style={{ width: 350 }}>
              Centro Cirúrgico Cirurgias Gerais
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <button style={{ width: 30, height: 30 }}>{"<"}</button>
            {pages.map((item) => (
              <button style={{ width: 30, height: 30 }}>{item}</button>
            ))}
            <button style={{ width: 30, height: 30 }}>{">"}</button>
          </div>
        </C.BottomContent>
      </C.Container>
    </>
  );
};

export default Maintenance;
