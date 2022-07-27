import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Form";
import Team from "./components/Team";

const App = () => {
  const teams = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Back-End",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "UX/UI",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "QA",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
  ];

  const [collaborator, setCollaborator] = useState([]);

  const handleAddedCollaborator = (contributor) => {
    console.log(contributor);
    setCollaborator([...collaborator, contributor]);
  };
  return (
    <div>
      <Banner />
      <Formulario
        teamsNames={teams.map((team) => team.name)}
        registeredCollaborator={(collaborator) =>
          handleAddedCollaborator(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
    </div>
  );
};

export default App;
