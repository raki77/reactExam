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


// 전통적인 for문 사용 안하겠다. 
word = ["school", "assembly", "survey", "desk", "drug", "computer", "notebook",
    "cobol", "java", "python", "president", "cloud", "rainbow"
];
// forEach - 매개변수가 2이고 반환값이 없는 함수의 주소만
// 매개변수로 받을 수 있다.
word.forEach((item, index) => {
    console.log(item, index);
});

console.log( "단어길이가 5글자 이상인것만");
wtemp = word.filter(item => item.length >= 5)
    .forEach((item) => {
        console.log(item);
    });
console.log(wtemp);

// map 함수 - 매개변수 2개 (배열요소, index) 값반환
// - 배열 데이터에, 연산을 줘서 값을 바꾸고자 할때
// 정수 => +,-,*,/
// 문자열 => 문자열 잘라내기, 대문자 변경, 소문자 변경, 문자열 길이 출력 하거나
// 각 요소에 10을 곱해서 반환한다.

// map 함수는 원본 데이터는 손대지 않는다. 새로운 배열 만들어서 출력한다.
// aa = a.map(item => item*10); 
aa = a.map((item, index) => item*10); 
console.log(aa);

w = word.map( item=> item.toUpperCase());
console.log(w);

w = word.sort();
console.log(w);

let personList = [
    {name:"홍길동", age:23},
    {name:"임꺽정", age:33},
    {name:"장길산", age:45},
    {name:"강감찬", age:27},
    {name:"윤관", age:64},
    {name:"서희", age:49},
    {name:"이순신", age:38},
    {name:"권율", age:18}    
];

// 이름으로 검색 - item: json객체
person = personList.filter( item => item.name == "강감찬1");
if(person.length == 0)
    console.log( "Answer : Data Not found." );
else 
    console.log( person );


// 정렬 -1, 1, 0 
personList.sort((item1, item2) => {
    if(item1.name > item2.name) return 1;
    else if( item1.name < item2.name) return -1;
    else return 0;
}).forEach(item => console.log(item));


const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
console.log(elements.join(","));
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"




const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]