

function App() {//function component : 함수를 수행하는  component
  return (//이 return 안이 jsx, html와 비슷함
    <div className="App">
      <h1>Hello?</h1>
        : food conponent에 kimchi라는 value로 prop(property) name을 줌. /** name~~ : food component에 정보를 보내는 것*/
      <Food 
      name="hhh"  /**: food conponent에 hhh라는 value로 prop(property) name을 줌. */ /** name~~ : food component에 정보를 보내는 것*/
      fav="kimchi" 
      something={true}
      papapapa={["hello",1,2,32,4,true]}
      /> : food conponent에 fav라는 이름의 property를 kimchi라는 value로 줌, 한 component에 prop가 여러개 있을수도있고, 여러 타입 다 가능
      
      
      이런 props를 사용해 react는 정보를 사용 ex. 누가  food component로 정보를 보내려고하면, react는 name, fav ,... 등 모든 속성을 가져와서  food function compoenet의 argument(인자)로 가져온 props value를 넣어줌
      father compoenet에서 children component로 원하는 많은 props를 보낼수 있음 : 이해못함. father compoenet 와 children compoenet  가 정확히 뭐지?



      <Food name="ramen"/> : 동적 데이터 component, jsx + props로 모두 component를 사용할수있음
      <Food name="sangiopsal"/>
      <Food name="chukumi"/>

    </div>
  );
}

function Food({name}){//s로 전달받을 props object를 받아온뒤 함수내에서 s.fav 처럼 원하는 prop를 가져오거나, 애초에 {fav}로 props중  fav 만 전달받거나
  console.log(name);
  return(<h2>i like {name}</h2>); //html태그안에서 {자바스트림트 변수}를 통해 가져올 수 있음
} 
export default App;

//jsx에서 이해애햐할 것 2번째 :  component에 정보를 보낼수있음
//react : 는 재샤용 가능한 component를 만들수있음/ component를 계속해서 반복해서 사용가능