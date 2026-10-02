// Novedades

import React from "react";
import { List } from "../ui";
import { dataAux } from "../../data";

export default function Novedades ({
    className,
}){
    const dataNews = dataAux.news;
    return (
        <div className={`novedades ${className}`}>
            <div className="novedades__container">
                <div className="novedades__header">
                    <h2>Novedades</h2>
                </div>
                <div className="novedades__content">
                    <List 
                        classLi="novedades__list--item"
                        layout="vertical"
                        classUl="novedades__list"
                        type="data"
                        data={dataNews}
                        renderItem={(item) => (
                            <div className="novedades__item">
                                <div className="novedades__item--header flex flex-row justify-flex-start align-center">
                                    <div className="novedades__header--profile">
                                        <img src={item.image} alt={item.title} className="novedades__item--image" />
                                    </div>
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="novedades__item--content flex flex-row justify-space-between align-center">
                                    <p>{item.description}</p>
                                    <div className="novedades__item--dot">
                                    </div>
                                </div>
                            </div>
                        )} />
                </div>
            </div>
        </div>
    )
}