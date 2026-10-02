// Menu

import { List } from "../ui";
import { NavLink } from "react-router";
import "../../styles/layout/menu.css";

export default function Menu ({
    className = ""
}){
    return (
        <div className={`menu ${className}`}>
            <div className="menu__container">
                <h2>Menú</h2>
                <List layout="vertical" classUl="menu__list" classLi="menu__navLink">
                    <NavLink to="/movies" >Películas</NavLink>
                    <NavLink to="/series" >Series</NavLink>
                    <NavLink to="/favorites" >Favoritos</NavLink>
                    <NavLink to="/anime/3" >AnimeDetail/3</NavLink>
                    <NavLink to="/anime/2" >AnimeDetail/2</NavLink>
                    <NavLink to="/animePlayer/2" >AnimePlayer/2</NavLink>
                </List>
            </div>
        </div>
    )
}