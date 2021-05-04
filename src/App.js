import React from "react";

function Food({ name }){
  return <h1> I like {name} </h1> ;
}

const foodILike = [
  {
    name: "kimchi",
    flavor: "spicy"
  },
  {
    name: "samgyupsal",
    flavor: "spicy"
  },
  {
    name: "kimchi",
    flavor: "spicy"
  },
  {
    name: "kimchi",
    flavor: "spicy"
  },
  {
    name: "kimchi",
    flavor: "spicy"
  }
];

//우리는 꼐속 reuse를 할수 있어

function App() {
  return (
  <div>
    <h1>HELLOO!!!!</h1>

    {/* name과 적음 */}
    {/* food component에 prop name kimch를 줌 */} 
    {/* prop  = property야 */}
    {foodILike.map(dish => (
      <Food name = {dish.name}/>
      ))}
    
    

  </div>);
}

export default App;
