import React, { Component } from "react";
import ArtWorkCard from "./components/ArtWorkCard";
import Wrapper from "./components/Wrapper";
import InstructionContainer from "./components/InstructionsContent"
import "./App.css";
import artWorks from "./artWorks.json";

let correctGuesses =0;
let bestScore =0;
let gameScore =0;
let clickedMessage = "";
class App extends Component {

  state = {
    artWorks,
    checked: false,
    correctGuesses,
    bestScore,
    gameScore,
    clickedMessage
  };
 
clicked = id => {
  const artWorks = this.state.artWorks;

  const clickedMatch = artWorks.filter(artWork => artWork.id === id)
 
if (clickedMatch[0].clicked){
  
  clickedMessage = "You already guessed this artwork! - Try Again!";
  correctGuesses = 0;

  for (let i = 0 ; i < artWorks.length ; i++){
    artWorks[i].clicked = false;
  }
    this.setState({clickedMessage});
    this.setState ({correctGuesses})
    this.setState ({artWorks})
}
else if (correctGuesses<11) {
  clickedMatch[0].clicked = true;
  correctGuesses ++;
clickedMessage = "Well done, you haven't clicked on this artwork yet! Keep Going!"
if (correctGuesses > bestScore){
bestScore = correctGuesses;
this.setState({bestScore});
}
  artWorks.sort(function(a, b){return 0.5 - Math.random()});

  this.setState ({ artWorks });
  this.setState ({ correctGuesses });
  this.setState ({ bestScore });

}
else {
clickedMatch[0].clicked = true;
correctGuesses = 0;
clickedMessage = "Congratulations you guessed all 12 art works! Can you do it again?";
bestScore = 12;
this.setState({ bestScore });
for (let i = 0 ; i < artWorks.length ; i++){
  artWorks[i].clicked = false;
};
this.setState({ correctGuesses });
this.setState ({ clickedMessage })

}
       this.setState({ artWorks });
};

shakeArtWork = id => {


}
 
  render() {
    return (
    <div>
        <InstructionContainer />
   <div className = "scoreSummary">
Score: {correctGuesses} || Best Score: {bestScore}
   </div>
   <div className = "guessMessage">
{clickedMessage}
   </div>
       <Wrapper>
          {this.state.artWorks.map(artWork => (
          <ArtWorkCard
       clicked={this.clicked}
            id={artWork.id}
            key={artWork.id}
            name={artWork.name}
            image={artWork.image}
          // clicked={this.removeArtWork}
          />
        ))}
     </Wrapper>
    </div>
     );
  }
}

export default App;

