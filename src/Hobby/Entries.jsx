import Delete from "./Delete"
import Edit from "./Edit";
const Entries = (props) => {

    const { entry } = props;
    //console.log(entry);




    return (
        <>
            <td>{entry.id}</td>
            <td>{entry.amount}</td>
            <td>{entry.type}</td>
            <td>{entry.info}</td>
            <td><Edit id={entry.id} amount={entry.amount} type={entry.type} info={entry.info} buttonLabel="edit" className="edit" /></td>
            <td> <Delete id={entry.id} setRefresh={entry.setRefresh} /></td>
        </>
    )



}

export default Entries;