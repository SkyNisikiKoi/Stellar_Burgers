import PropTypes from 'prop-types';
import { React, useState, useRef } from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import './Card.css';
import { ingredientType } from '../../utils/types.js';
import * as actions from '../../services/actions/actions.jsx';
import { bindActionCreators } from 'redux';
import { store } from '../../services/reducers/index.js';
import { useDrag, useDrop } from "react-dnd";

export const ingridientType = "ingridient";

export function Card({ item, setIsIngredientDetailsOpened, moveCard }) {

    const { dispatch } = store;
    const { addIngredientView } = bindActionCreators(actions, dispatch);
    const ref = useRef(null);

    function openCard() {
        addIngredientView(item);
        setIsIngredientDetailsOpened(true)
    }

    const [, dropRef] = useDrop({
        accept: ingridientType,
        hover(item) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;
            const dragId = item.dragId;

            if(dragIndex === hoverIndex){
                return;
            };

            moveCard(dragIndex, hoverIndex, dragId, item);
            item.index = hoverIndex
        }

    });

    const [, dragRef, preview] = useDrag({
        type: ingridientType,
        item: () => {
            const dragId = item.dragId;
            let index = Math.random().toString(36).slice(2);
            return {dragId, index, ...item}
        },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    dropRef(preview(ref));

    return (
        <div className="card" onClick={() => openCard()} key={item._id} ref={dragRef}>
            <Counter className="counter-card" count={1} size="default" />

            <img className="card-img" src={item.image} alt={item.name}></img>
            <p className="text text_type_main-default position-text">
                {item.price} <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default position-text">
                {item.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    item: ingredientType.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setId: PropTypes.string.isRequired
};
