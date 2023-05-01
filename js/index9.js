let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

console.log(str.match(/\w/g))
console.log(str.match(/\b/g))
console.log(str.match(/\d/g))
console.log(str.match(/\b\w{1,}/))
const num = `             the   wold   hello   !`
console.log(num.match(/\s/g));
console.log(num.replace(/\s/g,''));

const sub = 'abc@gmail.com';
console.log(sub.match(/(?<=@).{1,}/g))
console.log(sub.match(/.{1,}(?=@)/g))