import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import cross_icon from '../assests/cross.png';  // Corrected 'assests' to 'assets'
import zero_icon from '../assests/zero.png';    // Corrected 'assests' to 'assets'

let initialData = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [data, setData] = useState(initialData);
    let [title, setTitle] = useState("Tic Tac Toe Game In React");
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock || data[num]) {
            return;
        }
        let newData = [...data];
        if (count % 2 === 0) {
            newData[num] = "x";
        } else {
            newData[num] = "o";
        }
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    };

    const checkWin = (newData) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
                won(newData[a]);
                break;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            setTitle(`Congratulations: Player X`);
        } else {
            setTitle(`Congratulations: Player O`);
        }
    };

    const reset = () => {
        setLock(false);
        setData(initialData);
        setCount(0);
        setTitle("Tic Tac Toe Game In React");
    };

    return (
        <div className='container'>
            <h1 className='title'>{title}</h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}>{data[0] && <img src={data[0] === "x" ? cross_icon : zero_icon} alt={data[0]} />}</div>
                    <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}>{data[1] && <img src={data[1] === "x" ? cross_icon : zero_icon} alt={data[1]} />}</div>
                    <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}>{data[2] && <img src={data[2] === "x" ? cross_icon : zero_icon} alt={data[2]} />}</div>
                </div>
                <div className="row">
                    <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}>{data[3] && <img src={data[3] === "x" ? cross_icon : zero_icon} alt={data[3]} />}</div>
                    <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}>{data[4] && <img src={data[4] === "x" ? cross_icon : zero_icon} alt={data[4]} />}</div>
                    <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}>{data[5] && <img src={data[5] === "x" ? cross_icon : zero_icon} alt={data[5]} />}</div>
                </div>
                <div className="row">
                    <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}>{data[6] && <img src={data[6] === "x" ? cross_icon : zero_icon} alt={data[6]} />}</div>
                    <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}>{data[7] && <img src={data[7] === "x" ? cross_icon : zero_icon} alt={data[7]} />}</div>
                    <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}>{data[8] && <img src={data[8] === "x" ? cross_icon : zero_icon} alt={data[8]} />}</div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
};

export default TicTacToe;
