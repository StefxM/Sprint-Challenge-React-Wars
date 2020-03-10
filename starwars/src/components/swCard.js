import React from "react";
import styled from "styled-components";


//styling

const CardLi = styled.ul`
 background-color: transparent;
 color: white;
 border: dotted 5px brown;

 &:hover {
    background-color: black;
  }
`;


const SwCard = props => {
    return (
        
        <ul className="swCard" key={props.results}>
        <CardLi>
        <h2>{props.name}</h2>
        <p>Birth year:{props.birth_year}</p>
        <p>Hair color:{props.hair_color}</p>
        <p>Gender:{props.gender}</p>
        </CardLi>
        </ul>
    );
};

export default SwCard;
