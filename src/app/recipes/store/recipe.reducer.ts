import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
// import * as RecipesActions from '../store/recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

const _recipeReducer = createReducer(initialState);

export function recipeReducer(state: State, action: Action) {
  return _recipeReducer(state, action);
}
