import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import './ListItemTop.css';
import { ingredientType } from '../../utils/types.js';

export function ListItemTop(props) {
    return (
        <div className='styleListItemTop'>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={`${props.name}(верх)`}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    )
}

ListItemTop.propTypes = {
    props: ingredientType.isRequired
};

