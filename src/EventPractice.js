import React, {Component} from "react";

class EventPractice extends Component {
    state = {
        username: '',
        input_val: ''
    };

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e)=> {
        // this.setState({input_val: e.target.value})
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {
        // alert(this.state.input_val);
        // this.setState({input_val: ''})
        alert(this.state.username + ": " + this.state.input_val);
        this.setState({
            username: '',
            input_val: '',
        })
    }


    render() {
        const input_val = this.state.input_val;
        const username = this.state.username;
        return (
            <div>
                <h1>Event practice</h1>
                <div>
                    <input
                        type={'text'}
                        name={'input_val'}
                        placeholder={'Input Any Text'}
                        value={input_val}
                        // onChange={(e)=>this.handleChange(e)}
                        onChange={function (e) {
                            this.handleChange(e)
                        }.bind(this)}
                    />
                    <button
                        // onClick = {()=>this.handleClick()}>
                        onClick={function () {
                            this.handleClick()
                        }.bind(this)}>
                        confirm
                    </button>
                    <input
                        type={'text'}
                        name={'username'}
                        placeholder={'Input Name'}
                        value={username}
                        onChange={this.handleChange}/>
                        <button onClick={this.handleClick}>
                            confirm
                        </button>
                </div>
                {/*<div>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="message"*/}
                {/*        placeholder={"input anything u want"}*/}
                {/*        onChange={*/}
                {/*            (e)=> {*/}
                {/*                console.log(e)*/}
                {/*                // e: systheticEvent, 이벤트 종료후 초기화되므로 비동기적으로 참조할 필요가 있다면*/}
                {/*                // e.persist() 함수를 호출해야함.*/}
                {/*                console.log(e.target.value);*/}
                {/*                this.setState({input_val: e.target.value})*/}
                {/*            }*/}
                {/*        }/>*/}
                {/*        <button*/}
                {/*            onClick = {()=>{*/}
                {/*                alert(input_val)*/}
                {/*            }}*/}
                {/*        >confirm*/}
                {/*        </button>*/}
                {/*</div>*/}
                {/*    <h1>state value : {input_val}</h1>*/}
                {/*<button*/}
                {/*    onClick={()=>{*/}
                {/*        this.setState({input_val: ''})*/}
                {/*    }}*/}
                {/*>*/}
                {/*    clear*/}
                {/*</button>*/}
            </div>
        )
    }

}

export default EventPractice;


/*
event={
    function(){
        현재 위치인 function 을 사용한 event function 내부에서의 this 는 undefined.
        this 를 참조하면 undefined 참조 에러가 발생한다.

        해당 에러를 해결하는 방법
        1. function(){}.bind(this)로 render 함수 내부의 this 와 binding한다.
        2. constructor에서 bind
        ex)
            constructor(props) {
                super(props);
                this.funcName1 = this.funcName1.bind(this);
                this.funcName2 = this.funcName2.bind(this);
            }
        3. 화살표 함수 사용.
        ex)
           event={() => {func body}}
        4. 최초 메서드 정의부터 화살표 사용
        ex)
            funcName1 = (e) => {func body}
            funcName2 = (e) => {func body}
            ...
            event={this.funcName1(e)}
            event={this.funcName2()}
    }
}

 */