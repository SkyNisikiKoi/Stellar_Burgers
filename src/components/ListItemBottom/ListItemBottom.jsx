import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import './ListItemBottom.css';
import { ingredientType } from '../../utils/types.js';

export function ListItemBottom(props) {
    return (
        <div className='styleListItemBottom'>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${props.name}(низ)`}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    )
}

ListItemBottom.propTypes = {
    props: ingredientType.isRequired
};