// const helloButton = document.getElementById('helloButton');
//
// helloButton.addEventListener('click', (event) => {
//     alert('Hello World!');
// })
// //1
//
//
// // let randomNumber = Math.floor(Math.random() * 100) + 1;
// const number = 12;
//
// function checkGuess() {
//     let userGuess = document.getElementById('guessField').value;
//     let userMessage = '';
//
//     if (userGuess == number) {
//         userMessage = 'Вгадали';
//     } else if (userGuess < number) {
//         userMessage = 'Не вгадали';
//     } else {
//         userMessage = 'Не вгадали';
//     }
//     document.getElementById('guessResult').innerText = userMessage;
// }
//2




//3



const applyCallbackToEachElement = (arr, callback) => {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i]));
    }
    return resultArray;
}


const arr = [1, 2, 3, 4, 5];


const squareCallback = (num) => {
    return num * num;
};

// Застосування функції
const result = applyCallbackToEachElement(arr, squareCallback);

console.log(result);
//4


const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
//5