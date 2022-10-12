import { Card } from '../../components/Card/Card.jsx';

export function FillOutCards({type, setModalActive}) {

    let newCards = type.map(item => Card({item, setModalActive}))//<Card image={item.image} name={item.name} price={item.price}/>)

    return newCards;
};