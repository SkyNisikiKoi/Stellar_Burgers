import { useState, useEffect } from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import { FillOutCards } from '../../components/FillOutCards/FillOutCards.jsx';
import { api } from '../../utils/Api.js';
import Modal from '../Modal/Modal.jsx'
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx'


function BurgerIngredients(items) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState({});
    const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
    const [id, setId] = useState(null);
    const [currentType, setCurrent] = useState('Булки');

    const closeAllModals = () => {
        setIsIngredientDetailsOpened(false);

    };

    const handleEscKeydown = (e) => {
        e.key === "Escape" && closeAllModals();
    };

    function getCurrentType() {
        if (currentType === 'Булки') {
            return items.bun
        } else if  (currentType === 'Соусы') {
            return items.sauce
        } else if  (currentType === 'Начинки') {
            return items.main
        }
    }

    // useEffect(() => {
    //     api.loadCards()
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems({
    //                     bun: result.data.filter(item => item.type === "bun"),
    //                     main: result.data.filter(item => item.type === "main"),
    //                     sauce: result.data.filter(item => item.type === "sauce"),
    //                     all: result.data
    //                 }
    //                 );
    //             },

    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )

    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
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
                    type={getCurrentType()} />
                        </div>
                   
            </section>

        );
    }
}

export default BurgerIngredients;