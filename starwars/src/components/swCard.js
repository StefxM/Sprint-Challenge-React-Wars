import React from "react";
import styled from "styled-components";

const CardLi = styled.ul`
 background-color: transparent;
 color: white;
 border: dotted 10px brown;
 padding: 2%;
 text-align: center;

 &:hover {
    background-color: black;
  }
`;


const SwCard = props => {
    return (
        
        <ul className="swCard" key={props.results}>
        <CardLi>
        <h2>{props.name}</h2>
        <p>Birth year:{props.banana}</p>
        <p>Hair color:{props.hair_color}</p>
        <p>Gender:{props.gender}</p>
        </CardLi>
        </ul>
    );
};

export default SwCard;
