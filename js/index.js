
let str2 = 'aaa@daum.net';
const sam1 = /daum.net/gi;

console.log(str2.replace(sam1,'gmail.com'));
console.log(str2);
let str3 = str2.replace(sam1,'gmail.com')
str2 = str3;
console.log(str2);




let name =`
aaa@naver.com
abc@naver.com
abc@naver.com
`
let str4 = /naver/gi;
let num = name.replace(str4,'gmail');
console.log(num);
name1 = num;

// const num = /naver/gi;
// console.log(str.replace.(str2,'gmail'));