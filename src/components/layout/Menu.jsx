// Menu

import { List } from "../ui";
import { NavLink } from "react-router-dom";
import "../../styles/layout/menu.css";

export default function Menu ({
    className = ""
}){
    return (
        <div className={`menu ${className}`}>
            <div className="menu__container">
                <h2>Menú</h2>
                <List layout="vertical" classUl="menu__list" classLi="menu__li">
                    <NavLink className="menu__navLink" to="/movies" >Películas</NavLink>
                    <NavLink className="menu__navLink" to="/series" >Series</NavLink>
                    <NavLink className="menu__navLink" to="/favorites" >Favoritos</NavLink>
                    <NavLink className="menu__navLink" to="/anime/3" >AnimeDetail/3</NavLink>
                    <NavLink className="menu__navLink" to="/anime/2" >AnimeDetail/2</NavLink>
                    <NavLink className="menu__navLink" to="/animePlayer/2" >AnimePlayer/2</NavLink>
                </List>
            </div>
        </div>
    )
}