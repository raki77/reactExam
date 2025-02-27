import React, { Component, useState } from 'react'; 

function Calculator() {    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [result, setResult] = useState(0);
    const xChange = (e)=> { setX(e.target.value);}
    const yChange = (e)=> { setY(e.target.value);}
    const add = ()=> { setResult(parseInt(x) + parseInt(y)) }
    const minus = ()=> { setResult(parseInt(x) - parseInt(y)) }
    const mul = ()=> { setResult(parseInt(x) * parseInt(y)) }
    const divide = ()=> { setResult(parseInt(x) / parseInt(y)) }
    return (
        <div>
            x : <input type="text" onChange={xChange}/><br/>
            y : <input type="text" onChange={yChange}/><br/>
            결과 : {result}<br/>
            <button type="button" onClick={add}>더하기</button>
            <button type="button" onClick={minus}>빼기</button>
            <button type="button" onClick={mul}>곱셈</button>
            <button type="button" onClick={divide}>나누기</button>
        </div>
    );    
} 
export default Calculator;