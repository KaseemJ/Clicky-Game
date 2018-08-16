import React, { Component } from "react";
import cards from "../../cards.json";

import Card from "../Card";
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";

class Game extends Component {

    state = {
        chihuahuas: cards,
        matches: 0,
        guesses: 0,
        matchedChihuahua: 3
    }

    getChihuahua = (id) => {
        if (id === this.state.matchedChihuahua) {
            // if a chihuahua is a match 
            // update the matches state by one 
            // but not the guesses state 
            // if the are also a match pick a new random chihuahua
            let randomId = Math.floor(Math.random() * this.state.chihuahuas.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedChihuahua: randomId
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
                    {this.state.chihuahuas.map(sports => (
                        <Card
                            key={sports.id}
                            id={sports.id}
                            name={sports.name}
                            image={sports.image}
                            getChihuahua={this.getsports}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;
