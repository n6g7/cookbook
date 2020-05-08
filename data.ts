import Notion, { LiteCollectionItem } from "@notion-cms/client";
import { UUID } from "@notion-cms/types";

export type Duration =
  | "Short (0-15 min)"
  | "Medium (15-30 min)"
  | "Long (30+ min)";
export type HealthLevel = "Indulging" | "Comforting" | "Energising";
interface RecipeProps {
  Name: string;
  "Health score": HealthLevel;
  "Preparation time (min)": Duration;
  "Cooking time (min)": Duration;
  Serves: number;
}
export interface Recipe extends LiteCollectionItem<RecipeProps> {}
interface IngredientProps {
  Name: string;
  Meat: boolean;
  Cheese: boolean;
  Category: string;
  Unit: UUID[];
}
export interface Ingredient extends LiteCollectionItem<IngredientProps> {}
interface UnitProps {
  Name: string;
  Symbol: string;
}
export interface Unit extends LiteCollectionItem<UnitProps> {}
interface RecipeIngredientProps {
  Quantity: number;
  Recipe: UUID[];
  Ingredient: UUID[];
}
export interface RecipeIngredient
  extends LiteCollectionItem<RecipeIngredientProps> {}

export const notion = new Notion("");

const recipesCollectionId = "4a601862-3c10-45d8-89bd-f2005da64e2c";
const recipeIngredientsCollectionId = "abbd00ef-9f84-4d36-a3cd-75bff3f90c0d";
const ingredientsCollectionId = "b14c1273-456d-4baf-93d6-5e7333a5be8e";
const unitsCollectionId = "3af8b8bf-eb8e-493b-871f-afe19bcd92d0";

export const getRecipes = (): Promise<Recipe[]> =>
  notion.loadCollection(recipesCollectionId);

export const getRecipe = (rid: UUID): Promise<Recipe> =>
  notion.loadCollectionItem(recipesCollectionId, ({ id }) => id === rid);

export const getIngredients = (): Promise<Ingredient[]> =>
  notion.loadCollection(ingredientsCollectionId);

export const getUnits = (): Promise<Ingredient[]> =>
  notion.loadCollection(unitsCollectionId);

export const getRecipeIngredients = (): Promise<RecipeIngredient[]> =>
  notion.loadCollection(recipeIngredientsCollectionId);
