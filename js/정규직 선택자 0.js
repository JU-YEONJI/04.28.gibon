// 일치 문자 . -> /. ex).css .img
// ^ -> 시작이 일치
// $ -> 줄의 끝이 일치     a$         
// . -> 임의의 문자와 일치
//../2
// .../3
// a:b -> a 또는 b와 일치
// b?  -> b가 있어도 되고 없어도 되고


let str =`
010-1234-5678
020
0a0
0%0
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg.
aaa@naver.com
abc@gmail.com
.`

const re2 = /\.$/gm;
console.log(str.match(re2));


const re3 = /8$/gm;
console.log(str.match(re3));


const re4 = /0.0/g;
console.log(str.match(re4));