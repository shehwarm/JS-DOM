
async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Post Title:", data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getPost();
