# Web Server Codealong

### Introduction

This codealong is for a book API that will use CRUD operations to manipulate the books in a JSON file. The `data.json` file already exists.

Your job will be to create a JavaScript file (in the `src` directory) to run as a web server, handling incoming requests, accessing and manipulating the JSON file, and responding according to the specifications below.

##### Reading All Books

Respond with the JSON of all books from the data file.

###### Example Request

GET `/read-books`

###### Expected Response

This should return an array of all the responses.

##### Reading One Book

Respond with the JSON of the book at index `id`. This is a pure index in the array—there is **no `id` field** in the book objects.

###### Example Request

GET `/read-book/2`

###### Example Response

```json
    {
        "title": "The Great Gatsby",
        "text": "A tale of love, obsession, and betrayal set in the Jazz Age, the novel explores the life of Jay Gatsby and his attempt to win back his lost love, Daisy Buchanan."
    }
```

##### Deleting One Book

Delete the book from the data file at index `id`. This is a pure index in the array—there is **no `id` field** in the book objects.

###### Example Request

GET `/delete-book/1`

###### Example Response

Arbitrary. But they should respond with _something_, or the server may cause a bug!.

This solution uses, "Successfully deleted book.".

#### Steps

- We will start with the import statements
- Then, we will create our app and add the express code needed to started listening on our server
- Then, we will create the routes that we need to handle the different requests that will come from the frontend.
- We will then access our data from our JSON file (this will later be the database), and return the data to our frontend. 

#### Samples

```javascript
app.get("/", (req, res) => {
  const someData = { name: "Bubbles", color: "blue" };
  res.send(someData);
});
```
```javascript
app.get("/", (req, res) => {
  const someData = { name: "Bubbles", color: "blue" };
  const someDataButInJsonFormat = JSON.stringify(someData, null, 2);
  res.send(someDataButInJsonFormat);
});
```