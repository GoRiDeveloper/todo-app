import html from "./app.html?raw";
import todoStore from "../store/todo";
import { renderTodos, renderPending } from "./use-cases/";

const 

elementIDs     = {

    ClearCompleted: ".clear-completed",
    TodoList: ".todo-list",
    NewTodoItems: "#new-todo-input",
    TodoFilter: ".filtro",
    PendingCount: "#pending-count"

},
elementsFilter = {

    All: "Todos",
    Completed: "Completados",
    Pending: "Pendientes"

};

/**
 * 
 * @param {String} elementID 
 */
export const App = (elementID) => {

    const 
    
    displayTodos = () => {

        const TODOS = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, TODOS);
        updatePendingCount();

    },
    
    updatePendingCount = () => {

        renderPending(elementIDs.PendingCount);

    };

    (() => {

        const APP = document.createElement("div");
        APP.innerHTML = html;
        document.querySelector(elementID).append(APP);
        displayTodos();

    })();

    const 

    NEW_DESCRIPTION_INPUT = document.querySelector(elementIDs.NewTodoItems),
    TODO_LIST_UL          = document.querySelector(elementIDs.TodoList),
    CLEAR_COMPLETED       = document.querySelector(elementIDs.ClearCompleted),
    FILTERS_LIs           = document.querySelectorAll(elementIDs.TodoFilter);

    function addAndShowTodo (e) {

        if (e.keyCode !== 13) return;
        if (e.target.value.trim().length === 0) return;

        todoStore.addTodo(e.target.value);

        displayTodos();

        e.target.value = "";

    };

    function completeTask (e) {

        const ELEMENT = e.target.closest("[data-id]");

        todoStore.toggleTodo(ELEMENT.getAttribute("data-id"));

        displayTodos();

    };

    function deleteTask (e) {

        const 
        
        ELEMENT     = e.target.closest("[data-id]"),
        DELETE_TASK = e.target.classList.contains("destroy"); 

        if (!ELEMENT || !DELETE_TASK) return;

        todoStore.deleteTodo(ELEMENT.getAttribute("data-id"));
        displayTodos();

    };

    function deleteCompletedTasks () {

        todoStore.deleteCompleted();
        displayTodos();

    };

    function selectFilter (e) {

        FILTERS_LIs.forEach(element => element.classList.remove("selected"));

        e.target.classList.add("selected");

        switch (e.target.text) {

            case elementsFilter.All:

                todoStore.setFilter(todoStore.FILTERS.All);

            break;

            case elementsFilter.Pending:

                todoStore.setFilter(todoStore.FILTERS.Pending);

            break;

            case elementsFilter.Completed:

                todoStore.setFilter(todoStore.FILTERS.Completed);

            break;

        };

        displayTodos();

    };

    NEW_DESCRIPTION_INPUT.addEventListener("keyup", e => addAndShowTodo(e));
    TODO_LIST_UL.addEventListener("click", e => completeTask(e));
    TODO_LIST_UL.addEventListener("click", e => deleteTask(e));
    CLEAR_COMPLETED.addEventListener("click", () => deleteCompletedTasks());
    FILTERS_LIs.forEach(element => {

        element.addEventListener("click", (e) => selectFilter(e));

    });

};