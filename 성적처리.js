const scoresList = [
    {id:1, name:"A", kor:90, eng:80, mat:80},
    {id:2, name:"B", kor:80, eng:80, mat:80},
    {id:3, name:"C", kor:70, eng:80, mat:80},
    {id:4, name:"D", kor:100, eng:100, mat:100},
    {id:5, name:"E", kor:90, eng:60, mat:80},
    {id:6, name:"F", kor:80, eng:70, mat:70}    
];

// 총점이랑, 평균을 map사용해서 칼럼 추가 total, avg
// 그냥 출력 - forEach
// 총점 - 평균 90이상만 출력
// 총점 내림차순 정렬, sort, forEach  

// 1. map을 사용하여 total(총점)과 avg(평균) 추가
console.log("---------총점과 평균 추가 ---------");
const newScoreList = scoresList.map(item => {
    const total = item.kor + item.eng + item.mat;
    const avg = parseFloat((total / 3).toFixed(2)); // 소수점 2자리까지 유지
    return { ...item, total, avg }; // 새로운 객체 반환
});
console.log(newScoreList);


console.log("----------총점이랑, 평균을 map사용해서 칼럼 추가---------");
const result = scoresList.map(item => {
    const total = item.kor + item.eng + item.mat;
    const avg = (total/3).toFixed(2);
    return {item, total, avg}
}); 
console.log(result);

// 그냥 출력 - forEach
console.log("----------그냥 출력---------");
result.forEach((item, index) => {
    console.log(item, index);
});

// 총점 - 평균 90이상만 출력 
console.log("----------평균 90이상만 출력---------");
avg = result.filter(item => parseInt(item.avg) >= 90)
    .forEach((item) => {
        console.log(item);
    });
// 총점 내림차순 정렬, sort, forEach 
console.log("----------내림차순 정렬---------");
result.sort((item1, item2) => {
    if(item1.total > item2.total) return -1;
    else if( item1.total < item2.total) return 1;
    else return 0;
}).forEach(item => console.log(item));
