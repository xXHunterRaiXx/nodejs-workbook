// Write your Recipe CRUD App code here!

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------
async function getAllRecipes() {
  const recipesData = await fs.readFile("../data.json", "utf8", (err, data) => {
    return data;
  });
  return JSON.parse(recipesData);

  //   const data = await fs.readFile("../data.json", "utf8");
  //   return JSON.parse(data);
}

async function getOneRecipe(index) {
  const data = await fs.readFile("../data.json", "utf8");
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  const parsedRecipe = parsedData[index];
  return parsedRecipe;
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// TODO: API Endpoint for handling GET requests to /get-all-recipes

app.get("/get-all-recipes", async (req, res) => {
  const recipes = await getAllRecipes();
  res.send(JSON.stringify(recipes));
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index

app.get("/get-one-recipe/:index", async (req, res) => {
  // get request // endpoint is /get-one-recipe/:index
  //(req, res) request respond
  const recipeIndex = req.params.index;
  //verible recipeIndex
  //request
  const recipe = await getOneRecipe(recipeIndex);
  //verible recipe tells us to wait for getOneRecipe helper function to be called to get the recipeIndex
  res.send(JSON.stringify(recipe));
  //respond and send the recipe to json to a string
  console.log(`The user is trying to get the recipe at index ${recipeIndex}`);
  //console log it
});
