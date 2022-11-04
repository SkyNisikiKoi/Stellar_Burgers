import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { FillOutCards } from '../../components/FillOutCards/FillOutCards.jsx';
import './ChoiceIngredients.css';

export function ChoiceIngredients({ currentType, setCurrent, setIsIngredientDetailsOpened, type }) {

    return (
        <>
            <div className='styleTab'>
                <Tab value="Булки" active={currentType === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={currentType === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={currentType === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className="scroll-container-menu">
                <p className="text text_type_main-medium position-section">
                    Булки
                </p>
                <div className="burgerm-menu-grid">
                    <FillOutCards type={type} setIsIngredientDetailsOpened={setIsIngredientDetailsOpened} />

                </div>
            </div>
        </>

    )




}