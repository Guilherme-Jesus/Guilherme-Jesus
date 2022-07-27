import { useState } from "react";
import Botao from "../Button";
import ListaSuspensa from "../DropDownList";
import TextInput from "../InputText";
import "./Formulario.css";

const Formulario = (props) => {
  const [newName, setNewName] = useState("");
  const [newOffice, setNewOffice] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newTeam, setNewTeam] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    props.registeredCollaborator({
      newName,
      newOffice,
      newImage,
      newTeam,
    });
    console.log("Salvando...");
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={newName}
          toChanged={(value) => setNewName(value)}
        />
        <TextInput
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={newOffice}
          toChanged={(value) => setNewOffice(value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={newImage}
          toChanged={(value) => setNewImage(value)}
        />
        <ListaSuspensa
          required={true}
          label="Time"
          itens={props.teamsNames}
          value={newTeam}
          toChanged={(value) => setNewTeam(value)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
