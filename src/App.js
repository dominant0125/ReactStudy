import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Component';

function App() {
    const name = 'React';
    const style = {
        backgroundColor: 'Black',  // background-color -> backgroundColor
        color: 'aqua',
        fontSize: '48px',          // font-size    -> fontSize
        fontWeight: 'bold',        // font-weight  -> fontWeight
        padding: '16px',
    }
    return (
        <>
            {/* Make comments like this
            or
            this*/}
            /*if make comments like this, ESLint hits it*/
            <div style={style}>
                {name === 'React' && <p>True</p>}
            </div>
            <div className="react">
                Test
            </div>
            <MyComponent name={"Park"}>Child</MyComponent>
        </>
    );
}

export default App;
