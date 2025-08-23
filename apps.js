let url = "https://catfact.ninja/fact";

axios.get(url)
  .then(res => {
    console.log("Cat Fact:", res.data.fact);
  })
  .catch(err => {
    console.log("Error:", err);
  });
