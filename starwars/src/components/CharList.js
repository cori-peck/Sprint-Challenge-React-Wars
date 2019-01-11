import React from 'react';
import Character from './Character';

const CharList = props => {
    return (
        <div>
            {props.chars.map((char, index) => {
                return <Character char={char}
                                    key={index}
                                    showCurrentChar={props.showCurrentChar} />
            })}
        </div>
    )
}

export default CharList;