import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
    // const {name, children} = props; destructuring assignment
    // 객체의 값을 비구조화하여 사용
    return (
        <div>
            <div>My First Component with React</div>
            <div>And my name is {name}</div>
            <div>This is Child props : {children}</div>
        </div>
    )
};

// props 미전달시 default props 값 지정
MyComponent.defaultProps = {
    name : '-'
};

// propTypes 를 통한 props 검증 -> 필수 props 지정 또는 자료형 지정
MyComponent.propTypes= {
    name : PropTypes.string
    /*
    array,
    arrayOf(PropTypes.types) -> 특정 props로 이루어진 배열 type
    bool, func, number, object, string, symbol(ES6 symbol)
    node,
    instanceOf(Class) -> 특정 class의 instance
    oneOf([datas]) -> 해당 배열의 요소 중 하나
    oneOfType([PropTypes.type]) -> 해당 배열 datatype들 중 하나
    ... any -> 모두
     */
};

export default MyComponent;
//다른 파일에서 이 파일을 import 할 때, 위의 MyComponent 클래스를 불러오도록 설정