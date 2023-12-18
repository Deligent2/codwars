// function checkBrackets(str) {
//     let stack = [];

//     for (let char of str) {
//         if (char === '{') {
//             stack.push(char);
//         } else if (char === '}') {
//             if (stack.length === 0) {
//                 return "}";
//             }
//             stack.pop();
//         }
//     }

//     if (stack.length === 0) {
//         return "{}";
//     } else {
//         return "{";
//     }
// }

// let inputString = "{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{";
// console.log(checkBrackets(inputString));

// function replaceMiddleWithLetter(text, letter) {
//     if (text.length % 2 === 0) {
//         const middleIndex = text.length / 2;
//         const newText = text.substring(0, middleIndex - 1) + letter + text.substring(middleIndex + 1);
//         return newText;
//     } else {
//         const middleIndex = Math.floor(text.length / 2);
//         const newText = text.substring(0, middleIndex) + letter + text.substring(middleIndex + 1);
//         return newText;
//     }
// }

// let originalText = "...A.....................................B.....";
// let newText = replaceMiddleWithLetter(originalText, "C");
// console.log(newText);