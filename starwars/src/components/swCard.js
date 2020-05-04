import React from "react";
import styled from "styled-components";

//import App from "./App";

const CardLi = styled.ul`
 background-color: transparent;
 color: white;
 border: dotted 10px tan;
 padding: 2%;
 text-align: center;

 &:hover {
    background-color: black;
  }
`;


const SwCard = props => {
    return (
        
        <ul className="swCard">
        <CardLi>
        <h2>{props.name}</h2>
        <p>Height:{props.height}</p>
        <p>Hair color:{props.hair_color}</p>
        <p>Gender:{props.gender}</p>
        <p>Mass:{props.mass}</p>
        </CardLi>
        </ul>
    );
};

export default SwCard;
