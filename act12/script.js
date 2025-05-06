function generate() {
    const count = parseInt(document.getElementById("letterCount").value);
    const alphabetArray = [];
   
    for (let i = 0; i < count && i < 26; i++) {
      alphabetArray.push(String.fromCharCode(65 + i));
    }
   
    document.getElementById("result").textContent =
      `Generated Array: [ ${alphabetArray.join(", ")} ]`;
  }
 
  function clear() {
    document.getElementById("result").textContent = "Generated Array: []";
  }