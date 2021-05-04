import React from "react";
import propTypes from 'prop-types';

function Food({ name, flavor, rating}){
  return (
    <div>
      <h1> I like {name} </h1>
      <h3> I like {flavor}</h3>
      <h4> rating is {rating} </h4>
    </div>
  ) ;
}

Food.propTypes ={
  name: propTypes.string.isRequired,
  flavor: propTypes.string.isRequired,
  rating: propTypes.string.isRequired
}

const foodILike = [
  {
    name: "kimchi",
    flavor: "spicy",
    rating: 5
  },
  {
    name: "samgyupsal",
    flavor: "spicy",
    rating: 5
  },
  {
    name: "kimchi",
    flavor: "spicy",
    rating: 5
  },
  {
    name: "kimchi",
    flavor: "spicy",
    rating: 5
  },
  {
    name: "kimchi",
    flavor: "spicy",
    rating: 5
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
      <Food name = {dish.name} 
            flavor = {dish.flavor}
            rating = {dish.rating}/>
      ))}
    
    

  </div>);
}

export default App;
