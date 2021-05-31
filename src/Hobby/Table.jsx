import axios from "axios";
import { useEffect, useState } from "react";
import Entries from "./Entries";
const Table = () => {


    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(true)


    useEffect(() => {
        axios
            .get("http://localhost:8080/getAll")
            .then((response) => {
                setIsLoaded(true);
                setData(response.data);
                setRefresh(true);
                //console.log(response.data);
                // console.log(data);
                console.log(isLoaded);
            })
            .catch((err) => {
                setError(err);
                setIsLoaded(true);
                console.log(error);
                //console.error(error);

            });

    }, [refresh]);
    return (
        <>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry) => (
                    <tr>
                        <Entries entry={entry} key={entry.id} setRefresh={setRefresh} />
                    </tr>
                ))}
            </tbody>
        </>
    )
}
export default Table;