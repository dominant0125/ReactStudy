import React, {Component} from "react";

class Counter extends Component {

    /*
    constructor(props) {
        //class component에서 constructor 선언시 항상 super(props); 호출
        // -> 상속받은 react의 component클래스가 생성자 호출.
        super(props);

        // 이후 object 형태의 state 선언.
        this.state = {
            num_first: 0,
            num_second: 0,
        }
    }
    */
    state={
        num_first:0,
        num_second:0
    };

    render() {
        const {num_first, num_second} = this.state;

        return (
            <div>
                <h1>{num_first} + {num_second} = {num_first + num_second}</h1>
                <div>
                    <button
                        onClick={() => {
                            this.setState({
                                num_first: num_first + 1
                            });
                            console.log({num_first})
                        }}
                    >
                        Plus 1
                    </button>
                    <button onClick={()=>{
                        this.setState(prevState =>{
                            return {
                                num_first : prevState.num_first + 2
                            }
                        });
                        this.setState(prevState =>{console.log(prevState.num_first)})
                    }}
                    >
                        Plus 2
                    </button>
                    <button
                        onClick={() => {
                            this.setState({num_first: num_first - 1});
                            console.log({num_first})
                        }}
                    >
                        Subs 1
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;