import { createReducer, on, State } from '@ngrx/store';
import {
  createTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';
import { Action } from '../../../../01-redux-basic/ngrx-fake/ngrx';
import { deleteCompleted } from './todo.actions';

// va a tener un arreglo de todos, colocar uno por defecto
export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('salvar al mundo2'),
  new Todo('salvar al mundo3'),
];

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { texto }) => [...state, new Todo(texto)]),
  // SIEMPRE DEBEMOS REGRESAR EL STATE
  on(toggleTodo, (state, { id }) => {
    // map devuelve un nuevo arreglo, no mutar el state
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editTodo, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          // texto: texto es igual a dejar solo texto porque se repite el nombre
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  // va a devolver todos los id que tengan el todo.id diferente al id, o sea un nuevo arreglo sin el que
  //  es igual o sea lo borra
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  // marcar todas como leido
  on(toggleAll, (state, { toggleFlag }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado: toggleFlag,
      };
    })
  ),

  // me devuelve un arreglo con solo los que no estan completados
  on(deleteCompleted, (state) => state.filter((state) => !state.completado))

  // reducer
);

// state = initial state
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
