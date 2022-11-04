import "./card.style.css";

const Card = (props) => {
    return (
        <div class={`card ${props.party}`} >
            <img class="robo-img" src={props.img} alt={props.name} />
            <p>{props.name} ({props.party})</p>
            <p>{props.district}</p>
            <a href={props.website}>Website</a>
        </div>
    )
}

export default Card;