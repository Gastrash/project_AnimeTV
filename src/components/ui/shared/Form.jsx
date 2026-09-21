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
  <>
    <input className="input input--size-medium input--default" type="text" placeholder="Agregar comentario" required/>
    <button id="submit" className="btn btn--size-2 btn--default" type="submit">Comentar</button>
  </>,
  default: ({children}) => children
};

export default function Form ({
  type = "default",
  children
}) {
  const ComponentToRender = COMPONENTS[type];
  return (
    <form className={`form form--layout-${type}`}>
      <div className={`form__container form--variant-${type}`}>
        <ComponentToRender>
          {children}
        </ComponentToRender>
      </div>
    </form>
  )
}