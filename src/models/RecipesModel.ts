export default class RecipesModel {
  id: string;
  name: string;
  recipe: string;

  constructor(name: string, recipe: string) {
    this.id = Math.random().toString();
    this.name = name;
    this.recipe = recipe;
  }
}
