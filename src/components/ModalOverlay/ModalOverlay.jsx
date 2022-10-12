
import './ModalOverlay.css';
import Modal  from '../Modal/Modal.jsx';


const ModalOverlay = ({active, setActive}) => {

    function handleKeyPress(e) {
        console.log(e)
        if (e.key === 'Escape') {
            setActive(false);
        }}

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} onKeyDown={(e) => handleKeyPress(e)}>
            <div>
            <Modal setActive={setActive}/>
            </div>

        </div>
    )
}



export default ModalOverlay;