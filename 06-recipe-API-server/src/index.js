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
  const recipeIndex = req.params.index;
  const recipe = await getOneRecipe(recipeIndex);
  res.send(JSON.stringify(recipe));

  console.log(`The user is trying to get the recipe at index ${recipeIndex}`);
});

// TODO: API Endpoint for handling GET requests to /delete-one-recipe/:index

// TODO: API Endpoint for handling GET requests to /update-one-recipe-name/:index/:newName
