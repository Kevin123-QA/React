

const ChildCounter =({count})=>{

    const date=  new Date();
    return(
        <>
        <h1> i am the child and the count is {count}</h1>
        <p>{date.toLocaleTimeString()}</p>
        </>
    )
}

export default ChildCounter;