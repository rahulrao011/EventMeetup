import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Card(props) {
  return (
    <div className="Card" id={props.cardId}>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
        
        <Popup trigger={<button>Register</button>} position="right center">
          <div className="Registration">
            <form>

              <label>Name:</label><br></br>
              <input type="text" placeholder="Bucky Badger"></input><br></br>

              <label>Wisc Email:</label><br></br>
              <input type="text" placeholder="badger@wisc.edu"></input><br></br><br></br>

              <input type="submit" value="Submit" id="registrationSubmit"></input>

            </form>
          </div>
        </Popup>

    </div>
  );
}

export default Card;