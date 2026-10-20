import { useState } from "react";
import { List, Button, Icon, Modal } from "../ui";
import { useNavigate } from "react-router-dom";
import { Login } from "./";

/* para modal */

export default function Menu ({
    className = ""
}){
    const navigate = useNavigate();
    const [OpenLogin, setOpenLogin] = useState(false);
    return (
        <div className="menu flex flex-column justify-flex-start align-center">
            <div className="menu__header flex flex-row justify-space-between align-items">
                    <h3 className="menu__title">AnimeTV</h3>
                    <div className="menu__login flex justify-center align-center">
                        <Button
                        onClick={() => setOpenLogin(value => !value)} className="menu__btnLogin" variant="secondary" size="none" layout="full" icon={<Icon name="account" />}>Iniciar sesión</Button>
                    </div>
                </div>
            <div className={`menu__container flex flex-column ${className}`}>
                <List layout="vertical" classUl="menu__list justify-" classLi="menu__li">
                    <Button /*onClick={() => navigate(`/search`)}*/
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="search" />}>Buscar</Button>
                    <Button onClick={() => navigate(`/series`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="episodes" />}>Series</Button>
                    <Button onClick={() => navigate(`/movies`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="episodes" />}>Películas</Button>
                    <Button onClick={() => navigate(`/favorites`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="like" />}>Favoritos</Button>
                    <Button onClick={() => navigate(`/anime/3`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="arrow" rotate="180" />}>AnimeDetail/3</Button>
                    <Button onClick={() => navigate(`/anime/2`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="arrow" rotate="180" />}>AnimeDetail/2</Button>
                    <Button onClick={() => navigate(`/animePlayer/2`)}
                    className="menu__btn" variant="secondary" size="none" layout="full" icon={<Icon name="arrow" rotate="180" />}>AnimePlayer/2</Button>
                </List>

                {OpenLogin && (
                    <Modal name="login" isOpen={OpenLogin} onClose={() => setOpenLogin(false)} blur={true}>
                        <Login />
                    </Modal>
                    )}
            </div>
        </div>
    )
}