function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }
  
    let bmr;
  
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      alert('Please select a valid gender.');
      return;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMR is ${bmr.toFixed(2)} calories per day.`;
  }
  