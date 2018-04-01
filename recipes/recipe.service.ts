import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe(
            'Pasta plate', 
            'just a dummy text m minima maiores fugit asperiores vel facere.', 
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', 
            [
                new Ingredient('cheese', 3),
                new Ingredient('Pasta', 1),
            ]
        ),

        new Recipe(
            'Burger king', 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, id reprehenderit neque nemo excepturi laborum natus modi quos laudantium minima maiores fugit asperiores vel facere ratione amet esse provident perspiciatis ipsa porro! Autem.', 
            'https://www.usfoods.com/etc/commerce/products/usfoods/92/85/9285840/image.img.jpg/cq_ck_1521129536417.jpg', 
            [
                new Ingredient('cheese', 1),
                new Ingredient('meat', 1),
                new Ingredient('lettus', 1),
                new Ingredient('tomato', 1),
            ]
        )
      ];

      constructor(private slService: ShoppingListService) {
      }
    

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}