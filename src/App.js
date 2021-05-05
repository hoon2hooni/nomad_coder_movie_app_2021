import React from "react";
import propTypes from 'prop-types';

//필수과정 
class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() =>{
      this.setState({ isLoading: false });
    }, 6000);
  }
  
  render() { 
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading ...": "we are ready"}</div>;  
  }
}

export default App;
