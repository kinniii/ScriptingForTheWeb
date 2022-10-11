function Encrypt4() {
    var userNumber,
    iDigit1, iDigit2, iDigit3, iDigit4, iDigit5, iDigit6, iDigit7,iDigit8,
    eDigit1, eDigit2, eDigit3, eDigit4, eDigit5, eDigit6, eDigit7, eDigit8;
    userNumber = window.prompt( "Enter an 8 digit number: ", "0");
    iDigit1 = userNumber.substring(0, 1);
    iDigit2 = userNumber.substring(1, 2);
    iDigit3 = userNumber.substring(2, 3);
    iDigit4 = userNumber.substring(3, 4);
    iDigit5 = userNumber.substring(4, 5);
    iDigit6 = userNumber.substring(5, 6);
    iDigit7 = userNumber.substring(6, 7);
    iDigit8 = userNumber.substring(7, 8);
    eDigit5 = iDigit1;
    eDigit3 = iDigit2;
    eDigit8 = iDigit3;
    eDigit7 = iDigit4;
    eDigit2 = iDigit5;
    eDigit1 = iDigit6;
    eDigit6 = iDigit7;
    eDigit4 = iDigit8;

    window.alert("Input digit1: " + iDigit1 + "\n Input digit2: " + iDigit2
    + "\n Input digit3: " + iDigit3 + "\n Input digit4: " + iDigit4 + "\n Input digit5: " + iDigit5 + "\n Input digit6: "
    + iDigit6 + "\n Input digit7: " + iDigit7 + "\n Input digit8: " + iDigit8 +
    "\n Encrypted digit1: " + eDigit1 + "\n Encrypted digit2: " + eDigit2 + "\n Encrypted digit3: " + eDigit3 + "\n Encrypted digit4: " + eDigit4 +
    "\n Encrypted digit5: " + eDigit5 + "\n Encrypted digit6: " + eDigit6 + "\n Encrypted digit7: " + eDigit7 + "\n Encrypted digit8: " + eDigit8 +
    "\n Original number: " + userNumber + "\n Encrypted number: " + eDigit1 + eDigit2 + eDigit3 + eDigit4 + eDigit5 + eDigit6 +
    eDigit7 + eDigit8);
    }
    