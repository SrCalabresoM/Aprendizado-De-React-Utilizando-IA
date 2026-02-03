import { useState } from "react";

export default function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function onChange(e) {
    const { name, value } = e.target;

    setValores({
      ...valores,
      [name]: value
    });
  }

  return { valores, onChange };
}
