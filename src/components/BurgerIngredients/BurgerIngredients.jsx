import { useState } from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import Modal from '../Modal/Modal.jsx'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx'
import { useContext } from "react";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";

function BurgerIngredients() {
    const ingredients = useContext(BurgerIngredientsContext);
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
    const [id, setId] = useState(null);
    const [currentType, setCurrent] = useState('Булки');

    const onClose = () => {
        setIsIngredientDetailsOpened(false);

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
                    onOverlayClick={onClose}
                    onEscKeydown={handleEscKeydown}
                >
                    <IngredientDetails item={ingredients.all.find(x => x._id == id)} />
                </Modal>}

            <div className="burgerm-menu">

                <p className="text text_type_main-medium position-title">
                    Соберите бургер
                </p>

                <ChoiceIngredients currentType={currentType}
                    setCurrent={setCurrent}
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    setId={setId}
                    type={getCurrentType(ingredients)} />
            </div>

        </section>

    );
}


export default BurgerIngredients;