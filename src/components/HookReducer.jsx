import React, { useReducer } from 'react'
const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "sub":
            return state - 1;
        case "refresh":
            return 0;
    }
};
const HookReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='my-5 py-5'>
            <div className='container'>
                <h1>HookReducer</h1>
                <h2>{count}</h2>
                <div className='d-flex gap-4 justify-content-center'>
                    <button onClick={() => dispatch("add")}>add me</button>
                    <button onClick={() => dispatch("sub")}>sub me</button>
                    <button onClick={() => dispatch("refresh")}>refresh</button>
                </div>
            </div>
        </div>
    )
}

export default HookReducer
//#1 state = count-0 (initial)
//#2 action = increment drecrement
//#3 dispatch =send actions update count (sent action to "reducer")
// dispatch(action) is called with an action parameter(in your case, a string like "add", "subtract", or "reset").
// dispatch is used to send actions to the reducer function (dispatch({ type: 'increment' }) and dispatch({ type: 'decrement' })), which then updates state.
//#4 reducer: A function that specifies how the state should change in response to dispatched actions It receives the current state (state) and an action (action) as arguments and returns the new state.


// reducer is a parameter(a function) passed to useReducer, and initialState is an argument passed to useReducer to initialize the state