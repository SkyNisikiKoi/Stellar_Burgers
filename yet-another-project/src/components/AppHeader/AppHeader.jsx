import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';


export default class AppHeader extends React.Component {
    render() {
        return (

            <header className='m-10 backgroundColor position'>
                <div className='navigation'>

                    <NavBar className='navbar'>
                        <div className='horizontal-menu'>

                            <Button extraClass='color position-button button-hover' type="secondary" size="medium" onClick="(() => void)">
                                <span ><BurgerIcon type="secondary" /></span> Конструктор
                            </Button>


                            <Button extraClass='color position-button button-hover' type="secondary" size="medium" onClick="(() => void)">
                                <ListIcon style={{ opacity: '0.9' }} type="secondary" />  Лента заказов
                            </Button>
                        </div>
                    </NavBar>

                    <div>
                        <Logo />
                    </div>

                    <Button extraClass='color position-button button-hover position-back' type="secondary" size="medium" onClick="(() => void)">
                        <ProfileIcon type="secondary" />  Личный кабинет
                    </Button>

                </div>

            </header>

        );
    }
}


class NavBar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                {this.props.children}
            </nav>
        );
    }
}