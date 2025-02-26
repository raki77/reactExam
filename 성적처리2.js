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


result = scoresList.map(item=> {
    item["total"] = item["kor"] + item["eng"] + item["mat"];
    item["avg"] = (item["total"]/3).toFixed(2);
    return item;
});

result.forEach(element => {
    console.log(element);
});


// 총점 - 평균 90이상만 출력 
console.log("----------평균 90이상만 출력---------");
avg = result.filter(item => parseInt(item.avg) >= 90)
    .forEach((item) => {
        console.log(item);
    });


// 총점 내림차순 정렬, sort, forEach 
console.log("----------내림차순 정렬---------");
s = (item1, item2) => item2.total - item1.total;
result.sort(s).forEach(item => console.log(item));
