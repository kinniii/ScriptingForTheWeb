function palindrome() {
    var firstNum, numPal;
    firstNum = window.prompt('Enter a 5 Digit Number:','0');
    numPal = parseInt(firstNum);
    /* Not Sure if over doing it but I chose to put my numbers into
    an array to make it easy to confirm there are 5 digits in the
    entered number.
    */
    numsArr = Array.from(String(numPal), Number);
    // I count the array length to confirm the entered number is 5 digits
    arrLen = numsArr.length;
    if(arrLen != 5){
        // If it isn't return to the function
        palindrome();
    } else {
        // Else we check if the number is a palindrome
        if(numsArr[0] == numsArr[4]){
            if(numsArr[1] == numsArr[3]){
                window.alert('The Number IS a Palindrome');
            } else {
                window.alert('The Number is NOT a Palindrome');
            }
        } else {
            window.alert('The Number is NOT a Palindrome');
        }
    }
}
