new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then(num => {
    console.log("First then:", num); 
    return num * 2; // Passes to next then
  })
  .then(num => {
    console.log("Second then:", num); 
    return num * 3;
  })
  .then(num => {
    console.log("Third then:", num);
  })
  .catch(error => {
    console.error("Error:", error);
  });