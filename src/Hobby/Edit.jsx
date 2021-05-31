import axios from "axios";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Edit = (props) => {
    const { amount, info, type, id } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [editAmount, setEditAmount] = useState(amount);
    const [editType, setEditType] = useState(type);
    const [editInfo, setEditInfo] = useState(info);


    const update = (e) => {
        // e.preventDefault();
        const UpdateEntry = { editAmount, editType, editInfo }
        console.log(UpdateEntry);

        axios.put("http://localhost:8080/update/" + id, UpdateEntry)
            .then((resp) => {
                console.log(resp)

            })
            .then((resp) => {
                console.log(resp)
                //setTimeout(() => { window.location.reload(); }, 3000)

            })
            .catch((err) => {
                console.log(err)
            });


    }


    return (
        <>
            <div>
                <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Update an Entry</ModalHeader>
                    <ModalBody>
                        <label>Amount</label>

                        <input
                            id="amount"
                            type="number"
                            name="amount"
                            value={editAmount}
                            onChange={(e) => setEditAmount(e.target.value)}
                        />
                        <label>Type </label>
                        <input
                            id="type"
                            type="text"
                            name="type"
                            value={editType}
                            onChange={(e) => setEditType(e.target.value)}

                        />
                        <label>Info </label>
                        <input
                            id="info"
                            type="text"
                            name="info"
                            value={editInfo}
                            onChange={(e) => setEditInfo(e.target.value)}
                        />

                    </ModalBody>


                    <ModalFooter>
                        <Button color="primary" onClick={() => update()}>Save</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>

                </Modal>
            </div>
        </>
    )
}
export default Edit;