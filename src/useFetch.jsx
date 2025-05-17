import { useState, useEffect } from "react";

export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [nofunciono, setNofunciono] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const json = await respuesta.json();
        setDatos(json.Err.Media);
      } catch (err) {
        setNofunciono(err);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [url]);

  return { datos, cargando, nofunciono };
}
