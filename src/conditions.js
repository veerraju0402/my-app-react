function DefaultFunction() {
	return <h1>Default!</h1>;
}
function MadeGoal() {
	return <h1>Success!</h1>;
}

function MissedGoal() {
	return <h1>Failed!</h1>;
}

export function Goal(props) {
 const isGoal = props.isGoal;
    console.log("isGoal "+isGoal);
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

export function MyGarage(props) {
    const cars = props.cars;
        if(cars.length == 4 ){
            return (
                <>
                  <h1>Garage</h1>
                      You have {cars.length} cars in your garage.
                </>
              );
        } else  if (cars.length > 0 )
        return (<>
            you have some cars
            </>
        );
        else return <MissedGoal/>;



  }


export default DefaultFunction