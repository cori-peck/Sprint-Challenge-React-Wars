import React from "react";

const Character = props => {
    return (
        <div onClick={() => props.showCurrentChar(props.char.name)}>
            {props.char.name}
        </div>
    );
}

export default Character;
