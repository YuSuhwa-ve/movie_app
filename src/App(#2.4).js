import React from "react";
//#2.4 father component로부터 전달받은 props가 우리가 예상한 props인지 확인하는 법
import PropTypes from "prop-types"//props를 확인하기위해 필요한 모듈

function App() {
    return (
        <div >
          {foodILike.map(dish=>(
              <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} /> //이렇게 id를 key라는 prop로 명시해야 오류해결
              ))}
        </div>
      );
  
  }
  
  function Food({name, picture, rating}){
  
    return(<div><h2>i like {name}</h2>
    <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
        
        </div> ); 
}

Food.propTypes={ //무조건이름은 propType, 콘솔에 전달받은 prop를 알려줌
    name: PropTypes.string.isRequired, //name prop는 string 이어야하고 아니면 콘솔에 에러
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number //number prop는 number이어도 아니어도 필수는 아님 -> number or undefiend로 나타남

}
const foodILike=[
    {
        id :1,
        name : "Kimchi",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WqTMhwe6Kqz2Qp1aNiRRXQHaFj%26pid%3DApi&f=1",
        rating : 5
    },{
        id :2,
        name :"Samgyeopsal",
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zvTy7foIoBKk8jTpol9kOAHaE7%26pid%3DApi&f=1",
        rating : 4.9
    },{
        id : 3,
        name:"Bibimbap",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vy_JA-jJOnOmF5kj8AKP7wHaE8%26pid%3DApi&f=1",
        rating : 4.8
    },{
        id:4,
        name:"Doncasu",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xuZm25dsfU6VPENmZ8dUygHaFj%26pid%3DApi&f=1",
        rating : 5.5
    },{
        id:5,
        name:"phoi",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X0PUGzy0SQnFvIgfhl5sMgHaE3%26pid%3DApi&f=1",
        rating : 4.7
    }];




  export default App;
 