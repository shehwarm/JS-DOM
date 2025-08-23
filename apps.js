let url = "https://jsonplaceholder.typicode.com/posts";

async function createPost() {
  try {
    let res = await axios.post(url, {
      title: "Hello World",
      body: "This is a test post",
      userId: 1
    });
    console.log("Post Created:", res.data);
  } catch (e) {
    console.log("Error:", e);
  }
}

createPost();
