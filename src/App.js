import React from "react";
import propTypes from 'prop-types';

//필수과정 
class App extends React.Component{
  state ={
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  //render 을 바꿔주어야 행
  //setState를 하면 view가 다시 refresh됨
  //setState를 안해주면 render function 다시 못불러ㅗㅇㅁ

  render() {
    return (<div>
      <h1> The number is: {this.state.count}</h1>
      <button onClick ={this.add}>Add</button>
      <button onClick ={this.minus}>Minus</button>
    </div>);
  };
};

export default App;
