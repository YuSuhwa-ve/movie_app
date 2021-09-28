import React from "react";



class App extends React.Component{ //react class component는 life cycle method를 가짐
    //life cycle method : react가 component를 생성하고 없애는 방법
    //Mounting : component 생성 : constructor(){} 시작전에 먼저 호출됨을 알수있음. render보다 먼저 실행됨, component가 mount 될때, 생성될때(component가 screen에 표시될때, compnent가 Website에 갈때) constructor를 호출함
    //                            static getDerivedStateFromProps()는 자주쓰이지않고 범위를 넘어가 다루지 않는다고함 ,
    //                            render(), 그다음 render, component가 mount되고 render될때 실행,
    //                            componentDidMount() : component의 render이 끝나고 실행됨

    // Updating : state가 변경될때(업데이트될때) setState 호출시마다 호출됨 : static getDerivedStateFromProps() , 범위 넘어가서 다루지 않음
    //                               shouldComponentUpdate() 업데이트를 할지말지 결정하는것, 범위넘어가서 다루지않음
    //                               render() 그다음 render, state의 update로 component가 새로 update되고 render될때 실행
    //                               getSnapshotBeforeUpdate() 자주쓰이지않고 범위를 넘어가 다루지 않는다고함
    //                               componentDidUpdate() : component의 update으로 인한 render이 끝나고 실행됨

    // Unmoounting : component가 죽음(ex, 페이지를 바꾸거나, state를 사용해서 component를 교체, 등등등 다양한 상황) : componentWillUnmount() component가 떠날때 호출됨
    
    constructor(props){//시작전에 먼저 호출됨을 알수있음. render보다 먼저 실행됨
        super(props);
        console.log("helo");
    }
    
    state={
        count: 0

    };

    add=()=>{
        console.log("add");
       
       this.setState(current=>({count: current.count +1})); 
    };
    minus=()=>{
        console.log("minus");
        
        this.setState(current=>({count: current.count -1}));
    };

    componentDidMount(){
        console.log("component rendered");

    }

    componentDidUpdate(){
        console.log("I just update");
    }

    componentWillUnmount(){
        console.log("Goodbye, cruel word");
    }
    render(){
        console.log("I'm rendering");
        return <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button> //this.add로 하면 click했을때만  function이 호출되길원하는것/ this.add() : 바로 즉시 함수 실행
            <button onClick={this.minus}>Minus</button>
            </div>;
    }
   
}
  

 export default App;
 