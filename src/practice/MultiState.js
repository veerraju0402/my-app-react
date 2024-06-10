import React, { useReducer } from 'react';
import { useEffect } from 'react';



const FETCH_INIT = "FETCH_INIT";
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
    loading: true,
    data: null,
    error: null
}

const myDataReducer = (state, action) => {

    switch (action.type) {
        case FETCH_INIT:
            return { ...state, loading: true, error: null }
        case FETCH_START:
            return { ...state, loading: false, data: action.paylod }
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.paylod }

        default:
            return state;
    }
}

export function MultiState (){
    const [state, dispatch] = useReducer(myDataReducer, initialState)

    const dataHandler = async () => {
        try {
            dispatch({ type: FETCH_INIT })
            const resp = await fetch("http://jsonplaceholder.typicode.com/users")
            const response = await resp.json()

            setTimeout(() => {
                dispatch({ type: FETCH_START, paylod: response })
            }, 3000)

        } catch (error) {
            dispatch({ type: FETCH_ERROR })
        }
    }

    useEffect(() => {
        dataHandler()
    }, [])

    return (
        <div>
            {state.loading && <p>Loading...</p>}
            {state.data && <div>
                {state.data.map((item) => {
                    return (
                        <h2>{item.name}</h2>
                    )
                })}
            </div>}
        </div>

    )
}

