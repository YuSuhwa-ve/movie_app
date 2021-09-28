import React from "react";

function App() {
    return (
        <div >
          {foodILike.map(dish=>(
              <Food name={dish.name} picture={dish.image} key={dish.id} /> //이렇게 id를 key라는 prop로 명시해야 오류해결
              ))}
        </div>
      );
      /*
    return (
      <div >
          {console.log(foodILike.map(renderFood))} 
          {foodILike.map(renderFood)}
      </div>
    );
    */
  }
  
  function Food({name, picture}){
  
    return(<div><h2>i like {name}</h2>
        <img src={picture} alt={name}/></div> ); //img태그안에  alt 꼭 쓸필요는 없지만 안쓰면 경고메시지떠서 걍 씀
}
/* //있어봤자, 결국 바로 map에 Food 한것과 다를바가 없음
function renderFood(dish){
    return <Food name={dish.name} picture={dish.image}/>

}
*/
//error : Warning: Each child in a list should have a unique "key" prop.
//->이유 : 모든 react의 element들은 유일해야하는데, 이 element를 list 안으로 넣으면 유일성을 잃어버림 ????왜????
//->해결 : 각 element 마다 id추가후, 컴포넌트에 id를 key라는 prop로 명시해야 오류해결
const foodILike=[
    {
        id :1,
        name : "Kimchi",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WqTMhwe6Kqz2Qp1aNiRRXQHaFj%26pid%3DApi&f=1"
    },{
        id :2,
        name :"Samgyeopsal",
        image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zvTy7foIoBKk8jTpol9kOAHaE7%26pid%3DApi&f=1"
    },{
        id : 3,
        name:"Bibimbap",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vy_JA-jJOnOmF5kj8AKP7wHaE8%26pid%3DApi&f=1"
    },{
        id:4,
        name:"Doncasu",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xuZm25dsfU6VPENmZ8dUygHaFj%26pid%3DApi&f=1"
    },{
        id:5,
        name:"phoi",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X0PUGzy0SQnFvIgfhl5sMgHaE3%26pid%3DApi&f=1"
    }];




  export default App;
 