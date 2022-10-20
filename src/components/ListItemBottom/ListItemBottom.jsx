import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import './ListItemBottom.css';

export function ListItemBottom(props) {
    return (
        <div className='styleListItemBottom'>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    )
}

ListItemBottom.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};