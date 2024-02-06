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
