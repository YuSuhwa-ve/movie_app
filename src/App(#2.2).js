import React from "react";

function App() {
    return (
      <div >
        {foodILike.map(dish=>(
            <Food name={dish.name} picture={dish.image} />
            ))}
      </div>
    );
  }
  
  function Food({name, picture}){
  
    return(<div><h2>i like {name}</h2>
        <p>{picture}</p>
        <img src={picture}></img></div> ); 
}

const foodILike=[
    {
        name : "Kimchi",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchefjulieyoon.com%2Fwp-content%2Fuploads%2F2011%2F12%2FKimbop-4-1.jpg%3Fx80339&f=1&nofb=1"
    },{
        name :"Samgyeopsal",
        image :"2"
    },{
        name:"Bibimbap",
        image:"3"
    },{
        name:"Doncasu",
        image:"4"
    },{
        name:"phoi",
        image:"5"
    }];




  export default App;
 