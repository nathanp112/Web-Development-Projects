let userName = prompt('Enter your Name Please')

let studentId = prompt('Enter your Student Number please')

let inputNumber;
let validInput = false;

while(!validInput) {
    inputNumber = prompt('Please enter a number:1 and 9')

    if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= 9) {
    validInput = true;
    inputNumber = parseInt(inputNumber);

     let triangleOutput = '';
    for (let i = 1; i <= inputNumber; i++) {
        for (let j = 1; j <= i; j++) {
            triangleOutput += j + ' ';
        }
        triangleOutput += '<br>';
    }
    document.write(triangleOutput);
    document.write('<strong>My Name is:</strong>' + ' ' + userName + '<br>');
    document.write('<strong>My Student ID is:</strong>' + ' ' + studentId + '<br>');
} else {
    alert("Invalid Input! Please enter a number between 1 and 9.");
}
}
console.log(studentId)
console.log(userName)
console.log(inputNumber)


