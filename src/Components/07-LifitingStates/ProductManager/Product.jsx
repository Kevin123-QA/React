import { useState } from 'react';

const Product = () => {
    const [prod, Prod] = useState([]);
    const [prodName, ProdName] = useState([]);
    const [quant, Quant] = useState("");
    const addProd = event => {
        event.preventDefault();
        Prod([...prod, { id: prod.length, name: prodName, Quantity: quant }]);
        ProdName("");
        Quant("");
    }

    return (
        <>
            <form onSubmit={addProd}>
                <input type="text" name="Name" value={prodName} onChange={(e) => ProdName(e.target.value)} />
                <input type="number" name="Quantity" value={quant} onChange={(e) => Quant(e.target.value)} />
                <button type="submit"> Add Item </button>
            </form>
            <ul>
                {prod.map(prods => (
                    <li key={prods.id}>{prods.Quantity} x {prods.name}
                        <button type="submut"> + </button> <button type="submut"> - </button></li>
                ))}
            </ul>
        </>
    )
}

export default Product;