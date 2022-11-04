import './OrderDetails.css';
import done from "../../images/done.svg"
import PropTypes from 'prop-types';

function OrderDetails({modalData}) {

    return (
        <div className="order-details">
            <p className="text text_type_digits-large order-details-number">{modalData.order.number}</p>
            <p className="text text_type_main-default order-details-identifier">
                идентификатор заказа
            </p>
            <img className="order-details-image" src={done} alt="" />
            <p className="text text_type_main-small order-details-start">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-small order-details-wait">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>


    )
}

OrderDetails.propTypes = {
    modalData: PropTypes.shape({
        order: PropTypes.shape({
            number: PropTypes.number.isRequired
        }),
      }),
};

export default OrderDetails;