import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import './ListItemTop.css';


export function ListItemTop(props) {
    return (
        <div className='styleListItemTop'>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />

        </div>
    )
}

ListItemTop.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};