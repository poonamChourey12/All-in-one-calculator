function add() {
    performOperation('add');
  }
  
  function subtract() {
    performOperation('subtract');
  }
  
  function multiply() {
    performOperation('multiply');
  }
  
  function divide() {
    performOperation('divide');
  }
  
  function performOperation(operation) {
    const real1 = parseFloat(document.getElementById('real1').value) || 0;
    const imag1 = parseFloat(document.getElementById('imag1').value) || 0;
    const real2 = parseFloat(document.getElementById('real2').value) || 0;
    const imag2 = parseFloat(document.getElementById('imag2').value) || 0;
  
    let resultReal, resultImag;
  
    switch (operation) {
      case 'add':
        resultReal = real1 + real2;
        resultImag = imag1 + imag2;
        break;
      case 'subtract':
        resultReal = real1 - real2;
        resultImag = imag1 - imag2;
        break;
      case 'multiply':
        resultReal = real1 * real2 - imag1 * imag2;
        resultImag = real1 * imag2 + imag1 * real2;
        break;
      case 'divide':
        const denominator = real2 ** 2 + imag2 ** 2;
        resultReal = (real1 * real2 + imag1 * imag2) / denominator;
        resultImag = (imag1 * real2 - real1 * imag2) / denominator;
        break;
      default:
        alert('Invalid operation.');
        return;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Result: ${resultReal.toFixed(2)} + ${resultImag.toFixed(2)}i`;
  }
  