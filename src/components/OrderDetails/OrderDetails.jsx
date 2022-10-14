import './OrderDetails.css';
import done from "../../images/done.svg"


function OrderDetails() {

    return (
        <div className="order-details">
            <p className="text text_type_digits-large order-details-number">123456</p>
            <p className="text text_type_main-default order-details-identifier">
                идентификатор заказа
            </p>
            <img class="order-details-image" src={done} alt="" />
            <p className="text text_type_main-small order-details-start">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-small order-details-wait">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>


    )
}

export default OrderDetails;