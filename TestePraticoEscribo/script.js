function sumOfMultiplesOf3or5(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    return sum;

  }

  function calculateSum() {

    const inputNumber = document.getElementById('number');
    const resultElement = document.getElementById('result');
    const number = parseFloat(inputNumber.value);

        if (!isNaN(number) && Number.isInteger(number) && number > 0) {
            const result = sumOfMultiplesOf3or5(number);
            resultElement.textContent = `O somatório dos números divisíveis por 3 ou 5 até ${number} é ${result}.`;
            inputNumber.value = '';
        } else {
            alert('Por favor, insira um número inteiro positivo válido');
            inputNumber.value = '';
        }

  }