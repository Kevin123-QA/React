import Submit from "./Submit";
import Table from "./Table";




const Home = () => {
    const date = new Date();
    return (
        <>
            <h1>{date.toLocaleDateString()}<center> <u>Spending Tracker</u>  </center> </h1>
            <form ><Submit /></form>
            <div><center><table>
                <Table />
            </table></center></div>


        </>



    )
}

export default Home;