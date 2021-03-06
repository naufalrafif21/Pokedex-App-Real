import { useNavigate } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

function Pokemons() {
const navigate = useNavigate()

const { pokemonCarts, deletePokemonFromCart } = usePokemon();
  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonCarts || []).map((item, index) => {
          return (
            <span
              style={{
                margin: 14,
                marginBottom: 30,
                background: "gray",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <img
                onClick={() => navigate(`/pokemons/${item.id}?name=${item.name}`)}
                src={item?.img}
                alt="span"
                style={{ height: 200 }}
              />
              <p key={item.id} style={{ color: "white" }}>
                {item?.name}
              </p>
              <button onClick={(e) => {
                  e.preventDefault()
                  deletePokemonFromCart(index)
                }}>Release</button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemons;
