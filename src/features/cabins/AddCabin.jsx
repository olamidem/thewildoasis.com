import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import CabinTable from "./CabinTable.jsx";

function AddCabin() {
    return <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm/>
        </Modal.Window>

        <Modal.Open opens='table'>
            <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name='table'>
            <CabinTable/>
        </Modal.Window>
    </Modal>
}

export default AddCabin
// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal((showForm) => !showForm)}>
//                 Add new Cabin
//             </Button>
//             {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
//                 <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
//             </Modal>
//             }
//         </div>
//     )
// }

