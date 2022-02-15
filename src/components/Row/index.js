import './styles.scss';

function Row(props) {
    return (
        <div className="row-wrapper" id={props.id}>
            {props.cells && props.cells.map(item => item)}
        </div>
    );
}

export default Row;
