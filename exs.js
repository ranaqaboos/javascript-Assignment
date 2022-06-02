const operator =prompt('Enter operator +,-,/,* :')
let n1 =parseInt(prompt('Enter the number frist :'));
let n2 =parseInt(prompt('Enter the number sacend :'));
let result;
if (operator === '+'){
    result = n1 +n2;
}
 else if (operator === '-'){
    result = n1 - n2;
}
else if (operator === '/'){
    result = n1 / n2;
}
else if (operator === '*'){
    result = n1 * n2;
}
console.log('the rusult of opertor:',result);

