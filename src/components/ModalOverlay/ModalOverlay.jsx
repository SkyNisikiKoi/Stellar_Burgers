
import './ModalOverlay.css';
import PropTypes from 'prop-types';


const ModalOverlay = ({ onClick }) => {

    return (
        <div className={'modal'} onClick={onClick} />
    );
};

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ModalOverlay;