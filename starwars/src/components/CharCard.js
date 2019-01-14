import React from 'react';

const CharCard = props => {
    return (
        <div className="App">
            <div className="card">
             <h1 className="Header">{props.character.name}</h1>
             <ul className="List">
                <li>Gender: {props.character.gender}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Eye Color: {props.character.eye_color}</li>
                <li>Skin Color: {props.character.skin_color}</li>
             </ul>
             </div>
            <button className="rtnBtn" onClick={props.returnList}>Return to List</button>
        </div>
    );
}

export default CharCard