function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
      document.getElementById('result').textContent = 'Please enter valid height and weight.';
      return;
  }

  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) {
      category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
  } else {
      category = 'Obesity';
  }

  document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}, which falls into the category: ${category}.`;
}
