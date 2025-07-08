function getBirthstone() {
  // we're gonna use the readFile method to read from the data.json file
  // this method takes in 3 parameters:
  // 1. The file we want to read
  // 2. the way the file is encoded
  // 3. the function we run once we've read the file
  fs.readFile("./data.json", "utf8", (err, data) => {
    // console.log(data);
    const birthstoneData = JSON.parse(data);

    // tell the user their birthstone
    if (birthstoneData[month]) {
      console.log(`The birthstone for ${month} is ${birthstoneData[month]}`);
    } else {
      console.log("Invalid month. Please enter a valid month!");
    }
  });
}

// run my function
getBirthstone();
