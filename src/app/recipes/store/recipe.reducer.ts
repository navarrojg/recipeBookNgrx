import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipesActions from '../store/recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

const _recipeReducer = createReducer(
  initialState,
  on(RecipesActions.setRecipes, (state, action) => ({
    ...state,
    recipes: [...action.recipes],
  }))
);

export function recipeReducer(state: State, action: Action) {
  return _recipeReducer(state, action);
}
