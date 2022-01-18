import Card from "./Cards.js";
import Pokemon from "./Pokemons.js";

const Pokedex = (props) => {
    return (
        <div>
            {props.pokemon.map(poki => <Card name={poki.name}
                image={poki.image}
                type={poki.type}
                exp={poki.base_experience} />
            )}

        </div>
    );
}

export default Pokedex;