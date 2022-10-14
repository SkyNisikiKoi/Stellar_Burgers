import { useState } from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import Modal from '../Modal/Modal.jsx'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx'
import PropTypes from 'prop-types';

function BurgerIngredients({ items }) {
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
    const [id, setId] = useState(null);
    const [currentType, setCurrent] = useState('Булки');

    const closeAllModals = () => {
        setIsIngredientDetailsOpened(false);

    };

    const handleEscKeydown = (e) => {
        e.key === "Escape" && closeAllModals();
    };

    function getCurrentType(items) {
        if (currentType === 'Булки') {
            return items.bun
        } else if (currentType === 'Соусы') {
            return items.sauce
        } else if (currentType === 'Начинки') {
            return items.main
        }
    }

    return (

        <section className="section-burgerm-menu">

            {isIngredientDetailsOpened &&
                <Modal
                    onOverlayClick={closeAllModals}
                    onEscKeydown={handleEscKeydown}
                >
                    <IngredientDetails item={items.all.find(x => x._id == id)} />
                </Modal>}

            <div className="burgerm-menu">

                <p className="text text_type_main-medium position-title">
                    Соберите бургер
                </p>

                <ChoiceIngredients currentType={currentType}
                    setCurrent={setCurrent}
                    setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                    setId={setId}
                    type={getCurrentType(items)} />
            </div>

        </section>

    );
}

BurgerIngredients.propTypes = {
    items: PropTypes.array.isRequired
};

export default BurgerIngredients;