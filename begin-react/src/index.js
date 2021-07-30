import React from 'react';
import ReactDOM from 'react-dom';

// JSX

// const names = ["Doğancan", "Seval", "Damla"];

function App() {
    const buttonValue = "My Button"
    const str1 = "Click ";
    const str2 = "Me"
    return (
        <div>
            {/* {names.map(name => <h1>{name}</h1>)} */}
            <h2>Tag önemi</h2>
            <ul>
                <li>Ali</li>
                <li>Ayşe</li>
                <li>Fatma</li>
            </ul>
            {/* <button type="button">JSX BUTTON</button> */}
            <button tabIndex="3" className="jsxClass" type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid yellow"}}>{buttonValue}</button>
            <button tabIndex="3" className="jsxClass" type="button" style={{padding: "10px", color: "white", backgroundColor: "red", border: "2px solid yellow"}}>{str1.concat(str2)}</button>
        </div>
    );
}

// class App2 extends React.Component {
//     render () {
//         return <h1>Benim adım Doğancan.</h1>;
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
