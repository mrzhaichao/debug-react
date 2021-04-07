/*
 * @Author: chaochao
 * @Date: 2021-04-07 15:40:31
 * @LastEditTime: 2021-04-07 17:32:10
 */
import { useReducer, useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return ++state;
        case "decrement":
            return --state;
        default:
            return ++state;
    }
}

export default function Count() {
    const [state, dispatch] = useReducer(reducer, 0);
    const [num] = useState(100);

    return (
        <div>
            <p>num {num}</p>
            <p>数值{state}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        </div>
    );
}
