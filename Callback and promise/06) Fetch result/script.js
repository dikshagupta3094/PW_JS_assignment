async function fetchAsyn() {
  try {
    let p = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let response = await p.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchAsyn();


//A synchronous callback function is executed in the order it is defined, while an asynchronous callback function is executed after all synchronous code has been completed.
