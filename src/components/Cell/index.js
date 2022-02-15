import './styles.scss';

function Cell(props) {
    return (
        <div className="cell-wrapper" style={{ backgroundColor: props.color }}>

        </div>
    );
}

export default Cell;
