const Base_url="https://jsonplaceholder.typicode.com";

// async function to fetch post

async function fetchPost() {

    try{
        //   await the response from the fetch call
           const response=await fetch(`${Base_url}/posts`);

           //check if the response code is not ok

           if(!response.ok){
            throw new Error(`HTTP error ! Status : ${response.status}`);
           }

        //    response to json format

        const posts=await response.json();

        // display the fetched data
        console.log('fetched posts:',posts);
        return posts;  //return the data if needed
              
    } catch(error){
                 console.error("error fetching posts:", error.message);
    }
}


fetchPost();