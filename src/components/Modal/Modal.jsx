import { React, useState, useEffect } from 'react';
import './Modal.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


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
                <button
                    type="button"
                    arialabel="закрыть форму"
                    className="modal-button-exit"
                    onClick={onOverlayClick}

                ></button>
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
    children: PropTypes.array.isRequired
};

export default Modal;