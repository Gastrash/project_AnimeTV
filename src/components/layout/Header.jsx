//layout/sections/Header.jsx

/*
aria-label para navs.
*/

import { List, Button, Icon } from "../ui";

export default function Header ({
    container = "container", //secondary,
    title = "AnimeTV"
}) {
    return (
        <header id="header" className={`${container}`}>
            <div className="header flex flex-row justify-space-between align-center">
                <div className="header__left flex flex-row justify-center align-center">
                    <h2 className="header__title">{title}</h2>
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <Button size="1" variant="link">Películas</Button>
                            <Button size="1" variant="link">Series</Button>
                            <Button size="1" variant="link">Favoritos</Button>
                        </List>
                    </nav>
                </div>
                <div className="header__right flex flex-row justify-center align-center">
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List classUl="header__list">
                            <Button className="header__btnRight" variant="secondary" size="1" layout="square" icon={<Icon name="search" />}></Button>
                            <Button className="header__btnRight" variant="secondary" size="1" layout="square" icon={<Icon name="notifications" />}></Button>
                            <Button className="header__btnRight" variant="secondary" size="1" layout="square" icon={<Icon name="account" />}></Button>
                        </List>
                    </nav>
                </div>
            </div>
        </header>
    )
}