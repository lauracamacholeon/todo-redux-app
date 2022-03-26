import { Action, createReducer, on, State } from '@ngrx/store';
import { validateFilter, setFilter } from './filtro.actions';

// estado inciial todos porque quiero que muestre todo por defecto
export const initialState: validateFilter = 'todos';

// cuando le ponemos un tipo al estado inicial debemos colocar la interface asi como abajo
//  <estado inicial = validateFilter, Action tipo actionn>
const _filterReducer = createReducer<validateFilter, Action>(
  initialState,
  on(setFilter, (state, {filter}) => filter)
);
export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
