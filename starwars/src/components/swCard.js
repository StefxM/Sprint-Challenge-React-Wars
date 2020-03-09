import React from "react";

const SwCard = props => {
    return (
        <li className="sw-card" key={props.results}>
        <h2>{props.name}</h2>
        <p>Birth year:{props.birth_year}</p>
        <p>{props.url}</p>
        <p>{props.homeworld}</p>
        </li>
    );
};

export default SwCard;
