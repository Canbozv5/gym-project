// BMI js (farklı çünkü domcontentloaded çakışıyor diğer js ile)

document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const pointer = document.getElementById("bmi-pointer");

  if (!heightInput || !weightInput || !pointer) {
    console.warn("There is has to be correct value for the INDEX.");
    return;
  }

  function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    if (!height || !weight || height <= 0 || weight <= 0) {
      pointer.style.left = "50%";
      return;
    }
    const bmi = weight / (height / 100) ** 2;
    let leftPercent = 0;
    if (bmi < 18.5) {
      leftPercent = 19;
    } else if (bmi < 24.9) {
      leftPercent = 34;
    } else if (bmi < 29.9) {
      leftPercent = 50;
    } else if (bmi < 34.9) {
      leftPercent = 64;
    } else {
      leftPercent = 79;
    }
    pointer.style.left = `${leftPercent}%`;
  }

  heightInput.addEventListener("input", calculateBMI);
  weightInput.addEventListener("input", calculateBMI);
});
