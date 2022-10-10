import { Card } from '../../components/Card/Card.jsx';

export function FillOutCards(props) {

    let newCards = props.type.map(item => Card(item))//<Card image={item.image} name={item.name} price={item.price}/>)

    return newCards;
};