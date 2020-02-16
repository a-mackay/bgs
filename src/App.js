import React from 'react';
import './App.css';
import { bgData } from "./Bgs.js";


function App() {
    return (
        <div className="App">
            <Header/>
            <BgTable/>
            <Footer/>
        </div>
    );
}

function Header() {
    return (
        <div className="Header">
            <div className="HeaderTitle">
                We don't own enough boardgames
            </div>
        </div>
    )
}

function BgTable() {
    let bgs = bgData();

    return (
        <table className="BgTable">
            <tr>
                <th>Boardgame</th>
                <th>Owner</th>
            </tr>
            {allCategories().map(cat => {
                return <BgTableSection
                    title={cat.name}
                    iconClassName={cat.className}
                    bgs={bgs.filter(bg => bg.complexity === cat.id)}
                />
            })}
        </table>
    )
}

function BgTableSection({title, iconClassName, bgs}) {
    return (
        <>
            <tr className="BgTableSectionTitleRow">
                <td colSpan="2">
                    {BgTableSectionTitle(title, iconClassName)}
                </td>
            </tr>
            {bgs.map((bg, index) => BgRow(bg, index % 2 === 0))}
        </>
    )
}

function BgTableSectionTitle(title, iconClassName) {
    return (
        <div className="BgTableSectionTitle">
            {Icon(iconClassName)}
            <div className="BgTableSectionTitleText">{title}</div>
        </div>
    )
}

function category(id, name, className) {
    return {
        "id": id,
        "name": name,
        "className": className
    }
}

function allCategories() {
    return [
        category(5, "Gigantic Brain", "GiganticBrain"),
        category(4, "Big Brained", "BigBrained"),
        category(3, "Normal", "Normal"),
        category(2, "Simpleton", "Simpleton"),
        category(1, "Complete Pinhead", "CompletePinhead"),
        category(0, "Shelf Of Shame", "ShelfOfShame")
    ]
}

function BgRow(bg, isOddRow) {
    let className = isOddRow ? "OddTableRow" : "EvenTableRow";

    return (
        <tr className={className}>
            <td>{bg.name}</td>
            <td>{bg.owner}</td>
        </tr>
    )
}

function Footer() {
    return <div className="Footer">Pioneering site design by a-mackay</div>
}

function Icon(imageClassName) {
    let className = `Icon ${imageClassName}`;
    return <div className={className}/>
}

export default App;
