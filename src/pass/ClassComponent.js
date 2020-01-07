import React, {Component} from "react";
import PropTypes from 'prop-types';

class ClassComponent extends Component{
    render() { // Class형 component에서는 항상 render 메소드로 dom을 리턴해야함.
        const {name, favorite_number} = this.props;
        return (
            <div>
                Hello <br/>
                My name is {name}<br/>
                My favorite number is {favorite_number}
            </div>
        );
    }

    static defaultProps={
        name: '-(default)'
    }

    static propTypes={
        name: PropTypes.string,
        favorite_number: PropTypes.number,
    }
}

export default ClassComponent;