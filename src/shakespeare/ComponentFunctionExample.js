import { useState } from "react";
import { useEffect } from "react";

export const ComponentFunctionExample = ({argument, children}) => {
    const [count, setCount] = useState(0)

    //componentDidMount
    useEffect(() => {
        setCount(Math.floor(Math.random() * 100))
        console.log('ComponentFunctionExample was nounted')
    }, [])

    useEffect(() => {
        console.log('Counter was increased. New value is: ${count}')  
    }, [count]) 

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('ComponentFunctionExample was unmounted')
        }
    }, [])

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Component Function Example</h1>

            <p>Counter: {count}</p>
            <button onClick={handleClick}>=1</button>

            <p>{argument}</p>
            {children}
        </div>
    )
}