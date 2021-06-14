import React, { useState, Component } from 'react';

const Counter = ({ max, step }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => {
            if(c >= max) return c; // must return the value
            return c + step;
        })
    };

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }
        return (
            <div className="Counter">
                <p className="count">{count}</p>
                <section className="controls">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </section>
            </div>
        );
    }


export default Counter;