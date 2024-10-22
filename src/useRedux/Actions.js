

export const InAction  = (value) =>  dispatch=>{
    console.log("InAction.value:",value)
    dispatch({
        type:"INCREMENT",
        payload: value
    })
}

export const DecAction  = (value) =>  dispatch=>{
    console.log("DecAction.value:",value)
    dispatch({
        type:"DECREMENT",
        payload: value
    })

}

export function getorder( ) {

    return ( dispatch, getState ) => {

        const xyz = getState().reducerfun;
        console.log("xyz:",xyz);
    }
}