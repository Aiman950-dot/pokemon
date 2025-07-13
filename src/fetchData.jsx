import { useState,useEffect } from "react";
import App from "./App";

export default function DataFetch() {
  const [pokList, setPokList] = useState(null);

  const dataFetch = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon?limit=20";
    try {
      const res = await fetch(api);
      const data = await res.json();

      //fetching every single data
      const pokData = await Promise.all(
        data.results.map(async (curr) => {
          const response = await fetch(curr.url);
          const pokUrlData = await response.json();

          console.log(pokUrlData);
          return pokUrlData;
        })
      );
      setPokList(pokData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <App pokList={pokList} />
    </>
  );
}
