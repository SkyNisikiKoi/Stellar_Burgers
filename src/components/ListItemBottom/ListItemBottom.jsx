import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

export function ListItemBottom(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px' }}>
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