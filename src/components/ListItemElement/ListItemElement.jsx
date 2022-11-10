import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { React, useState, useCallback, useRef } from 'react';
import './ListItemElement.css';
import { ingredientType } from '../../utils/types.js';
import * as actions from '../../services/actions/actions.jsx';
import { bindActionCreators } from 'redux';
import { store } from '../../services/reducers/index.js';
import { useDrag, useDrop } from "react-dnd";
import {ingridientType} from "../Card/Card.jsx";

export function ListItemElement({item, index}) {

    const {dispatch} = store;
    const {removeIdIngredientConstructor, changeIdIngredientConstructor} = bindActionCreators(actions, dispatch);

    function onClose() {
        removeIdIngredientConstructor(item)
    }

    const moveListItem =
        (dragIndex, hoverIndex) => {
            changeIdIngredientConstructor({dragIndex, hoverIndex})
        }
    

    const [spec, dropRef] = useDrop({
        accept: ingridientType,
        drop(item, monitor) {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top
            //handleDrop(item);

            // if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return

            // if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
            console.log(45645)

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
        collect: monitor => ({
            hover: monitor.isOver()
        })
    });

    const [{ isDragging }, dragRef] = useDrag({
        type: ingridientType,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

  

    const ref = useRef(null);

    //const dragDropRef = drag(drop(ref)); 
    dropRef(ref);
   // ref={dragDropRef}
    return (
        <div ref={ref}>
        <div className='styleListItemElement' key={item._id}  ref={dragRef}>

            <DragIcon type="primary" />
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={onClose}
            />

        </div>
        </div>
    )
}

ListItemElement.propTypes = {
    item: ingredientType.isRequired
};