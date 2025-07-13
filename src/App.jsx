import { useState } from "react";
import "./App.css";
import Card from "./cards";

//import Fetch from "./apiData";

function App({pokList}) {
  const [filteredList, setfilteredList] = useState("");

  const filteredPokemon = pokList?.filter((newPOK) =>
    newPOK.name.toLowerCase().includes(filteredList.toLowerCase())
  );

  if (pokList === null) {
    return <h1>loading....</h1>;
  }
  

  if (pokList) {
    return (
      <>
        <header>
          <h1>Catch pokemon</h1>
        </header>
        <div className="inp_div">
          <input
            type="search"
            placeholder="search pokemon"
            value={filteredList}
            onChange={(e) => setfilteredList(e.target.value)}
          />
          <button
            style={{ padding: "14px", borderRadius: "none", marginTop: "3px" }}
          >
            Search
          </button>
        </div>
        <div className="main">
          <ul>
            {filteredPokemon.map((curr) => {
              return <Card key={curr.id} curr={curr} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default App;
