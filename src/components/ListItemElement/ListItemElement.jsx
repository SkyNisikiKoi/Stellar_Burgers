import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export function ListItemElement(props) {
    return (
        <div style={{ display: 'flex', flexDirection: '', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>

            <DragIcon type="primary" />
            <ConstructorElement
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />

        </div>
    )
}

ListItemElement.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};