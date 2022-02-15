import './styles.scss';
import { ON } from "../../shared/constants"

function Cell(props) {
    return (
        <div className="cell-wrapper"
            style={props.status === ON ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
            rowId={props.rowId}
            cellId={props.cellId}
        />
    );
}

export default Cell;
