// Delear and Output student information including lab session day
let studentID = "101485672";
let fullName = "Nathan Prince";
let labProfessor ="Azzad Kara";
let labSession = "Thursday";

document.write("<div style='color: blue;display:inline-flex; font-size: 10pt;position: fixed; bottom: 10px; right: 10px;'>")
document.write('<strong>My Lab Professors Name is:</strong>' + ' ' + labProfessor + '<br>');
document.write('<strong>My Name is:</strong>' + ' ' + fullName + '<br>');
document.write('<strong>My Student ID is:</strong>' + ' ' + studentID + '<br>');
document.write('<strong>My Lab Day is:</strong>' + ' ' + labSession + '<br>');


function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = " ";
    // Your code should start here
    if (num1 < num2) {
        _return = 1;
    } else if (num1 === num2) {
        _return = 0;
    } else {
        _return = 2;
    }


    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}

function part3(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (num1 < num2) {
    for (let i =num1; i <=num2; i++){
        _return +=i;
    }
} else if (num1 > num2) {
    for (let i =num1; i >= num2; i--) {
        _return += i;
    }
} else
    _return = (num1+num2)
    
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (array_index >= 0 && array_index < array.length){
        _return = true;
    }
    else {
       _return = false
    }



    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 ===0){
            _return += array[i];
        }
}

if(array.length === 0 || _return === '') {
    _return = 0;
}


    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


