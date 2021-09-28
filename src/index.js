import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';


//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("potato")
); //render(component, document.getElementBtId) 형태 : 오른쪽 html의 id와 왼쪽 컴포넌트를 연결(rendering) 작업
//component : react에서 component는 기본적으로 HTML을 반환하는 함수
//react는 component를 사용해서 html처럼 작성하려는 경우에 필요
//JSX : react에서 나온 맞춤형 개념 : javascript(여기서는 react를 기술하는 언어)와 html 사이의(javascript로 기술된 component를 사용해서 html처럼 작성하려는) 조합

//🤞react application 은 한번에 하나의 component만 redering 할 수 있음🤞