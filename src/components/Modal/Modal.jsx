import './Modal.css';



const Modal = ({ setActive }) => {

    return (
        <div className='modal-content active' onClick={e => e.stopPropagation()}>
            <button
                type="button"
                arialabel="закрыть форму"
                className="modal-button-exit"
                onClick={() => setActive(false)}
                
            ></button>
        </div>
    )
}


export default Modal;