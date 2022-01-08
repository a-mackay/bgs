import lake from "./lake.jpg";
import { useState, useEffect } from 'react';
import './App.css';
import { bgData, Bg } from "./Bgs";

function App() {
    const [bgs, setBgs] = useState<Bg[]>([])
    useEffect(
        () => {
            bgData().then(bgsList => setBgs(bgsList))
        }
    )
    return (
        <div className="App" style={{ backgroundImage:`url(${lake})` }}>
            <BgTable bgs={bgs}/>
        </div>
    );
}

interface BgTableProps {
    bgs: Bg[];
}

function BgTable({ bgs }: BgTableProps) {
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
