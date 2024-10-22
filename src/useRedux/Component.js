import React from "react";
import {connect} from 'react-redux'
import { InAction } from "./Actions";
import { DecAction } from "./Actions";
import { getorder } from "./Actions";

// const AppRedux =({local_variable, InAction, DecAction}) =>{   //local_variable - directly destructured
    const MyComponent =({local_variable, inc, decrease}) =>{   //mapDispatchToProps
        return(
        <div>
            <center>

               <h1>{local_variable}</h1> 

               <button  onClick={() => inc()}>Increment</button>
               <button  onClick={() =>decrease()}>Decrement</button>

               {/* <button  onClick={() => InAction(5)}>Increment</button>
               <button  onClick={() =>DecAction(5)}>Decrement</button> */}
        
            </center>
        </div>
    )
}

const mapStateToProps = state =>{
   console.log("state:"+state.reducerfun)
    return {
        local_variable:state.reducerfun
     };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        inc: () =>InAction(1)(dispatch),
        // increase: () => dispatch({type:'INCREMENT',payload: 1}),
        decrease: () => dispatch({type:'DECREMENT',payload: 2})
    }
}

// export default AppRedux;
// export default connect(mapStateToProps,{InAction,DecAction})(AppRedux);
 export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);
//mapStateToProps - to use state
//mapDispatchToProps - to use state in actions



// add below code in index file

// import store from './useRedux/store.js';
// import {provider} from 'react-redux'

// <provider store={store}>
// <App1 />
// </provider>