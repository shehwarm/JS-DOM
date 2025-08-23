let url = "https://catfact.ninja/fact";

async function getCatFact() {
  try {
    let res = await axios.get(url);
    console.log("Cat Fact:", res.data.fact);
  } catch (e) {
    console.log("Error:", e);
  }
}

getCatFact();
