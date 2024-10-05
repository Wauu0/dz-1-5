import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementbyfive, decrementbyfive} from "../actions/Actions";

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    console.log(count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(incrementbyfive())}>INCREMENT 5</button>
            <button onClick={() => dispatch(decrementbyfive())}>DECREMENT -5</button>
        </div>
    );
};

export default Counter;