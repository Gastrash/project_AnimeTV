import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, Button, Icon, Modal, Input } from "../ui";
import { Novedades, Login, Menu } from "./";

export default function Header ({
    title = "AnimeTV"
}) {
    const [OpenNovedades, setOpenNovedades] = useState(false);
    const [OpenLogin, setOpenLogin] = useState(false);
    const [OpenMenu, setOpenMenu] = useState(false);

    return (
        <header id="header">
            <div className="header flex flex-row justify-space-between align-center">
                <div className="header__left flex flex-row justify-center align-center">
                    <NavLink to="/" className="header__title">
                        {title}
                    </NavLink>
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <NavLink to="/movies" className="header__navLink">Películas</NavLink>
                            <NavLink to="/series" className="header__navLink">Series</NavLink>
                            <NavLink to="/favorites" className="header__navLink">Favoritos</NavLink>
                        </List>
                    </nav>
                </div>
                <div className="header__right flex flex-row align-center">
                    <div className="header__search flex-row justify-center align-center">
                        <form className="header__form flex flex-row justify-center align-center">
                            <Input className="header__input" type="text" placeholder="Buscar..." />
                            <Button className="header__btnSearch" variant="secondary" size="2" layout="square" icon={<Icon name="search" />}></Button>
                        </form>
                    </div>
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <Button onClick={() => setOpenNovedades(value => !value)} className="header__btnRight" variant="secondary" size="2" layout="square" icon={<Icon name="notifications" />}></Button>
                            <Button
                            onClick={() => setOpenLogin(value => !value)} className="header__btnRight" variant="secondary" size="2" layout="square" icon={<Icon name="account" />}></Button>
                        </List>
                        <div className="header__menu">
                            <Button
                            onClick={() => setOpenMenu(value => !value)} className="header__btnMenu" variant="secondary" size="2" layout="square" icon={<Icon name="options" />}></Button>
                        </div>
                    </nav>
                </div>

                {OpenNovedades && (
                    <Modal isOpen={OpenNovedades} onClose={() => setOpenNovedades(false)}>
                        <Novedades/>
                    </Modal>
                )}
                {OpenLogin && (
                    <Modal isOpen={OpenLogin} onClose={() => setOpenLogin(false)} blur={true}>
                        <Login />
                    </Modal>
                )}
                {OpenMenu && (
                    <Modal isOpen={OpenMenu} onClose={() => setOpenMenu(false)}>
                        <Menu />
                    </Modal>
                )}
                
                
            </div>
        </header>
    )
}