import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const addRecipe = createAction(
  '[Recipe] Add Recipe',
  props<{
    recipe: Recipe;
  }>()
);

export const fetchRecipes = createAction('[Recipe] Fetch Recipes');

export const storeRecipes = createAction('[Recipe] Store Recipes');

export const setRecipes = createAction(
  '[Recipe] Set Recipes',
  props<{
    recipes: Recipe[];
  }>()
);
