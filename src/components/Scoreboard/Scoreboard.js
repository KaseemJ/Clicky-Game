import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1>Welcome to the sports game!</h1>
        <p>Chihuahua Matches: {props.matches}</p>
        <p>Chihuahua Guesses: {props.guesses}</p>
        <p>In this game you pick a team, hopefully they pick you too!</p>
    </div>
);

export default Scoreboard;