import { useState } from "react";


const Different=()=>{

    const [edit,setEdit] = useState(false);
    console.log(edit);


    return(
        <>
        <h1>helloo</h1>
        <p>the current value of edit is </p>
        {
            // <condition>? if its true: if its false
            edit? <p>TRUEEEEEE</p> : <p>FALSEEEEEE</p>
        }
        <button onClick={()=>setEdit(c=>!c)}>update me!!!</button>
        </>
    )

}

export default Different;