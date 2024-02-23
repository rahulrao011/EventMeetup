import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="Card" id={props.cardId}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link to={"/register/" + props.cardId}>
            <button>register!</button>
        </Link>
    </div>
  );
}

export default Card;