// 화살표함수.js
// 함수와 함수표현식 그리고 화살표함수 (람다)

function add1(x, y) {
    return x + y;
}
console.log( add1(3,4));

// 함수 표현식- 함수 이름이 존재하지 않음
// 잠깐 쓰고 버릴 수가 있다.
add2 = function(x, y) {
    return x + y;
}
console.log( add2(3,4));


add3 = (x,y) => x+y;
console.log(add3(3,4));


a = [1,2,3,4,5,6,7,8,9,10];
// filter() 데이터 검색, 함수를 매개변수로 받는다.
// 배열의 모든 요소마다 함수를 호출해 준다.
// 이함수의 결과가 트루이면,
// 그결과만 모아둔다. 
// 파라미터 하나, 반환값은 true or false
// 이어야 한다.
even = a.filter( x=>x%2==0);
console.log(even);

function isOdd(x) {
    return x%2 == 1;
}
odds = a.filter(isOdd);
console.log(odds);


