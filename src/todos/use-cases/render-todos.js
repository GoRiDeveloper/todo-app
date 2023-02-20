import { Todo } from "../models/todo";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {String} elementID 
 * @param {Todo} todos 
 */
export const renderTodos = (elementID, todos = []) => {

    if (!element) element = document.querySelector(elementID);
    if (!element) throw new Error("El elemento no se encontro");

    element.innerHTML = "";
    
    todos.forEach(todo => {
        
        element.append(createTodoHTML(todo));

    });

};