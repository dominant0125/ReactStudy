import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
    // const {name, children} = props; destructuring assignment
    // 객체의 값을 비구조화하여 사용
    return (
        <fragment>
            <div>My First Component with React</div>
            <div>And my name is {name}</div>
            <div>This is Child props : {children}</div>
        </fragment>
    )
};

// props 미전달시 default props 값 지정
MyComponent.defaultProps = {
    name : '-'
};

// propTypes 를 통한 props 검증 -> 필수 props 지정 또는 자료형 지정
MyComponent.propTypes= {
    name : PropTypes.string
};

export default MyComponent;
//다른 파일에서 이 파일을 import 할 때, 위의 MyComponent 클래스를 불러오도록 설정