import todoStore from "../../store/todo";

let element;
/**
 * 
 * @param {String} elementID 
 */
export function renderPending (elementID) {

    if (!element) element = document.querySelector(elementID);
    if (!element) throw new Error(`Elemento con el ID : ${elementID} no se encontró.`);

    element.innerHTML = todoStore.getTodo(todoStore.FILTERS.Pending).length;

};