import { createAction, props } from '@ngrx/store';

// crear mi tipo que sea de tipo todos o completados o pendientes
export type validateFilter = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
  '[FILTER] set filter',
  props<{ filter: validateFilter }>()
);


