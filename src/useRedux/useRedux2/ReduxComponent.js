
import React from 'react';
import {  connect } from 'react-redux';

 class Counter extends React.Component {
    
    render() {
        console.log("component",this.props.count);
        console.log("1component",this.props.myname);
      return (
        <div>
          <h1>{this.props.count}</h1>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>
      );
    }
  }
  
//   Map state and dispatch to props
//   const mapStateToProps = (state) => (
//     {
//     count: state.count
//   });

const mapStateToProps = state =>{
   const {name,age}=state;
    console.log("map to state:",state)
     return {
    //    count:state.age,
      myname:name,
      count:age
      };
 }

  const mapDispatchToProps = {
    increment: () => ({ type: 'INCREMENT',payload: 2 }),
    decrement: () => ({ type: 'DECREMENT',payload: 2 })
  };
  
  // Connect component to Redux
  export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
  