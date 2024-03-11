import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import RegistrationForm from './RegistrationForm';

function Card(props) {

  return (
    <div className="Card" id={props.cardId}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <Popup trigger={<button>Register</button>} position="right center">

        <RegistrationForm />
        
      </Popup>
    </div>
  );
}

export default Card;
