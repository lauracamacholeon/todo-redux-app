import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { validateFilter } from './filter/filtro.actions';
import { filterReducer } from './filter/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filter: validateFilter
}


// todos los reducers de la app
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}