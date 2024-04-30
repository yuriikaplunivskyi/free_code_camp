const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanConvert = (decimalNumber) => {
  const map = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
  };
  let num = decimalNumber;
  
  return Object
      .entries(map)
      .reduce( (result, [letter, n]) => {
        result += letter
          .repeat(
            Math.floor(num/ n)
          );
        num %= n;
        return result;
      }, '')
};

const checkUserInput = () => {
  const decimalNumber = parseInt(inputNumber.value);

  if (isNaN(decimalNumber)){
    result.innerText = "Please enter a valid number";
  } else if (decimalNumber < 1 ){
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (decimalNumber >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = romanConvert(decimalNumber);
    inputNumber.value = "";
  }
};

convertBtn.addEventListener("click",() =>{
  checkUserInput();
  inputNumber.value = '';
} );

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
