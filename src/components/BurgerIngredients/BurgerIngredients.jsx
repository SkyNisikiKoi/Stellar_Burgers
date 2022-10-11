import { React, useState, useEffect } from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import { FillOutCards } from '../../components/FillOutCards/FillOutCards.jsx';
import { api } from '../../utils/Api.js';


function BurgerIngredients() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});


    useEffect(() => {
        api.loadCards()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems({
                        bun: result.data.filter(item => item.type === "bun"),
                        main: result.data.filter(item => item.type === "main"),
                        sauce: result.data.filter(item => item.type === "sauce"),

                    }
                    );
                    console.log(result.data)
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (

            <section className="section-burgerm-menu">
                <div className="burgerm-menu">

                    <p className="text text_type_main-medium position-title">
                        Соберите бургер
                    </p>

                    <ChoiceIngredients />

                    <div className="scroll-container-menu">

                        <p className="text text_type_main-medium position-section">
                            Булки
                        </p>
                        <div className="burgerm-menu-grid bun">
                            <FillOutCards type={items.bun}/>

                        </div>

                        <p className="text text_type_main-medium position-section">
                            Соусы
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCards type={items.main}/>

                        </div>
                        <p className="text text_type_main-medium position-section">
                            Начинки
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCards  type={items.sauce}/>

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default BurgerIngredients;