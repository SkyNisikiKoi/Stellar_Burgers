import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';
import { NavBar } from '../NavBar/NavBar.jsx';


function AppHeader() {
    return (

        <header className='m-10 backgroundColor position'>
            <div className='navigation'>

                <NavBar className='navbar'>
                    <div className='horizontal-menu'>

                        <Button extraClass='color position-button button-hover' type="secondary" size="medium" htmlType='button'>
                            <span ><BurgerIcon type="secondary" /></span> Конструктор
                        </Button>


                        <Button extraClass='color position-button button-hover' type="secondary" size="medium" htmlType='button'>
                            <ListIcon type="secondary" />  Лента заказов
                        </Button>
                    </div>
                </NavBar>

                <div>
                    <Logo />
                </div>

                <Button extraClass='color position-button button-hover position-back' type="secondary" size="medium" htmlType='button'>
                    <ProfileIcon type="secondary" />  Личный кабинет
                </Button>

            </div>

        </header>

    );

};

export default AppHeader;
