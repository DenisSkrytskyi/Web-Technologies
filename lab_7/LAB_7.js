// 1. Функція, яка перевіряє чи є аргумент числом і визначає чи є число парним або непарним.
function checkNumber(num) {
    if (typeof num === 'number') {
        return num % 2 === 0 ? 'парне' : 'непарне';
    } else {
        return '';
    }
}

// 2. Функція, яка знаходить перші п'ять простих чисел і повертає їхню суму.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfFirstFivePrimes() {
    let primes = [];
    let num = 2; // почнемо з першого простого числа

    while (primes.length < 5) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    // обчислюємо суму простих чисел
    return primes.reduce((sum, prime) => sum + prime, 0);
}

// 3. Функція, яка обчислює суму ряду чисел виду 1 + 11 + 111 + ... для заданого n.
function sumSeries(n) {
    let sum = 0;
    let currentNumber = 0;

    for (let i = 1; i <= n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }

    return sum;
}

// Приклади використання:
console.log(checkNumber(4)); // парне
console.log(checkNumber(7)); // непарне
console.log(checkNumber('test')); // ""
console.log(sumOfFirstFivePrimes()); // 28
console.log(sumSeries(5)); // 12345