import React, { Component } from "react";

import "./App.css";

import AnimalCard from "./Animal-Card";
import { animals } from "./animals-array";

class App extends Component {
  state = {
    animals: animals,
    search: " ",
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updatedArray });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedAnimalsArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animals;
        }
      });
      return {
        animals: updatedAnimalsArray,
      };
    });
    console.log(this.state);
  };

  searchHandler = (e) => {
    // this.state.search=e.target.value; { it is a mutation at state}
    // console.log(e.state.search);
    this.setState({ search: e.target.value });
    //console.log(e.state.search);
  };

  animalFilter = this.state.animals.filter((animal) => {
    return animal.name.toLowerCase().includes(this.state.search.toLowerCase());
  });
  render() {
    return (
      <main>
        <h1> {this.state.animals.length} Animals </h1>
        <input type="text" onChange={this.searchHandler} />
        <h3>{this.state.search}</h3>
        <div className="animalsList">
          {this.state.animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              like={animal.likes}
              //search={this.state.search}
              remove={this.removeHandler.bind(this, animal.name)}
              // remove={() => this.removeHandler(animal.name)}
              add={() => this.addLikeHandler(animal.name)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
