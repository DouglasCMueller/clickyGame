import React from "react";
import "./style.css";

function ArtWorkCard(props) {
    return (

        <
        div className = "card" >
        <
        div onClick = {
            () => props.clicked(props.id) }
        className = "cardTotal" >
        <
        img className = "card-img"
        alt = { props.name }
        src = { props.image }
        /> <
        /div> <
        /div>

    );

}
export default ArtWorkCard;