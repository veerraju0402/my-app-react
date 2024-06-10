import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    console.log(props);
  return <li>{ props.carId }  I am a { props.carBrand }</li>;

}

export function Garage() {
  //const cars = ['Ford', 'BMW', 'Audi'];
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {/* {cars.map((car) => <Car carBrand={car} />)} */}
        {cars.map((car) => <Car carId={car.id} carBrand={car.brand} />)}
      </ul>
    </>
  );
}