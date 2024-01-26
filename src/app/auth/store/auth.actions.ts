import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{
    email: string;
    password: string;
  }>()
);
