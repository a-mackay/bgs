import lake from "./lake.jpg";
import React from 'react';
import './App.css';
import { bgData, Bg } from "./Bgs";

function App() {
    return (
        <div className="App" style={{ backgroundImage:`url(${lake})` }}>
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

interface BgRowProps {
    bg: Bg;
    isOddRow: boolean;
}

function BgRow({bg, isOddRow}: BgRowProps) {
    let className = isOddRow ? "OddTableRow" : "EvenTableRow";

    return (
        <tr className={className}>
            <td>{bg.name}</td>
            <td>{bg.owner}</td>
        </tr>
    )
}

export default App;
