const welcomeInput = document.querySelector('#name-input');
const welcomeOutput = document.querySelector('#name-output');

 welcomeInput.addEventListener('input', () => {
    const trimValue = welcomeInput.value.trim();
    
    if (trimValue === '') {
      welcomeOutput.textContent = 'Anonymous';
    } else {
      welcomeOutput.textContent = trimValue;
    }
  });