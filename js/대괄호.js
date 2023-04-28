//{숫자} 숫자만큼 일치
//{숫자,} 숫자 이상 일치
//{숫자,숫자} 숫자에서 숫자 사이 일치

//[abc] a또는 b 또는 c
//[a~c] a에서 c까지
//[A~C] A에서 C까지
//[0~3] 0에서 3까지
//[가~난] 가~에서 난까지

let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
aaaaaaa
aaaaa
aa
tro
tr
tros
가나다라마바사
가공갗난하다타핳
`

console.log(str.match(/a{2}/g));
console.log(str.match(/aaa{3,}/g));
console.log(str.match(/a{2,4}/g));

console.log(str.match(/[tro]/g));
console.log(str.match(/tro./g));
// . -> tro뒤에 있는 것 중요 
console.log(str.match(/tro?/g));
// ? -> 맨 뒤의 o는 없어도 되고 있어도 되고 
console.log(str.match(/tro$/gm));
// $ -> 줄의 끝 일치 m -> 멀티 라인의 약자

console.log(str.match(/[1-3]/g));
console.log(str.match(/[a-c]/g));
console.log(str.match(/[가-다]/g));

