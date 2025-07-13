export default function Card({ curr }) {
  return (
    <>
      <li>
        <figure>
          <img
            src={curr.sprites.other.dream_world.front_default}
            alt="curr.name"
          />
        </figure>
        <h1> {curr.name}</h1>
        <div>
          <button>{curr.types.map((typ) => typ.type.name).join(" , ")}</button>
        </div>

        <div className="data">
          <p>
            <span>Height:</span> {curr.height}
          </p>
          <p>
            <span>Weight: </span>
            {curr.weight}
          </p>
          <p>
            <span>Speed:</span> {curr.weight}
          </p>
          <p>
            <span>Abilities:</span> {curr.abilities[0].ability.name}
          </p>
          <p>
            <span>Stats:</span>{" "}
            {curr.stats.map((s) => ` ${s.base_stat}`).slice(0, 1)}
          </p>
          <p>
            <span>Moves:</span>{" "}
            {curr.moves
              .slice(1, 2)
              .map((m) => m.move.name)
              .join(", ")}
          </p>
        </div>
      </li>
    </>
  );
}
