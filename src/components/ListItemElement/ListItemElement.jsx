import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './ListItemElement.css';
import { ingredientType } from '../../utils/types.js';

export function ListItemElement(props) {
    return (
        <div className='styleListItemElement' key={props._id}>

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
    props: ingredientType.isRequired
};