import { Todo } from "../todos/models/todo";

const FILTERS = {

    All: "all",
    Completed: "Completed",
    Pending: "Pending"

};

const STATE = {

    todos: [],
    filter: FILTERS.All

};

const initStore = () => {

    loadStore();

};

const loadStore = () => {

    if (!localStorage.getItem("state")) return;
    
    const {todos = [], filter = FILTERS.All} = JSON.parse(localStorage.getItem("state"));

    STATE.todos = todos;
    STATE.filter = filter;

};

const saveStateToLocalStorage = () => {

    localStorage.setItem("state", JSON.stringify(STATE));

};

const getTodo = (filter = FILTERS.All) => {

    switch (filter) {

        case FILTERS.All: 

            return [...STATE.todos];

        case FILTERS.Completed:

            return STATE.todos.filter(todo => todo.done);

        case FILTERS.Pending:

            return STATE.todos.filter(todo => !todo.done);

        default:

            throw new Error(`Opción ${filter} no definida.`);

    };

};

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {

    if (!description) throw new Error("La descripción es requerida.");

    STATE.todos.push(new Todo(description));

    saveStateToLocalStorage();

};

const toggleTodo = (todoID) => {

    STATE.todos = STATE.todos.map(todo => {

        if (todo.id === todoID) todo.done = !todo.done;
        return todo;

    });

    saveStateToLocalStorage();

};

const deleteTodo = (todoID) => {

    STATE.todos = STATE.todos.filter(todo => todo.id !== todoID);

    saveStateToLocalStorage();

};

const deleteCompleted = () => {

    STATE.todos = STATE.todos.filter(todo => !todo.done);

    saveStateToLocalStorage();

};

/**
 * 
 * @param {FILTERS} newFilter 
 */
const setFilter = (newFilter = FILTERS.All) => {

    STATE.filter = newFilter;

    saveStateToLocalStorage();

};

const getCurrentFilter = () => {

    return STATE.filter;

};

export default {

    FILTERS,
    initStore,
    loadStore,
    getTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter  

};