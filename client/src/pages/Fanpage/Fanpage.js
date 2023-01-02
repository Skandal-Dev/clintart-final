import React, {useState, useEffect} from 'react';
import axios from "axios";
import Cards from './Cards';
import './main.css';


export default function Card(props){


const display = (props) => {
   const {data} = props;
   if (data.length > 0){
     return (
       data.map((card, i) => {
         console.log(card);
         return (
           <Cards
            name_card={card.nameCard} damage={card.damage} power={card.power} ability={card.ability}
            bonus={card.bonus} lvl={card.lvl} clan={card.clan} rarity={card.rarity}
            img={card.img} prismatic={card.prismatic} imageSize={card.imageSize} top={card.x} left={card.y}/>
         )
       })
     )
   }else{
     return (
       <h3> nothing </h3>
     )
   }
}

return (
  <div>
      <div className="header py-5 page-title text-4xl text-center">
        Urban Rivals<br/>
        Card Community Contest
      </div>
      <div className="App spe-box">

      {display(props)}
      </div>
  </div>
)

}
