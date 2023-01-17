import Notion, {
  DatabaseProps,
  ParsedPage,
  ParsedPageWithBlocks,
} from "@notion-cms/client";
import { UUID } from "@notion-cms/types";

export type Duration =
  | "Short (0-15 min)"
  | "Medium (15-30 min)"
  | "Long (30+ min)";
export type HealthLevel = "Indulging" | "Comforting" | "Energising";
interface RecipeProps extends DatabaseProps {
  Name: string;
  "Health score": HealthLevel;
  "Preparation time (min)": Duration;
  "Cooking time (min)": Duration;
  Serves: number;
}
export interface Recipe extends ParsedPage<RecipeProps> {}
export interface RecipeWithBlocks extends ParsedPageWithBlocks<RecipeProps> {}
interface IngredientProps extends DatabaseProps {
  Name: string;
  Meat: boolean;
  Cheese: boolean;
  Category: string;
  Unit: UUID[];
}
export interface Ingredient extends ParsedPage<IngredientProps> {}
interface UnitProps extends DatabaseProps {
  Name: string;
  Symbol: string;
}
export interface Unit extends ParsedPage<UnitProps> {}
interface RecipeIngredientProps extends DatabaseProps {
  Quantity: number;
  Recipe: UUID[];
  Ingredient: UUID[];
}
export interface RecipeIngredient extends ParsedPage<RecipeIngredientProps> {}

export const notion = new Notion({ auth: process.env.NOTION_API_TOKEN });

const recipesCollectionId = "db2fb7ff-357a-4c40-a106-b2b33b1662b2";
const recipeIngredientsCollectionId = "679ede64-a61b-4200-8859-f28d6a63e89b";
const ingredientsCollectionId = "8687c0bd-9fe9-4690-9108-7a07bbc84e09";
const unitsCollectionId = "94990f72-24d6-4c36-a2ba-476694369380";

export const getRecipes = (): Promise<Recipe[]> =>
  notion.loadDatabase(recipesCollectionId, {});

export const getRecipe = (rid: UUID): Promise<RecipeWithBlocks> =>
  notion.loadPage(rid);

export const getIngredients = (): Promise<Ingredient[]> =>
  notion.loadDatabase(ingredientsCollectionId, {});

export const getUnits = (): Promise<Ingredient[]> =>
  notion.loadDatabase(unitsCollectionId, {});

export const getRecipeIngredients = (): Promise<RecipeIngredient[]> =>
  notion.loadDatabase(recipeIngredientsCollectionId, {});
