import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'
import './App.css';

class App extends Component {
  state = {
    inputValue: null,
    inputLength: null,
    letters: null
  }

  inputChangeHandler = (event) => {
    this.setState(
      {
        inputValue: event.target.value,
        inputLength: event.target.value.length,
      }
    )

    const stringLetters = event.target.value.slice();

    const letters = stringLetters.split("");

    this.setState(
      {
        letters: letters,
        inputValue: stringLetters
      }
    )
  }

  deleteTextHandler = (index) => {
    let letters = [...this.state.letters];
    letters.splice(index, 1);
    this.setState(
      {
        letters: letters,
        inputValue: letters.join()
      }
    )
  }


  render() {
    let letterComponents = null;

    if (this.state.letters) {
      letterComponents = (
        <div>
          {
            this.state.letters.map((letter, index) => {
              return <CharComponent
              letter={letter}
              key={index}
              id={index}
              click={() => this.deleteTextHandler(index)}/>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <input onChange={(event) => this.inputChangeHandler(event)} value={this.state.inputValue}/>
        <p className="OutPut">{this.state.inputValue}</p>
        <ValidationComponent length={this.state.inputLength}/>
        {letterComponents}


        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

      </div>
    );
  }
}

export default App;
