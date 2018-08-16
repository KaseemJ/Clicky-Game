import React, { Component } from "react";
import cards from "../../cards.json";

import Card from "../Card";
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";

class Game extends Component {

    state = {
        teams: cards,
        matches: 0,
        guesses: 0,
        matchedteams: 3
    }

    getSports = (id) => {
        if (id === this.state.matchedteams) {
            // if a team is a match 
            // update the matches state by one 
            // but not the guesses state 
            // if the are also a match pick a new random team
            let randomId = Math.floor(Math.random() * this.state.teams.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedteams: randomId
            });
        } else {
            // if they are not a match update the 
            // guesses state by one 
            this.setState({
                guesses: this.state.guesses + 1
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Scoreboard
                    matches={this.state.matches}
                    guesses={this.state.guesses}
                />
                <div className="row">
                    {this.state.teams.map(sports => (
                        <Card
                            key={sports.id}
                            id={sports.id}
                            name={sports.name}
                            image={sports.image}
                            getSports={this.getsports}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;
