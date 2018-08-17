import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1><strong>Welcome to the sports game!</strong></h1>
        <p><strong>Team Matches: {props.matches}</strong></p>
        <p><strong>Team Guesses: {props.guesses}</strong></p>
        <p>In this game you pick a team, hopefully they pick you too!</p>
    </div>
);

export default Scoreboard;