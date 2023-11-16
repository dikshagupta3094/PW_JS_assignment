async function multipleRequest(){
    try {
        let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let response1Data = await response1.json()
        let response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        let response2Data = await response2.json();
        const getCombined = {
            todo : response1Data,
            post: response2Data
        };
        console.log(getCombined);
    } catch (error) {
         console.log(error);
    }
}

multipleRequest();