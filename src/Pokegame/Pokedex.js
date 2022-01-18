import Card from "./Cards.js";
import "./Pokedex.css"
const Pokedex = (props) => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    return (
        <div className="Pokedex">

            <h1 id="declare" id={props.result}>{props.result} HAND!</h1>
            <p>Total Experience = {props.exp}</p>
            {props.pokemon.map(poki =>
                <Card name={poki.name}
                    image={url + poki.id + ".png"}
                    type={poki.type}
                    exp={poki.base_experience} />
            )}

        </div>
    );
}

export default Pokedex;