import './styles.scss';
import Row from '../../components/Row';
import { useEffect, useState } from 'react';
import { MAX_ROW, MAX_CELL, ON, OFF } from '../../shared/constants';

function Centralized() {
    const [rows, setRows] = useState()

    useEffect(() => {
        let localCellArray = [];
        let localRowArray = [];

        // Creating the array of array (row[cells[]])
        for (let index = 0; index < MAX_ROW; index++) {
            for (let cellIndex = 0; cellIndex < MAX_CELL; cellIndex++) {
                // Starting with the center cell ON, half the MAX -1 to offset the array starting at 0, rounding if MAX is Odd
                if (index === Math.round(MAX_ROW / 2) - 1 && cellIndex === Math.round(MAX_CELL / 2) - 1) {
                    localCellArray.push({ status: ON })
                } else {
                    localCellArray.push({ status: OFF })
                }
            }
            // Add list a cells to rows
            localRowArray.push(localCellArray)
            // Reset Cell array
            localCellArray = []
        }
        setRows(localRowArray)
    }, [])

    // Return an new array of all cells and their status
    const calculateNextStep = () => {
        // Make copy of original array
        let localCopy = [...rows]
        // For each cell calculated state based on origin and push to new array
        rows.forEach((row, index) => {
            row.forEach((cell, cellIndex) => {
                // - Take position
                // - Add all status of close cells, 2 >= alive <= 3
                if (cell.status === OFF) {
                    localCopy[index][cellIndex].status = ON
                } else {
                    localCopy[index][cellIndex].status = OFF
                }
            })
        });
        // Set new array
        setRows(localCopy)
    }

    return (
        <div className="centralized-wrapper">
            <h1>The Game Of Life</h1>
            <h2>Centralized Version</h2>
            <p>Here every actions, data and algorithms are handled by the main board</p>
            <button onClick={() => calculateNextStep()}>Manual next step</button>

            <div className='mainframe-wrapper'>
                {rows && rows.map((item, id) => {
                    return (<Row cells={item} id={id} />)
                })}
            </div>

        </div>
    );
}

export default Centralized;
