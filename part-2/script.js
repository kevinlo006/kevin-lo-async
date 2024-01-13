//original
    // const fetchPromise = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    //   );
    
    //   console.log(fetchPromise);
    
    //   fetchPromise.then((response) => {
    //     console.log(`Received response: ${response.status}`);
    //   });
    
    //   console.log("Started request…");
//will log everything before things start and finish in the code 


//re written code using promises
    //   const fetchPromise = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    //   );
    
    //   fetchPromise.then((response) => {
    //     const jsonPromise = response.json();
    //     jsonPromise.then((data) => {
    //       console.log(data[0].name);
    //     });
    //   });
//will log baked beans 


//chaining promises using .then()
    // const fetchPromise = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    // );
    
    // fetchPromise
    //     .then((response) => response.json())
    //     .then((data) => {
    //     console.log(data[0].name);
    //     });
//will log baked beans


//catching errors in promises
    const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    fetchPromise
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });
//will reject and call the catch command 


//combining multiple promises with Promise.all
// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
//   const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
//   );
//   const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
//   );
  
//   Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//       for (const response of responses) {
//         console.log(`${response.url}: ${response.status}`);
//       }
//     })
//     .catch((error) => {
//       console.error(`Failed to fetch: ${error}`);
//     });
//will fulfill and show the urls and return the status 


//combiing multiple promises but fails due to bad url 
    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    );
    const fetchPromise3 = fetch(
        "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );
    
    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
        })
        .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
        });
//will reject and call the catch command saying failed to fetch    


//using the "async" word for a synchronous function to turn it into an async function 
    async function fetchProducts() {
        try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[0].name);
        } catch (error) {
        console.error(`Could not get products: ${error}`);
        }
    }
    
    fetchProducts();

  