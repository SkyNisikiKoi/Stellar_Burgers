import { useEffect } from 'react';
import './Modal.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalsContainer = document.querySelector('#modals');

const Modal = ({ onOverlayClick, onEscKeydown, children }) => {

    useEffect(() => {
        document.addEventListener('keydown', onEscKeydown);

        return () => {
            document.removeEventListener('keydown', onEscKeydown);
        };
    }, []);


    return ReactDOM.createPortal(
        <>
            <div className='modal-content'>
                <div className="modal-button-exit">
                    <CloseIcon onClick={onOverlayClick} />
                </div>
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick} />
        </>,
        modalsContainer
    );
};

Modal.propTypes = {
    onOverlayClick: PropTypes.func.isRequired,
    onEscKeydown: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export default Modal;