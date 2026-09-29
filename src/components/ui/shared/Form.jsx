// Form.jsx

/*

function Form({
  variant = "default",
  layout = "square",
  type = "default" // Prop que decide qué componente renderizar
}) {
  // 2. Asignamos el componente a una variable con mayúscula inicial
  const ComponentToRender = COMPONENTES[type] || COMPONENTES.default;

  return (
    <form className="form">
      <div className="form__container">
        {/* 3. Se renderiza como un componente normal de JSX }
        <ComponentToRender />
      </div>
    </form>
  );
}

<form className="comments-form flex flex-row justify-center align-center">

*/

import { Button, Input, Icon } from "../basic";
/*
const COMPONENTS = {
  login: () => 
  <>
    <Input size="2"></Input>
    <Input size="2"></Input>
    <Button size="2"></Button>
  </>,
  register: () => 
  <>
    <Input size="2"></Input>
    <Input size="2"></Input>
    <Input size="2"></Input>
    <Button size="2"></Button>
  </>,
  comment: () =>
  default: ({children}) => children
};
*/
export default function Form ({
  type = "default",
  className = "",
  children
}) {
  return (
    <form className={`form form--layout-${type}`}>
      <div className={`form__container form--variant-${type} ${className}`}>
          {children}
      </div>
    </form>
  )
}