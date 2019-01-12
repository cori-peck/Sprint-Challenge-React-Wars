import React from 'react';
import Character from './Character';

const CharList = props => {
    return (
        <div className="App">
            <div className="List">
            {props.chars.map((char, index) => {
                return <Character char={char}
                                    key={index}
                                    showCurrentChar={props.showCurrentChar} />
            })}
            </div>
            <div>
                <button className="rtnBtn" onClick={props.dispLastPg}>Previous Card</button>
                <button className="rtnBtn" onClick={props.dispNextPg}>Next Card</button>
            </div>
        </div>
    );
}

export default CharList;