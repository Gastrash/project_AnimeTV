//layout/sections/Header.jsx

/*
aria-label para navs.

<Button size="1" variant="link">Favoritos</Button>
*/

import { NavLink } from "react-router";
import { List, Button, Icon } from "../ui";

export default function Header ({
    container = "container", //secondary,
    title = "AnimeTV"
}) {
    return (
        <header id="header" className={`${container}`}>
            <div className="header flex flex-row justify-center align-center">
                <div className="header__left flex flex-row justify-center align-center">
                    <NavLink to="/" className="header__title">
                        {title}
                    </NavLink>
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <NavLink to="/movies" className="header__navLink">Películas</NavLink>
                            <NavLink to="/series" className="header__navLink">Series</NavLink>
                            <NavLink to="/favorites" className="header__navLink">Favoritos</NavLink>
                            <NavLink to="/anime/3" className="header__navLink">AnimeDetail/3</NavLink>
                            <NavLink to="/anime/2" className="header__navLink">AnimeDetail/2</NavLink>
                            <NavLink to="/animePlayer/2" className="header__navLink">AnimePlayer/2</NavLink>
                        </List>
                    </nav>
                </div>
                <div className="header__right flex flex-row justify-center align-center">
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <Button className="header__btnRight" variant="secondary" size="2" layout="square" icon={<Icon name="search" />}></Button>
                            <Button className="header__btnRight" variant="secondary" size="2" layout="square" icon={<Icon name="notifications" />}></Button>
                            <Button className="header__btnRight" variant="secondary" size="2" layout="square" icon={<Icon name="account" />}></Button>
                        </List>
                    </nav>
                </div>
            </div>
        </header>
    )
}