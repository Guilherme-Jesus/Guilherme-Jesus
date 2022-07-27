import "./Team.css";

import Colaborador from "../Collaborator";

const Team = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      {props.collaborators.map((collaborator) => (
        <Colaborador
          name={collaborator.newName}
          office={collaborator.newOffice}
          image={collaborator.newImage}
        />
      ))}
    </section>
  );
};

export default Team;
