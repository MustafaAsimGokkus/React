import React, { useEffect, useState } from "react";
// function App(){return <><h1>Hello World</h1></>}
const App = () => {
    // initial value empty string
    // when i click on button 1 hten i show 'Button 1'
    const [buttonNumber, setButtonNumber] = useState('');//https://jsonplaceholder.typicode.com/post
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${buttonNumber}`)
            .then(response => response.json())
            .then(result => setItems(result));//passing results to items array
        setIsLoaded(true);
        console.log(items)//items=result
    }, [buttonNumber])
    return <>
        <button onClick={() => { setButtonNumber('posts') }}>Post Button</button>
        <button onClick={() => { setButtonNumber('comments') }}>Comments Button</button>
        <button onClick={() => { setButtonNumber('users') }}>Users Button</button>
        <p>{buttonNumber}</p>
        <>
            {items.map((eachItem) => {
                return <pre>{JSON.stringify(eachItem)}</pre>
            })}
        </>
    </>
}
export default App;