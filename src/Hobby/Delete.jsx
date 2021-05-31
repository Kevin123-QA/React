import axios from "axios";
const Delete = ({ id, setRefresh }) => {

    const remove = () => {
        axios
            .delete("http://localhost:8080/delete/" + id)

            .then((resp) => {
                setRefresh(c => !c)
                console.log(resp);
                // setTimeout(() => { window.location.reload(); }, 3000)
            })
            .catch((err) => console.log.err);
    }
    return (
        <td><button id="submit" className="btn btn-danger" onClick={() => remove()}>Delete</button></td>
    )

}



export default Delete;
