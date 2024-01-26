import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../user.model';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

const _authReducer = createReducer(initialState);

export function authReducer(state: State, action: Action) {
  return _authReducer(state, action);
}

