
function delayValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 1000);
  });
}

async function processValues() {
  try {
    let num = await delayValue();
    console.log("First:", num);

    num = num * 2;
    console.log("Second:", num);

    num = num * 3;
    console.log("Third:", num);
  } catch (error) {
    console.error("Error:", error);
  }
}

processValues();
