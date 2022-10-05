import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

export function ListItemTop(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px', marginBottom: '16px' }}>
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