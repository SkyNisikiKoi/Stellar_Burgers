import { useState } from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import Modal from '../Modal/Modal.jsx'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx'
import { useSelector } from 'react-redux';
import * as actions from '../../services/actions/actions.jsx';
import { bindActionCreators } from 'redux';
import { store } from '../../services/reducers/index.js';

function BurgerIngredients() {
    const ingredients = useSelector(state => state.ingredientList);
    const ingredientView = useSelector(state => state.ingredientView);
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
    const [currentType, setCurrent] = useState('Булки');

    const {dispatch} = store;
    const {removeIngredientView} = bindActionCreators(actions, dispatch);

    const onClose = () => {
        setIsIngredientDetailsOpened(false);
        removeIngredientView();
    };

    const handleEscKeydown = (e) => {
        e.key === "Escape" && onClose();
    };

    function getCurrentType(ingredients) {
        if (currentType === 'Булки') {
            return ingredients.bun
        } else if (currentType === 'Соусы') {
            return ingredients.sauce
        } else if (currentType === 'Начинки') {
            return ingredients.main
        }
    }

    return (

        <section className="section-burgerm-menu">

            {isIngredientDetailsOpened &&
                <Modal
                onClose={onClose}
                onEscKeydown={handleEscKeydown}
                >
                    <IngredientDetails item={ingredientView} />
                </Modal>}

            <div className="burgerm-menu">

                <p className="text text_type_main-medium position-title">
                    Соберите бургер
                </p>

                <ChoiceIngredients currentType={currentType}
                    setCurrent={setCurrent}
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    type={getCurrentType(ingredients)} />
            </div>

        </section>

    );
}


export default BurgerIngredients;