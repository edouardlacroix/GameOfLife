import './styles.scss';
import Cell from '../../components/Cell';
import Row from '../../components/Row';
import { useEffect, useState } from 'react';

function isOdd(num) { return num % 2; }

function Centralized() {
    const [rows, setRows] = useState()

    useEffect(() => {
        let localCellArray = [];
        let localRowArray = [];

        for (let index = 0; index < 50; index++) {
            for (let cellIndex = 0; cellIndex < 50; cellIndex++) {
                localCellArray.push(<Cell color={'white'} />)
            }
            // Add list a cells to rows
            localRowArray.push(localCellArray)
            // Reset Cell array
            localCellArray = []
        }
        setRows(localRowArray)
    }, [])

    return (
        <div className="centralized-wrapper">
            <h1>The Game Of Life</h1>
            <h2>Centralized Version</h2>
            <p>Here every actions, data and algorithms are handled by the main board</p>

            <div className='mainframe-wrapper'>
                {rows && rows.map((item, id) => {
                    return (<Row cells={item} id={id} />)
                })}
            </div>

        </div>
    );
}

export default Centralized;
