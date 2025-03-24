async function TODO(id) {
  const apiURL = `https://dummyjson.com/todos/${id}`;
  try {
      const response = await fetch(apiURL);
      
      if (!response.ok) {
          throw new Error("HTTP error");
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching:", error.message);
  }
}

TODO(0)
  .then((value) => {
    if (value) {
      console.log("The data is here: ", value);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
