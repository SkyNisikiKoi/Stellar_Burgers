import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { FillOutCards } from '../../components/FillOutCards/FillOutCards.jsx';
import './ChoiceIngredients.css';
import { useInView } from 'react-intersection-observer';
import React from 'react';

export const ChoiceIngredients = React.forwardRef(({ currentType, setCurrent, setIsIngredientDetailsOpened, ingredients }, ref) => {

    const onTabClick = (tab, id) => {
        setCurrent(tab);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const [bunsRef, inViewBuns] = useInView({
        threshold: 0,
    });

    const [mainsRef, inViewFilling] = useInView({
        threshold: 0,
    });

    const [saucesRef, inViewSauces] = useInView({
        threshold: 0,
    });

    React.useEffect(() => {
        if (inViewBuns) {
            setCurrent("Булки");
        } else if (inViewSauces) {
            setCurrent("Соусы");
        } else if (inViewFilling) {
            setCurrent("Начинки");
        }
    }, [inViewBuns, inViewFilling, inViewSauces]);

    return (
        <>
            <div className='styleTab'>
                <Tab value="Булки" active={currentType === 'Булки'} onClick={() => onTabClick("Булки", 'bun')}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={currentType === 'Соусы'} onClick={() => onTabClick("Соусы", 'sauce')}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={currentType === 'Начинки'} onClick={() => onTabClick("Начинки", 'main')}>
                    Начинки
                </Tab>
            </div>
            <div className="scroll-container-menu" >
                <p className="text text_type_main-medium position-section" id="bun" ref={bunsRef}>
                    Булки
                </p>
                <div className="burgerm-menu-grid">
                    <FillOutCards ingredients={ingredients.bun} setIsIngredientDetailsOpened={setIsIngredientDetailsOpened} />

                </div>
                <p className="text text_type_main-medium position-section" id="sauce" ref={saucesRef}>
                    Соусы
                </p>
                <div className="burgerm-menu-grid">
                    <FillOutCards ingredients={ingredients.sauce} setIsIngredientDetailsOpened={setIsIngredientDetailsOpened} />

                </div>
                <p className="text text_type_main-medium position-section" id="main" ref={mainsRef}>
                    Начинки
                </p>
                <div className="burgerm-menu-grid">
                    <FillOutCards ingredients={ingredients.main} setIsIngredientDetailsOpened={setIsIngredientDetailsOpened} />

                </div>

            </div>
        </>

    )




})