import React from "react";


//State : dynamic data와 함께 작업할때 만들어짐
//동적인데이터(dynamic data) :  변하는 데이터, 존재하지 않는 데이터, 생겨나고 사라지거나 변경된 데이터, 두개가되고 0이되는 종류의 데이터

                                //function compoenet : function이고, 무언가를 return하고 screen에 표시됨
class App extends React.Component{//class component : class이고 React.Component로 부터 확장되고 screen에 표시됨
    
    state={//state는 object, component의 data를 넣을 공간, 🤞이 data는 변함. dynamic🤞. Do not mutate state directly : state를 직접 변경하려하지마라 use setState()
        count: 0

    };

    add=()=>{
        console.log("add");
       // this.state.count=1; 이렇게 state를 직접 변경하면, react는 render function을 refresh하지 않기 때문에 screen에서는 state data가 변경이 안됨
       //-> 즉 이말은, 제대로 동작하려면 매번 state의 상태를 변경하면, react가 render function을 호출해서 바꿔줘야함->그래서 setState function 을 사용해야함.
       //🤞setState 함수를 사용하면, react는 언제 setState 함수가 호출될지알고 또 view를 refresh하길 원하는 걸 알아서 render function을 refresh해줌
       //this.setState({count: this.state.count + 1}); //state는 object이기에, setState는 새로운 state를 받아야함
       this.setState(current=>({count: current.count +1})); //현재 current를 가져오는 방식이 훨신 성능적으로 뛰어남🤞
    };
    minus=()=>{
        console.log("minus");
        //this.setState({count:this.state.count-1}); //이런식으로 state를 사용하는건 성능적으로 좋지 않음
        this.setState(current=>({count: current.count -1}));
    };

    render(){//render method안에 넣어야지만 class component가 screen에 보이고 싶은것(state)을 보일수있다. react는 🤞자동적🤞으로 모든 class component의 render method를 실행하고자 함
        return <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button> //this.add로 하면 click했을때만  function이 호출되길원하는것/ this.add() : 바로 즉시 함수 실행
            <button onClick={this.minus}>Minus</button>
            </div>;
    }
   
}
  

 export default App;
 