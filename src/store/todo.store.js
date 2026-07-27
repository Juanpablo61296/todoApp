import {Todo} from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore🍎');
}

const loadStore = () => {
    throw new Error('No inicializado aun');
}

const getTodos = (filter = Filters.All) => {
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default :
            throw new Error(`La opcion ${filter} no es valda`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error("La descripcion es requerida");
    state.todos.push( new Todo(description) );
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error('No inicializado aun');
}
/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos
}