import React, { Component } from 'react';
import { useState, useEffect } from 'react';

// 직접 통신 어려움
// 먼저 데이터 만들어서 테스트 하기
// json 배열
const heroList = [
    {id:1, name:"이순신", desc:"임진왜란을 승리로 이끔"},
    {id:2, name:"세종대왕", desc:"한글을 만드심"},
    {id:3, name:"강감찬", desc:"귀주대첩"},
    {id:4, name:"을지문덕", desc:"살수대첩"},
    {id:5, name:"서희", desc:"강동6주 탈환"}
];

function Hero_list() {    
    // 배열 저장 []
    const [hero, setHero] = useState([]); 
    // 초기값, useEffect : 컴포넌트가 마운트될 때, 업데이트될 때, 마운트 해제될 때
    useEffect(()=>{
        setHero(heroList);
        //맨처음에 해야할 일
    }, []); 
    return (
        <div>
        <h2>영웅 목록</h2>
            <ul>
                {
                    hero.map( item => {
                        return (
                            <li key={item.id}>
                                {item.name} {item.desc}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );    
}

export default Hero_list;