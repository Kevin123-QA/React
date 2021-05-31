import { useState } from "react";
import axios from "axios";
const Submit = () => {


    const add = (e) => {
        e.preventDefault();
        const entry = { type, info, amount }
        console.log(entry);


        axios
            .post("http://localhost:8080/create", entry)
            .then((resp) => {
                console.log(resp);
                console.log("Start timeout")
                setTimeout(() => { window.location.reload(); }, 3000)

            })


            .catch((err) => {
                console.log(err)
            });
        setAmount("");
        setInfo("");
        setType("");
    }


    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [info, setInfo] = useState("");
    return (
        <center>
            <label>Amount </label>
            <input
                id="amount"
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}

            />
            <label>Type </label>
            <input
                id="type"
                type="text"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}

            />
            <label>Info </label>
            <input
                id="info"
                type="text"
                name="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}


            />

            <br />



            <button id="submit" className="btn btn-success" onClick={add} >Submit</button>
            <button id="clear" className="btn btn-danger" >Clear</button>
        </center>
    )
}

export default Submit;