import { useEffect } from 'react';
import './Modal.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalsContainer = document.querySelector('#modals');

const Modal = ({ onClose, children }) => {

    useEffect(() => {

        const handleEscKeydown = (e) => {
            e.key === "Escape" && onClose();
        };

        document.addEventListener('keydown', handleEscKeydown);

        return () => {
            document.removeEventListener('keydown', handleEscKeydown);
        };
    }, []);


    return ReactDOM.createPortal(
        <>
            <div className='modal-content'>
                <div className="modal-button-exit">
                    <CloseIcon onClick={onClose} />
                </div>
                {children}
            </div>
            <ModalOverlay onClick={onClose} />
        </>,
        modalsContainer
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export default Modal;