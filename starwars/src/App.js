import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';
import CharCard from './components/CharCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: null,
      nextPg: null,
      prevPg: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, nextPg: data.next, prevPg: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  dispLastPg = event => {
      if(this.state.prevPg !== null) {
        const newData = this.getCharacters(this.state.prevPg);
        console.log(newData);
      }
  }

  dispNextPg = event => {
    if(this.state.nextPg !== null) {
      const newData = this.getCharacters(this.state.nextPg);
      console.log(newData);
    }
  }

  showCurrentChar = name => {
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
    this.setState({currentChar:currentChar});
  }

  returnList = event => {
    this.setState({currentChar: null});
  }

  render() {
    if (this.state.currentChar === null) {
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
            <div>
              <CharList chars={this.state.starwarsChars} 
                showCurrentChar={this.showCurrentChar}
                dispNextPg={this.dispNextPg}
                dispLastPg={this.dispLastPg}
                nextPg={this.state.nextPage}
                prevPg={this.state.prevPg}
                 />
            </div>
        </div>
    );
  }
  else {
    return (
      <div>
        <CharCard returnList={this.returnList} character={this.state.currentChar} />
      </div>
    );
  };
};
}

export default App;