// List.jsx

import { Children } from "react";

/*
*/

const COMPONENTS = {
    data: ({ classLi, data, renderItem}) =>
        data.map((item, index) => (
            <li key={item.id ?? item.title ?? index} className={`list__element ${classLi}`}>
                    {renderItem(item)}
            </li>
        )),
    default: ({ children, classLi }) =>
        Children.toArray(children).map((child, index) => (
        <li key={index} className={`list__element ${classLi}`}>{child}</li>
    ))
}

export default function List ({
    layout = "horizontal",
    classUl = "",
    classLi = "",
    type = "default",
    data = [],
    renderItem,
    children
}){

  let ComponentToRender = COMPONENTS[type];
  return (
        <ul className={`list list--layout-${layout} ${classUl}`}>
            <ComponentToRender
            children={children}
            data={data}
            renderItem={renderItem}
            layout={layout}
            
            />
        </ul>
    )
}