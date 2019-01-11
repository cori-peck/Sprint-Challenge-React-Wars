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
            <div>
                <div onClick={props.dispLastPg}>Previous Card</div>
                <div onClick={props.dispNextPg}>Next Card</div>
            </div>
        </div>
    );
}

export default CharList;