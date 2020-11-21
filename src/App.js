import React from 'react';
import './App.css';
import { bgData } from "./Bgs.js";


function App() {
    return (
        <div className="App">
            <BgTable/>
        </div>
    );
}

function BgTable() {
    let bgs = bgData();

    return (
        <table className="BgTable">
            <tbody>
                <tr>
                    <th>Boardgame</th>
                    <th>Owner</th>
                </tr>
                {bgs.map((bg, index) => {
                    return <BgRow
                        key={bg.name}
                        bg={bg}
                        isOddRow={index % 2 !== 0}
                    />
                })}
            </tbody>
        </table>
    )
}

function BgRow({bg, isOddRow}) {
    let className = isOddRow ? "OddTableRow" : "EvenTableRow";

    return (
        <tr className={className}>
            <td>{bg.name}</td>
            <td>{bg.owner}</td>
        </tr>
    )
}

export default App;
