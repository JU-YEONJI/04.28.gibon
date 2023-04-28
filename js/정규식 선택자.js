// 일치 문자 . -> /. ex).css .img
// ^ -> 시작이 일치
// $ -> 줄의 끝이 일치     a$         
// . -> 임의의 문자와 일치
//../2
// .../3
// a|b -> a 또는 b와 일치
// b?  -> b가 있어도 되고 없어도 되고

let str =`
010-1234-5678
0102
0103
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
http://www.naver.com
https://www.naver.com
htp://www.naver.com
h2p://www.naver.com
aa.css
aaa.scss
`

// 01시작 -> 멀티라인
// 010시작 -> 멀티라인
// 01다음에는 아무거나 1개 -> 멀티라인

// 아무거나 -> ?
// h?p     h??ps<'s'는 있어도 그만 없어도 그만
// h??p    

console.log(str.match(/^01/gm));
console.log(str.match(/^010/gm));
console.log(str.match(/^01./gm));
console.log(str.match(/^010?/gm));


console.log(str.match(/h.p/gm));
const re5= /h..p/gm;
console.log(str.match(re5));
const re6= /h..ps?/gm;
console.log(str.match(re6));
const re7= /f....../gm;
console.log(str.match(re7));

console.log(str.match(/.css/gm));
console.log(str.match(/.?css/gm));
console.log(str.match(/.s?css/gm));

console.log(str.match(/for|to|abc/gm));
console.log(str.match(/...@naver.com|...@gmail.com/gm));


// ^ $ . | ?