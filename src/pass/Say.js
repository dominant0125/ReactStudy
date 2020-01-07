import React, {useState} from 'react';

// useState -> param = state 초기값(object 형태 아니어도 가능)
const Say = () => {
    const [message, setMessage] = useState('');
    // 첫 번째 원소 (message) : state
    // 두 번째 원수 (setMessage) : setter
    // useState()의 parameter : initial value
    const onClickEnter = () => setMessage("Hi");
    const onClickLeave = () => setMessage('Bye');

    const [color, setColor] = useState('Black');

    return (
        <div>
            <button onClick = {onClickEnter}>Enter</button>
            <button onClick = {onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>

            <button onClick = {()=>setColor('Red')}>Red</button>
            <button onClick = {()=>setColor('Blue')}>Blue</button>
            <button onClick = {()=>setColor('Green')}>Green</button>
        </div>
    )
};

/*
state 사용 시 state 값 변경이 필요한 경우 직접 state를 조작해선 안되고,
1. setState
2. useState 의 setter 함수
를 사용해야 한다.

배열, 객체 등 업데이트 시 원본 배열(혹은 객체)의 사본을 만들고 값을 변경한 후 위의 두 방식 중 하나로 교체

ex)

1. object 값 변경
const object = {
    a : 1 ,
    b : 2 ,
    c : 3 ,
};
const newObject = {...object, d : 4, e : 5};
(object의 경우 ...(spread 연산자)를 사용해 처리

2. array 값 변경
const array = [
    {id : 1, value : true},
    {id : 2, value : true},
    {id : 3, value : true},
];
let newArray = array.concat({id: 4,})
newArray.filter(item => item.id !== 2);
newArray.map(item => item.id === 1 ? {...item, value : false} : item)
*/

export default Say;
