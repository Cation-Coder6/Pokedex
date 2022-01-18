import "./Cards.css";
const card = (props) => {
    return (
        <div className="Cards">
            <h1 id="h1">{props.name}</h1>
            <img src={props.image} id="img" />
            <p>Type = {props.type}</p>
            <p>EXP = {props.exp}</p>
        </div>
    );
}

export default card;
