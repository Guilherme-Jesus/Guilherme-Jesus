import React from "react";

function Lista() {

  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
     {
        tarefa: "Typescript",
        tempo: "03:00:00",
     }
]
  return (
    <aside>
      <h2> Estudos do dia</h2>
      <div>
          {tarefas.map((item, index)=>(
              <div key={index}>
                  <h3>{item.tarefa}</h3>
                  <p>{item.tempo}</p>
              </div>
          ))}
      </div>
    </aside>
  );
}
export default Lista;
