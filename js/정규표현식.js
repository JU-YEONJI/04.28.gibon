
//정규표현식 -> 문자검색, 대체, 추출
// 생성자객체   new RegExp('검색','옵션')
// 리터널방식   /검색/옵션
//                  g -> 대 소문자구분
//                  i -> 대소문자 구분하지 않는다
//                  m -> 멀티라인 enter,shift+enter tab


let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

// 생성자 방식
// const reEx = new RegExp('the','g');
const reEx = new RegExp('the','gi');
console.log(str.match(reEx));


// 리터널 방식
const sample = /the/gi;
console.log(str.match(sample));
