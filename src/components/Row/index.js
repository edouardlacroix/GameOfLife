import Cell from '../Cell';
import './styles.scss';

function Row(props) {
    return (
        <div className="row-wrapper" id={props.id}>
            {props.cells && props.cells.map((item, cellId) => {
                return (<Cell rowId={props.id} cellId={cellId} status={item.status} />)
            })}
        </div>
    );
}

export default Row;
