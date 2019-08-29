// if (2 *4 ==7) {
//     console.log("True");
// } else {
//     console.log("False");
// }

let num = 50;

// if (num < 60) {
//     console.log("Wrong!");
// } else if (num > 20) {
//     console.log("Too much");
// } else {
//     console.log("True");
// }

// (num < 60) ? console.log("True") : console.log("False");

switch (num) {
    case num < 49: 
        console.log("Wrong!");
        break;
    case num > 100:
        console.log("Too much");
        break;
    case num > 80:
        console.log("Too too much");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("is something wrong");
        break;    
}