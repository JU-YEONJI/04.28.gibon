
// test    정규식.text(문자열)   -> 일치여부 -> true, false
// match   문자열.match(정규식)  -> 일치하는 문자 -> 배열추출
// replace 문자열.replace('표현식','대체문자')

//re -> see 대소문자 상관없이
// re1 -> naber 대소문자 상관없이
// re2 -> gmail 대소문자 상관없이


let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

const re = /see/gi;
const re1 = /naber/gi;
const re2 = /gmail/gi;
const re3 = /naver/gi;

// match()
console.log(str.match(re))
console.log(str.match(re1))
console.log(str.match(re2))

// test
console.log(re1.test(str));
console.log(re2.test(str));
console.log(re3.test(str));

// 출력문 바꾸기
console.log(str.replace(re3,'gmail'))
console.log(str)
// 원본은 안바뀌는데 그때그때 상태의 수정문은 출력된다

// const re = new RegExp re('see','li')
// const re1 = new RegExp re1('','')