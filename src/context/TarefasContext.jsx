import { createContext, useState } from "react";

export const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  return (
    <TarefasContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </TarefasContext.Provider>
  );
}
