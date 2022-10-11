function Decrypt4() {
    var userNumber,
    iDigit1, iDigit2, iDigit3, iDigit4, iDigit5, iDigit6, iDigit7,iDigit8,
    eDigit1, eDigit2, eDigit3, eDigit4, eDigit5, eDigit6, eDigit7, eDigit8;
    userNumber = window.prompt( "Enter the encrytped number: ", "0");
    iDigit1 = userNumber.substring(0, 1);
    iDigit2 = userNumber.substring(1, 2);
    iDigit3 = userNumber.substring(2, 3);
    iDigit4 = userNumber.substring(3, 4);
    iDigit5 = userNumber.substring(4, 5);
    iDigit6 = userNumber.substring(5, 6);
    iDigit7 = userNumber.substring(6, 7);
    iDigit8 = userNumber.substring(7, 8);
    eDigit1 = iDigit5;
    eDigit2 = iDigit3;
    eDigit3 = iDigit8;
    eDigit4 = iDigit7;
    eDigit5 = iDigit2;
    eDigit6 = iDigit1;
    eDigit7 = iDigit6;
    eDigit8 = iDigit4;

    window.alert("Encrypted digit1: " + iDigit1 + "\n Encrypted digit2: " + iDigit2
    + "\n Encrypted digit3: " + iDigit3 + "\n Encrypted digit4: " + iDigit4 + "\n Encrypted digit5: " + iDigit5 + "\n Encrypted digit6: "
    + iDigit6 + "\n Encrypted digit7: " + iDigit7 + "\n Encrypted digit8: " + iDigit8 +
    "\n Decrypted digit1: " + eDigit1 + "\n Decrypted digit2: " + eDigit2 + "\n Decrypted digit3: " + eDigit3 + "\n Decrypted digit4: " + eDigit4 +
    "\n Decrypted digit5: " + eDigit5 + "\n Decrypted digit6: " + eDigit6 + "\n Decrypted digit7: " + eDigit7 + "\n Decrypted digit8: " + eDigit8 +
    "\n Encrypted number: " + userNumber + "\n Decrypted number: " + eDigit1 + eDigit2 + eDigit3 + eDigit4 + eDigit5 + eDigit6 +
    eDigit7 + eDigit8);
    }
    