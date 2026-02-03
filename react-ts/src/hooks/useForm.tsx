import { useState } from "react";

export default function useForm(valoresIniciais: any) {
  const [valores, setValores] = useState(valoresIniciais);

  function onChange(e: any) {
    const { name, value } = e.target;

    setValores({
      ...valores,
      [name]: value
    });
  }

  return { valores, onChange };
}
