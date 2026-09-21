// Modal.jsx

/*

modalData: image, title, texto.

*/

export default function Modal ({
  data = {}
}) {
        return (
          <dialog className="modal capa-5 justify-center align-center" id="modal">
            <div className="modal__images flex justify-center align-center">
                <img alt="${modalData.titulo}" src="${modalData.image}"/>
            </div>
            <div className="modal__contenido flex flex-column align-flex-start justify-center padding-modal-contenido">
                <h1 className="modal__titulo flex justify-flex-start" id="modal-titulo">${modalData.titulo}</h1>
                <p className="modal__texto" id="modal-texto">${modalData.desarrollo}</p>
                <nav class="projects__links justify-center align-center">
                    <span>Sitio Web:</span><a href="${modalData.websiteLink}">${modalData.websiteLink}</a>
                    <span>Repositorio Github:</span><a href="${modalData.repoLink}">${modalData.repoLink}</a>
                </nav>
            </div>
            <div className="modal__container__button flex justify-center align-center">
                <button className="btn btn--modal" id="modal-quit">
                    <img src="assets/icons/quitButton.svg"/>
                </button>
              </div>
            </dialog>)
}

/*
import { modalComponent } from "../components/modalComponent.js";
import { modalData } from "../data/modalData.js";
import { show } from "../utils/dom.js";
import { hide } from "../utils/dom.js";

const DOM = {
    modal: document.querySelector("#modal")
}

function desactivarScroll(contenido){
    document.body.style.overflow = "hidden";
    contenido.scrollTop = 0;
}

function activarScroll(){
    document.body.style.overflow = "auto";
}

export function initModal(){
    document.addEventListener("click", (e) => {
        if(e.target.closest("#modal-quit")){
            DOM.modal.classList.remove("active");
            activarScroll();
        }
    });

    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-modal]");

        if(!trigger) return;

        const key = trigger.dataset.modal;

        const contenido = modalData[key];

        if(!contenido) return;

        DOM.modal.innerHTML = "";
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal__container flex flex-column justify-flex-start align-center padding-modal gap-s";
        modalContainer.innerHTML = modalComponent(contenido);
        DOM.modal.appendChild(modalContainer);
        const modalContenido = document.querySelector(".modal__contenido");
        console.log(modalContenido);

        DOM.modal.classList.add("active");
        desactivarScroll(modalContenido);
    });
} 
*/