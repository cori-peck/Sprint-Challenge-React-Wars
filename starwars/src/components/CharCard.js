import React from 'react';

const CharCard = props => {
    return (
        <div>
            <div>
             <h1>{props.character.name}</h1>
             <ul>
                <li>Species: {props.character.species}</li>
                <li>Gender: {props.character.gender}</li>
                <li>Home World: {props.character.homeworld}</li>
                <li>Vehicles: {props.character.vehicles}</li>
             </ul>
             </div>
            <div>onClick={props.returnList}>Return to List</div>
        </div>
    );
}

export default CharCard