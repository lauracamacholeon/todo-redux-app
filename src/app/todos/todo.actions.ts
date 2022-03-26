import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] crear todo',
  props<{ texto: string }>()
);
// para el check
export const toggleTodo = createAction(
  '[TODO] toggle todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] create todo',
  props<{ id: number; texto: string }>()
);

export const deleteTodo = createAction(
  '[TODO] delete todo',
  props<{ id: number }>()
);

// toggle all
export const toggleAll = createAction(
  '[TODO] toggle all', props<{ toggleFlag: boolean }>()
)

export const deleteCompleted = createAction(
  '[TODO] delete completed'
);