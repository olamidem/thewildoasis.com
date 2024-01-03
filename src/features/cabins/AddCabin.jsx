import Button from "../../ui/Button.jsx";
import {useState} from "react";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpenModal((showForm) => !showForm)}>
                Add new Cabin
            </Button>
            {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
                <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
            </Modal>
            }
        </div>
    )
}

export default AddCabin
