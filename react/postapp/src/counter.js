import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    //[state, setState]

    // counter = 0 ไม่ได้
    // counter = counter + 1 ไม่ได้
    function handleRandomCounter(){
        setCounter(Math.floor(Math.random(counter)*100))
    }

    function handleSubtractCounter(){
        setCounter(counter - 1)
    }

    function handleResetCounter(){
        setCounter(0)
    }

    return (
        <div>
            <h1>counter: {counter}</h1>
            <button onClick = {handleRandomCounter}>Random</button>
            <button onClick = {handleSubtractCounter}>Subtract</button>
            <button onClick = {handleResetCounter}>Reset</button>
        </div>
    )
}

export default Counter